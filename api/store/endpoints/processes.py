import logging

from flask_restplus import Resource
from api.store.serializers import store_process
from api.store.business import create_new_process
from api.restplus import api
from models import Process, UserProcess
from flask import request
from flask_user import current_user

log = logging.getLogger(__name__)

ns = api.namespace('store/processes', description='Operations related to store Processes')


@ns.route('/add')
class CreateProcess(Resource):
    @api.expect(store_process)
    def post(self):
        """
        Creates a new process.
        """
        create_new_process(request.json)
        return None, 201


@ns.route('/user-processes')
@api.response(404, 'Process not found.')
class CurrentUserProcesses(Resource):

    @api.marshal_with(store_process)
    def get(self):
        """
        Returns processes of current user.
        """

        not_approved_processes = Process.query.filter((Process.is_approved == 0) | (Process.is_deleted == 1)).all()
        not_approved_process_ids = []
        for process_item in not_approved_processes:
            not_approved_process_ids.append(process_item.id)

        created_processes = Process.query.filter(Process.user_id == current_user.id, Process.is_deleted == 0,
                                                 Process.is_approved == 1).all()
        created_processes_ids = []

        for process_item in created_processes:
            created_processes_ids.append(process_item.id)

        bought_user_processes = UserProcess.query.filter(UserProcess.user_id == current_user.id).all()
        bought_processes_ids = []
        for user_process_item in bought_user_processes:
            if user_process_item.process_id not in not_approved_process_ids:
                bought_processes_ids.append(user_process_item.process_id)

        bought_processes_ids.extend(created_processes_ids)
        bought_processes_ids = list(set(bought_processes_ids))
        final_processes_to_send = Process.query.filter(Process.id.in_(bought_processes_ids)).all()

        return final_processes_to_send
