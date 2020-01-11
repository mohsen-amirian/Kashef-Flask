from flask_user import current_user
import os
import random
from werkzeug.utils import secure_filename
import shutil
from models import db, Process
import datetime
import config


class ProcessRegister:

    def __init__(self, form_request, form_files):
        self.form_request = form_request
        self.form_files = form_files

    def create_process(self):

        if Process.query.filter(Process.name == self.form_request['name']).first():
            return "duplicate_name"

        if self.form_request['package_name'] != '' and \
                Process.query.filter(Process.package_name == self.form_request['package_name']).first():
            return "duplicate_package_name"

        if 'kpp_file' not in self.form_files:
            return "kpp_file_error"

        if 'img_file' not in self.form_files:
            return "img_file_error"


        # package file (KPP) handling
        try:
            f = self.form_files['kpp_file']
            filename = secure_filename(f.filename)
            f.save(filename)

            if self.form_request['package_name'] != '':
                shutil.move(filename, "{0}.kpp".format(self.form_request['package_name']))
                filename = "{0}.kpp".format(self.form_request['package_name'])

            files_list = os.listdir('{0}process_packages'.format(config.static_dir_local))
            filename_correction = False
            new_filename = filename
            while not filename_correction:
                if new_filename in files_list:
                    new_filename = str(random.randint(0, 9)) + new_filename
                else:
                    filename_correction = True
            shutil.move(filename, "{0}process_packages\\{1}".format(config.static_dir_local, new_filename))
            package_address = "/static/process_packages/{0}".format(new_filename)

        except:
            return "kpp_file_error"

        # image file handling
        try:
            f = self.form_files['img_file']
            filename = secure_filename(f.filename)
            f.save(filename)
            files_list = os.listdir('{0}process_images'.format(config.static_dir_local))
            filename_correction = False
            new_filename = filename
            while not filename_correction:
                if new_filename in files_list:
                    new_filename = str(random.randint(1, 99)) + new_filename
                else:
                    filename_correction = True
            shutil.move(filename, "{0}process_images\\{1}".format(config.static_dir_local, new_filename))
            image_address = "/static/process_images/{0}".format(new_filename)

        except:
            return "img_file_error"

        process = Process(
            name=self.form_request['name'],
            package_name=self.form_request['package_name'],
            description=self.form_request['description'],
            creation_date=str(datetime.datetime.utcnow()),
            package_address=package_address,
            image_address=image_address,
            is_approved=False,
            is_deleted=False,
            user_id=current_user.id,
        )
        db.session.add(process)
        db.session.commit()

        return "SUCCESS"
