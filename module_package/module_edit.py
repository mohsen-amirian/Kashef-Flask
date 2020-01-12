import os
import random
from werkzeug.utils import secure_filename
import shutil
from db_manager.models import db, Module, Category, DataType, Input, InputParameter, Output
from configuration import config


class ModuleEdit:
    result_json = {}

    def __init__(self, form_request, form_files):
        self.form_request = form_request
        self.form_files = form_files

    def update_module(self):

        current_module = Module.query.filter_by(id=self.form_request['module_id']).first()

        # handling duplicate name
        same_modules = Module.query.filter(Module.name == self.form_request['name']).all()
        for module_item in same_modules:
            if module_item.id != current_module.id:
                return "duplicate_name"

        # handling duplicate code_name
        same_modules = Module.query.filter(Module.code_name == self.form_request['code_name']).all()
        for module_item in same_modules:
            if module_item.id != current_module.id:
                return "duplicate_codename"

        self.result_json['name'] = self.form_request['name']
        self.result_json['code_name'] = self.form_request['code_name']
        self.result_json['ws_url'] = self.form_request['ws_url']
        self.result_json['description'] = self.form_request['description']
        self.result_json['category'] = self.form_request['category']
        self.result_json['ws_type'] = self.form_request['ws_type']

        current_module.name = self.form_request['name']
        current_module.code_name = self.form_request['code_name']
        current_module.ws_url = self.form_request['ws_url']
        current_module.description = self.form_request['description']
        current_module.ws_type = self.form_request['ws_type']
        current_module.category_id = Category.query.filter_by(name=self.form_request['category']).first().id
        current_module.is_approved = False

        # icon file handling
        # if not set, don't update
        # if set, update it
        f = self.form_files['icon_file']
        filename = secure_filename(f.filename)
        if filename:
            try:
                # حذف آیکون قبلی
                if os.path.exists(current_module.icon_address):
                    os.remove(current_module.icon_address)

                # ذخیره کردن آیکون جدید
                f = self.form_files['icon_file']
                filename = secure_filename(f.filename)
                f.save(filename)
                files_list = os.listdir('{0}module_icons'.format(config.static_dir_local))
                filename_correction = False
                new_filename = filename
                while not filename_correction:
                    if new_filename in files_list:
                        new_filename = str(random.randint(0, 9)) + new_filename
                    else:
                        filename_correction = True
                shutil.move(filename, "{0}module_icons\\{1}".format(config.static_dir_local, new_filename))
                self.result_json['icon_file'] = "{0}module_icons\\{1}".format(config.static_dir_local, new_filename)
                current_module.icon_address = self.result_json['icon_file']

            except:
                return "icon_file_error"
        else:
            # don't update it
            self.result_json['icon_file'] = current_module.icon_address

        # image file handling
        # if not set, don't update
        # if set, update it
        f = self.form_files['img_file']
        filename = secure_filename(f.filename)
        if filename:
            try:
                # حذف تصویر قبلی
                current_image_name = current_module.image_address.replace("/static/module_images/", "")
                if os.path.exists("{0}module_images\\{1}".format(config.static_dir_local, current_image_name)):
                    os.remove("{0}module_images\\{1}".format(config.static_dir_local, current_image_name))

                # ذخیره و کپی کردن تصویر جدید با نام جدید
                f = self.form_files['img_file']
                filename = secure_filename(f.filename)
                f.save(filename)
                files_list = os.listdir('{0}module_images'.format(config.static_dir_local))
                filename_correction = False
                new_filename = filename
                while not filename_correction:
                    if new_filename in files_list:
                        new_filename = str(random.randint(1, 99)) + new_filename
                    else:
                        filename_correction = True
                shutil.move(filename, "{0}module_images\\{1}".format(config.static_dir_local, new_filename))
                current_module.image_address = "/static/module_images/{0}".format(new_filename)
            except:
                return "img_file_error"
        else:
            pass
            # نیازی نیست عملی صورت پذیرد. همان عکس قبلی می ماند

        db.session.commit()

        return "SUCCESS"

    def update_inputs_and_outputs(self):
        # حذف تمام ورودی ها و خروجی ها

        module_inputs = Input.query.filter_by(module_id=self.form_request['module_id']).all()
        for input_item in module_inputs:
            input_item.is_deleted = True

        module_parameters = InputParameter.query.filter_by(module_id=self.form_request['module_id']).all()
        for param_item in module_parameters:
            param_item.is_deleted = True

        module_outputs = Output.query.filter_by(module_id=self.form_request['module_id']).all()
        for output_item in module_outputs:
            output_item.is_deleted = True

        db.session.commit()

        inputs = []
        outputs = []

        x = self.form_request
        for key, value in x.items():
            if key.startswith('name_in') and (not key.startswith('name_in_param')) and value != '':
                temp_dic = {}
                temp_dic['name'] = value
                temp_dic['is_parameter'] = False

                input_type = x['type_in{0}'.format(key.replace('name_in', ''))]
                db_type_name = ''
                if input_type.count('Integer') > 0:
                    input_type = 'int'
                    db_type_name = 'Integer'
                elif input_type.count('String') > 0:
                    input_type = 'str'
                    db_type_name = 'String'
                elif input_type.count('File') > 0:
                    input_type = 'file'
                    db_type_name = 'File'
                elif input_type.count('Float') > 0:
                    input_type = 'float'
                    db_type_name = 'Float'
                elif input_type.count('List') > 0:
                    input_type = 'list'
                    db_type_name = 'Float'

                temp_dic['type'] = input_type

                script_name = x['script_name_in{0}'.format(key.replace('name_in', ''))]
                temp_dic['script_name'] = script_name

                inputs.append(temp_dic)

                new_module = Module.query.filter_by(name=self.form_request['name']).first()
                selected_type = DataType.query.filter_by(name=db_type_name).first()
                new_input = Input(
                    name=temp_dic['name'],
                    module_id=new_module.id,
                    data_type_id=selected_type.id,
                    script_name=script_name,
                    is_deleted=False,
                )

                db.session.add(new_input)
                db.session.commit()

            if key.startswith('name_in_param') and value != '':
                temp_dic = {}
                temp_dic['name'] = value
                temp_dic['is_parameter'] = True
                temp_dic['description'] = x['description_in_param{0}'.format(key.replace('name_in_param', ''))]
                input_type = x['type_in_param{0}'.format(key.replace('name_in_param', ''))]

                db_type_name = ''
                if input_type.count('Integer') > 0:
                    input_type = 'int'
                    db_type_name = 'Integer'
                elif input_type.count('String') > 0:
                    input_type = 'str'
                    db_type_name = 'String'
                elif input_type.count('File') > 0:
                    input_type = 'file'
                    db_type_name = 'File'
                elif input_type.count('Float') > 0:
                    input_type = 'float'
                    db_type_name = 'Float'
                elif input_type.count('List') > 0:
                    input_type = 'list'
                    db_type_name = 'List'

                temp_dic['type'] = input_type

                script_name = x['script_name_in_param{0}'.format(key.replace('name_in_param', ''))]
                temp_dic['script_name'] = script_name

                inputs.append(temp_dic)

                new_module = Module.query.filter_by(name=self.form_request['name']).first()
                selected_type = DataType.query.filter_by(name=db_type_name).first()
                new_input_parameter = InputParameter(
                    name=temp_dic['name'],
                    module_id=new_module.id,
                    data_type_id=selected_type.id,
                    script_name=script_name,
                    is_deleted=False,
                )

                db.session.add(new_input_parameter)
                db.session.commit()

            if key.startswith('name_out') and value != '':
                temp_dic = {}
                temp_dic['name'] = value

                output_type = x['type_out{0}'.format(key.replace('name_out', ''))]
                db_type_name = ''
                if output_type.count('Integer') > 0:
                    output_type = 'int'
                    db_type_name = 'Integer'
                elif output_type.count('String') > 0:
                    output_type = 'str'
                    db_type_name = 'String'
                elif output_type.count('File') > 0:
                    output_type = 'file'
                    db_type_name = 'File'
                elif output_type.count('Float') > 0:
                    output_type = 'float'
                    db_type_name = 'Float'
                elif output_type.count('List') > 0:
                    output_type = 'list'
                    db_type_name = 'List'

                temp_dic['type'] = output_type

                script_name = x['script_name_out{0}'.format(key.replace('name_out', ''))]
                temp_dic['script_name'] = script_name

                outputs.append(temp_dic)

                new_module = Module.query.filter_by(name=self.form_request['name']).first()
                selected_type = DataType.query.filter_by(name=db_type_name).first()
                new_output = Output(
                    name=temp_dic['name'],
                    module_id=new_module.id,
                    data_type_id=selected_type.id,
                    script_name=script_name,
                    is_deleted=False,
                )

                db.session.add(new_output)
                db.session.commit()

        self.result_json['inputs'] = inputs
        self.result_json['outputs'] = outputs

    def finalize_module_edition(self):
        # module = Module.query.filter_by(id=self.form_request['module_id']).first()
        # # حذف فایل ماژول قبلی
        # current_package_name = module.package_address.replace("/static/module_packages/", "")
        # if os.path.exists("{0}module_packages\\{1}".format(config.static_dir_local, current_package_name)):
        #     os.remove("{0}module_packages\\{1}".format(config.static_dir_local, current_package_name))
        #
        # package_file = kashef_packager.make_package(self.result_json,
        #                                             '{0}module_packages\\'.format(config.static_dir_local))
        # new_package_file = os.path.basename(package_file)
        #
        # module.package_address = "/static/module_packages/{0}".format(new_package_file)
        db.session.commit()


