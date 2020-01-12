from db_manager.models import db
from db_manager.models import Process, UserProcess
from flask_user import current_user


def create_new_process(data):
    name = data.get('name')
    description = data.get('description')
    json_file = data.get('json_file')
    process = Process(
        user_id=current_user.id,
        name=name,
        description=description,
        json_file=json_file,
        is_approved=0,
        is_deleted=0
    )
    db.session.add(process)

    user_process = UserProcess(
        user_id=current_user.id,
        process_id=process.id
    )
    db.session.add(user_process)

    db.session.commit()
