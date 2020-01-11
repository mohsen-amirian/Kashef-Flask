import os
import random
from werkzeug.utils import secure_filename
import shutil
from models import db, Process
import config
import datetime


class ProcessEdit:

    def __init__(self, form_request, form_files):
        self.form_request = form_request
        self.form_files = form_files

    def update_process(self):

        current_process = Process.query.filter_by(id=self.form_request['process_id']).first()

        # handling duplicate name
        same_processes = Process.query.filter(Process.name == self.form_request['name']).all()
        for process_item in same_processes:
            if process_item.id != current_process.id:
                return "duplicate_name"

        # handling duplicate package_name
        same_processes = Process.query.filter(Process.package_name == self.form_request['package_name']).all()
        for process_item in same_processes:
            if process_item.id != current_process.id:
                return "duplicate_package_name"

        # فقط نام پکیج تغییر کرده و فایل جدیدی انتخاب نشده است
        if self.form_request['package_name'] != Process.query.filter_by(package_name=self.form_request['package_name']).first() and \
                'kpp_file' not in self.form_files:
            shutil.move("{0}process_packages\\{1}.kpp".format(config.static_dir_local, current_process.package_name),
                        "{0}process_packages\\{1}.kpp".format(config.static_dir_local, self.form_request['package_name']))
            package_address = "/static/process_packages/{0}.kpp".format(self.form_request['package_name'])
            current_process.package_address = package_address

        # handling package file
        if 'kpp_file' in self.form_files:
            try:
                # حذف فایل فرآیند قبلی
                if os.path.exists(
                        "{0}process_packages\\{1}.kpp".format(config.static_dir_local, current_process.package_name)):
                    os.remove(
                        "{0}process_packages\\{1}.kpp".format(config.static_dir_local, current_process.package_name))

                # ذخیره و کپی کردن فایل فرآیند جدید با نام جدید
                f = self.form_files['kpp_file']
                filename = secure_filename(f.filename)
                f.save(filename)

                shutil.move(filename, "{0}.kpp".format(self.form_request['package_name']))
                filename = "{0}.kpp".format(self.form_request['package_name'])

                # اطمینان از نبودن فایل با نام مشابه
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
                current_process.package_address = package_address
            except:
                return "kpp_file_error"

        # image file handling
        # image_address = ''
        if 'img_file' in self.form_files:
            try:
                # حذف عکس قبلی
                if os.path.exists("{0}process_images\\{1}.kpp".format(config.static_dir_local,
                                                                      current_process.image_address.replace(
                                                                         "/static/process_images/", ''))):
                    os.remove("{0}process_images\\{1}.kpp".format(config.static_dir_local,
                                                                  current_process.image_address.replace(
                                                                         "/static/process_images/", '')))
                # ذخیره سازی عکس جدید
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
                current_process.image_address = "/static/process_images/{0}".format(new_filename)
            except:
                return "img_file_error"

        current_process.name = self.form_request['name']
        current_process.package_name = self.form_request['package_name']
        current_process.description = self.form_request['description']
        current_process.is_approved = False
        current_process.last_modified_date = str(datetime.datetime.utcnow())

        db.session.commit()

        return "SUCCESS"
