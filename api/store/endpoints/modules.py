from flask_restplus import Resource
from api.store.serializers import store_module, user_modules
from api.restplus import api
from models import Module, UserModules, Input, InputParameter, Output, DataType
from flask_user import current_user

# log = logging.getLogger(__name__)

ns = api.namespace('store/modules', description='Operations related to store Modules')


@ns.route('/')
class ModulesCollection(Resource):

    @api.marshal_list_with(store_module)
    def get(self):
        """
        Returns list of modules.
        """

        return Module.query.all()


@ns.route('/user-modules')
@api.response(404, 'Modules not found.')
class CurrentUserModule(Resource):

    @api.marshal_with(user_modules)
    def get(self):
        """
        Returns modules of current user.
        """

        not_approved_modules = Module.query.filter((Module.is_approved == 0) | (Module.is_deleted == 1)).all()
        not_approved_module_ids = []
        for module_item in not_approved_modules:
            not_approved_module_ids.append(module_item.id)

        created_modules = Module.query.filter(Module.user_id == current_user.id, Module.is_deleted == 0,
                                              Module.is_approved == 1).all()
        created_modules_ids = []

        for module_item in created_modules:
            created_modules_ids.append(module_item.id)

        bought_user_modules = UserModules.query.filter(UserModules.user_id == current_user.id).all()
        bought_modules_ids = []
        for user_module_item in bought_user_modules:
            if user_module_item.module_id not in not_approved_module_ids:
                bought_modules_ids.append(user_module_item.module_id)
        bought_modules_ids.extend(created_modules_ids)
        bought_modules_ids = list(set(bought_modules_ids))
        final_modules_to_send = Module.query.filter(Module.id.in_(bought_modules_ids)).all()

        for module in final_modules_to_send:

            inputs = Input.query.filter(Input.module_id == module.id, Input.is_deleted == 0).all()
            input_parameters = InputParameter.query.filter(InputParameter.module_id == module.id,
                                                           InputParameter.is_deleted == 0).all()
            outputs = Output.query.filter(Output.module_id == module.id, Output.is_deleted == 0).all()

            inputs_array = []
            for input_item in inputs:
                input_dic = {}
                input_dic["id"] = input_item.id
                input_dic["name"] = input_item.name
                input_dic["scriptName"] = input_item.script_name
                input_dic["isParameter"] = 0
                input_dic["type"] = DataType.query.filter(DataType.id == input_item.data_type_id).first().name
                input_dic["description"] = input_item.description
                inputs_array.append(input_dic)

            for input_param_item in input_parameters:
                input_dic = {}
                input_dic["id"] = input_param_item.id
                input_dic["name"] = input_param_item.name
                input_dic["scriptName"] = input_param_item.script_name
                input_dic["isParameter"] = 1
                input_dic["type"] = DataType.query.filter(DataType.id == input_param_item.data_type_id).first().name
                input_dic["description"] = input_param_item.description
                inputs_array.append(input_dic)

            outputs_array = []
            for output_item in outputs:
                output_dic = {}
                output_dic["id"] = output_item.id
                output_dic["name"] = output_item.name
                output_dic["scriptName"] = output_item.script_name
                output_dic["type"] = DataType.query.filter(DataType.id == output_item.data_type_id).first().name
                output_dic["description"] = output_item.description
                outputs_array.append(output_dic)

            # print(res)
            module.inputs = inputs_array
            module.outputs = outputs_array

        return final_modules_to_send


@ns.route('/<int:id>')
@api.response(404, 'Module not found.')
class ModuleItem(Resource):

    @api.marshal_with(store_module)
    def get(self, id):
        """
        Returns modules of specific user id.
        """
        print(id)
        created_modules = Module.query.filter(Module.user_id == id).all()
        created_modules_ids = []
        for module_item in created_modules:
            created_modules_ids.append(module_item.id)

        bought_modules = UserModules.query.filter(UserModules.user_id == id).all()
        bought_modules_ids = []
        for module_item in bought_modules:
            bought_modules_ids.append(module_item.id)

        bought_modules_ids.extend(created_modules_ids)
        bought_modules_ids = list(set(bought_modules_ids))
        return Module.query.filter(Module.id.in_(bought_modules_ids)).all()
