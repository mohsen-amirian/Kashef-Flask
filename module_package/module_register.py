from flask_user import current_user
import os
import random
from werkzeug.utils import secure_filename
import shutil
from db_manager.models import db, Module, Category, DataType, Input, InputParameter, Output
import datetime
from configuration import config


class ModuleRegister:
    result_json = {}

    def __init__(self, form_request, form_files):
        self.form_request = form_request
        self.form_files = form_files

    def create_module(self):

        if not Module.query.filter(Module.name == self.form_request['name']).first():
            self.result_json['name'] = self.form_request['name']
        else:
            return "duplicate_name"

        if not Module.query.filter(Module.code_name == self.form_request['code_name']).first():
            self.result_json['code_name'] = self.form_request['code_name']
        else:
            return "duplicate_codename"
        self.result_json['ws_url'] = self.form_request['ws_url']
        self.result_json['description'] = self.form_request['description']
        self.result_json['category'] = self.form_request['category']
        self.result_json['ws_type'] = self.form_request['ws_type']

        # icon file handling
        try:
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
            self.result_json['icon_file'] = "/static/module_icons/{0}".format(new_filename)

            icon_address = self.result_json['icon_file']

        except:
            return "icon_file_error"

        # image file handling
        image_address = ''
        try:
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
            image_address = "/static/module_images/{0}".format(new_filename)

        except:
            pass
            # نیازی نیست عملی صورت پذیرد. به طور خودکار در هنگام نمایش، یک تصویر قرارداده می شود

        module = Module(
            name=self.result_json['name'],
            code_name=self.result_json['code_name'],
            description=self.result_json['description'],
            web_service_url=self.result_json['ws_url'],
            web_service_type=self.result_json['ws_type'],
            creation_date=str(datetime.datetime.utcnow()),
            package_address='not specified',  # will be define when inputs and outputs are generated and json file is complete
            image_address=image_address,
            icon_address=icon_address,
            is_approved=False,
            is_deleted=False,
            category_id=Category.query.filter_by(name=self.form_request['category']).first().id,
            user_id=current_user.id,
        )
        db.session.add(module)
        db.session.commit()

    def create_inputs_and_outputs(self):
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
                temp_dic['box'] = value
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
