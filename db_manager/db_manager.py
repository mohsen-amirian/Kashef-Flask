from db_manager.models import db, User, Module, UserRoles, Role, Input, InputParameter, Output, Process, UserModules, UserProcess


class DbManager:

    def user_delete(self, user_id):
        try:
            user = User.query.filter_by(id=user_id).first()
            user_modules = Module.query.filter_by(user_id=user_id).all()
            for module in user_modules:
                self.module_delete(module.id)

            user.is_deleted = True
            user.is_approved = False
            # db.session.delete(user)
            db.session.commit()
            return "SUCCESS"
        except:
            return "fail to delete user"

    def module_delete(self, module_id):
        try:
            module = Module.query.filter_by(id=module_id).first()
            for input1 in Input.query.filter_by(module_id=module_id, is_deleted=False).all():
                input1.is_deleted = True

            for par1 in InputParameter.query.filter_by(module_id=module_id, is_deleted=False).all():
                par1.is_deleted = True

            for output1 in Output.query.filter_by(module_id=module_id, is_deleted=False).all():
                output1.is_deleted = True

            module.is_deleted = True
            module.is_approved = False

            # db.session.delete(module)
            db.session.commit()
        except:
            return "fail to delete module"

        return "SUCCESS"

    def process_delete(self, process_id):
        try:
            process = Process.query.filter_by(id=process_id).first()
            process.is_deleted = True
            process.is_approved = False

            # db.session.delete(process)
            db.session.commit()
            return "SUCCESS"
        except:
            return "fail to delete process"

    def get_user_role(self, user_id):
        user = User.query.filter_by(id=user_id).first()
        try:
            if not user.is_approved:
                return "not_approved_dev"

            role_id = UserRoles.query.filter_by(user_id=user_id).first().role_id
            return Role.query.filter_by(id=role_id).first().name
        except:
            return "Customer"

    def buy_module(self, user_id, module_id):
        try:
            user_module = UserModules(
                user_id=user_id,
                module_id=module_id,
            )
            db.session.add(user_module)
            db.session.commit()
            return "SUCCESS"

        except:
            return "fail to buy module"

    def buy_process(self, user_id, process_id):
        try:
            user_process = UserProcess(
                user_id=user_id,
                process_id=process_id,
            )
            db.session.add(user_process)
            db.session.commit()
            return "SUCCESS"

        except:
            return "fail to buy process"

