from flask import Flask, Blueprint, render_template, request, redirect
from models import db, Module, User, Role, UserRoles, Output, Input, InputParameter, DataType, Category, Process, UserModules, UserProcess
from flask_user import UserManager, UserMixin, login_required, roles_required, current_user
import module_register
from process_register import ProcessRegister
from process_edit import ProcessEdit
from module_edit import ModuleEdit
from db_manager import DbManager
import db_initiator
import config

from api.store.endpoints.users import ns as store_users_namespace
from api.store.endpoints.modules import ns as store_modules_namespace
from api.store.endpoints.processes import ns as store_process_namespace
from api.store.endpoints.categories import ns as store_categories_namespace
from api.restplus import api
from flask_cors import CORS
from flask_babelex import Babel

class ConfigClass(object):
    """ Flask application config """

    # Flask settings
    SECRET_KEY = config.secret_key

    # Flask-SQLAlchemy settings
    SQLALCHEMY_DATABASE_URI = config.data_base_uri  # File-based SQL database
    SQLALCHEMY_TRACK_MODIFICATIONS = False  # Avoids SQLAlchemy warning

    # Flask-User settings
    USER_APP_NAME = "KASHEF"  # Shown in and email templates and page footers
    USER_ENABLE_EMAIL = False  # Enable email authentication
    USER_ENABLE_USERNAME = True  # Disable username authentication
    USER_REQUIRE_RETYPE_PASSWORD = True  # Simplify register form

    BABEL_DEFAULT_LOCALE = 'fa'


app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config.from_object(__name__ + '.ConfigClass')

babel = Babel(app)

# Create all database tables
with app.app_context():
    db.init_app(app)
    db.create_all()
    user_manager = UserManager(app, db, User)
    di = db_initiator.DbInitiator()
    di.create_users(user_manager)


############################################################################################
@app.route('/')
def home_page():

    categories = Category.query.all()
    modules = Module.query.filter_by(is_approved=True, is_deleted=False).all()

    try:
        if not current_user.is_approved:
            return render_template("index.html", modules=modules, categories=categories,
                                   role="not_approved_dev")
        role_id = UserRoles.query.filter_by(user_id=current_user.id).first().role_id
        return render_template("index.html", modules=modules, categories=categories,
                               role=Role.query.filter_by(id=role_id).first().name)
    except:
        pass

    return render_template("index.html", modules=modules, categories=categories,
                           role="Customer")


############################################################################################
@app.route('/admin')
@roles_required('Admin')
def admin_page():
    number_of_not_approved_users = 0
    users = User.query.all()
    for user in users:
        user_role = UserRoles.query.filter_by(user_id=user.id).first()
        if user_role is None or not user.is_approved:
            number_of_not_approved_users += 1

    not_approved_modules = Module.query.filter_by(is_approved=False, is_deleted=False).all()
    not_approved_processes = Process.query.filter_by(is_approved=False, is_deleted=False).all()

    return render_template("admin_page.html", number_of_not_approved_users=number_of_not_approved_users,
                           number_of_not_approved_modules=len(not_approved_modules),
                           number_of_not_approved_processes=len(not_approved_processes))


############################################################################################
@app.route('/user-manager')
@app.route('/user-manager/<int:user_id>')
@roles_required('Admin')
def user_manager_page(user_id=None):

    if user_id is not None:
        user = User.query.filter_by(id=user_id).first()
        if user.is_approved:
            user.is_approved = 0
            user_modules = Module.query.filter_by(user_id=user.id).all()
            for module in user_modules:
                module.is_approved = 0
                db.session.commit()

            user_role = UserRoles.query.filter_by(user_id=user_id).first()
            db.session.delete(user_role)
            db.session.commit()


        else:
            user.is_approved = 1
            user_role = UserRoles(
                user_id=user_id,
                role_id=Role.query.filter(Role.name == 'ModuleDeveloper').first().id,
            )
            db.session.add(user_role)
            db.session.commit()

        db.session.commit()

    # [userObj1, userObj2]
    not_approved_users = []

    # [[userObj1,3], [userObj2,5]]
    approved_users_info = []
    users = User.query.all()

    for user in users:
        if not user.is_deleted:

            user_role = UserRoles.query.filter_by(user_id=user.id).first()
            if user_role is None or not user.is_approved:
                not_approved_users.append(user)

            else:
                if Role.query.filter_by(id=user_role.role_id).first().name == "ModuleDeveloper":
                    user_modules = Module.query.filter_by(user_id=user.id).all()
                    approved_users_info.append([user, len(user_modules)])

    return render_template("user_manager.html", approved_users_info=approved_users_info,
                           not_approved_users=not_approved_users)


############################################################################################
@app.route('/user-delete/<int:user_id>')
@roles_required('Admin')
def user_delete(user_id):
    dm = DbManager()

    result = dm.user_delete(user_id)

    if result == "SUCCESS":
        return redirect('/user-manager')

    else:
        return "حذف کاربر با مشکل مواجه شد. دوباره امتحان کنید."


############################################################################################
@app.route('/module-manager')
@app.route('/module-manager/<int:module_id>')
@roles_required('Admin')
def module_manager_page(module_id=None):
    if module_id is not None:
        module = Module.query.filter_by(id=module_id).first()
        if module.is_approved:
            print('disapproved')
            module.is_approved = 0
        else:
            print('approved')
            module.is_approved = 1
        db.session.commit()

    approved_modules = Module.query.filter_by(is_approved=True, is_deleted=False).all()
    # [[1,module1,ali], [2,module2,mohsen]]
    approved_modules_info = []
    for module in approved_modules:
        approved_modules_info.append([module.id, module.name, User.query.filter_by(id=module.user_id).first().username])

    not_approved_modules = Module.query.filter_by(is_approved=False, is_deleted=False).all()
    # [[3,module3,hassan], [4,module4,hossein]]
    not_approved_modules_info = []
    for module in not_approved_modules:
        not_approved_modules_info.append([module.id, module.name, User.query.filter_by(id=module.user_id).first().username])

    return render_template("module_manager.html", approved_modules_info=approved_modules_info,
                           not_approved_modules_info=not_approved_modules_info)


############################################################################################
@app.route('/process-manager')
@app.route('/process-manager/<int:process_id>')
@roles_required('Admin')
def process_manager_page(process_id=None):
    if process_id is not None:
        process = Process.query.filter_by(id=process_id).first()
        if process.is_approved:
            process.is_approved = 0
        else:
            process.is_approved = 1
        db.session.commit()

    approved_processes = Process.query.filter_by(is_approved=1, is_deleted=0).all()
    # [[1,process1,ali], [2,process2,mohsen]]
    approved_processes_info = []
    for process in approved_processes:
        print(process.user_id)
        approved_processes_info.append([process.id, process.name, User.query.filter_by(id=process.user_id).first().username])

    not_approved_processes = Process.query.filter_by(is_approved=False, is_deleted=False).all()
    # [[3,module3,hassan], [4,module4,hossein]]
    not_approved_processes_info = []
    for process in not_approved_processes:
        not_approved_processes_info.append([process.id, process.name, User.query.filter_by(id=process.user_id).first().username])

    return render_template("process_manager.html", approved_processes_info=approved_processes_info,
                           not_approved_processes_info=not_approved_processes_info)


############################################################################################
@app.route('/developer-dashboard')
@roles_required('ModuleDeveloper')
def developer_dashboard_page():

    if current_user.is_approved:
        modules = Module.query.filter_by(user_id=current_user.id, is_deleted=False).all()
        bought_modules = []
        for user_module in UserModules.query.filter_by(user_id=current_user.id).all():
            bought_modules.append(Module.query.filter_by(id=user_module.module_id).first())

        processes = Process.query.filter_by(user_id=current_user.id, is_deleted=False).all()

        return render_template("developer_dashboard.html", my_modules=modules, my_processes=processes,
                               bought_modules=bought_modules)
    else:
        return render_template("not_approved_developer.html")


############################################################################################
@app.route('/module-info/<int:module_id>')
def module_info_page(module_id):
    module = Module.query.filter_by(id=module_id).first()
    dm = DbManager()
    is_admin_or_module_owner = False
    if module.user_id == current_user.id or dm.get_user_role(current_user.id) == "Admin":
        is_admin_or_module_owner = True

    user_module = UserModules.query.filter_by(user_id=current_user.id, module_id=module_id).first()

    bought_module = False
    if user_module is not None:
        bought_module = True

    # {'in1':integer, 'in2':String,}
    inputs = {}
    for input1 in Input.query.filter_by(module_id=module_id, is_deleted=False).all():
        inputs[input1.name] = DataType.query.filter_by(id=input1.data_type_id).first().name


    # {'out1':integer, 'out2':String,}
    outputs = {}
    for output1 in Output.query.filter_by(module_id=module_id, is_deleted=False).all():
        outputs[output1.name] = DataType.query.filter_by(id=output1.data_type_id).first().name

    try:
        if not current_user.is_approved:
            return render_template("module_info.html", module=module, bought_module=bought_module,
                                   inputs=inputs, outputs=outputs, role="not_approved_dev",
                                   is_admin_or_module_owner=is_admin_or_module_owner)
        role_id = UserRoles.query.filter_by(user_id=current_user.id).first().role_id
        return render_template("module_info.html", module=module, bought_module=bought_module,
                               inputs=inputs, outputs=outputs, is_admin_or_module_owner=is_admin_or_module_owner,
                               role=Role.query.filter_by(id=role_id).first().name)
    except:
        pass

    return render_template("module_info.html", module=module, inputs=inputs, outputs=outputs,
                           role="Customer")


############################################################################################
@app.route('/buy-module/<int:module_id>')
@roles_required('ModuleDeveloper')
def buy_module_page(module_id):
    dm = DbManager()
    result = dm.buy_module(current_user.id, module_id)
    if result == "SUCCESS":
        return redirect('/module-info/{0}'.format(module_id))

############################################################################################
@app.route('/buy-process/<int:process_id>')
@roles_required('ModuleDeveloper')
def buy_process_page(process_id):
    dm = DbManager()
    print(process_id)
    result = dm.buy_process(current_user.id, process_id)
    if result == "SUCCESS":
        return redirect('/process-info/{0}'.format(process_id))

############################################################################################
@app.route('/module-register/')
@roles_required('ModuleDeveloper')
def module_register_page():
    return render_template('module_register.html', data_types=DataType.query.all(),
                           categories=Category.query.all())


############################################################################################
@app.route('/render-module-register-form/', methods=['POST'])
@roles_required('ModuleDeveloper')
def render_module_register_form():

    rm = module_register.ModuleRegister(request.form, request.files)
    result = rm.create_module()
    if result == "duplicate_name":
        return render_template("module_register.html", data_types=DataType.query.all(),
                               categories=Category.query.all(), duplicate_name=True)
    elif result == "duplicate_codename":
        return render_template("module_register.html", data_types=DataType.query.all(),
                               categories=Category.query.all(), duplicate_codename=True)
    elif result == "icon_file_error":
        return render_template("module_register.html", data_types=DataType.query.all(),
                               categories=Category.query.all(), icon_file_error=True)

    rm.create_inputs_and_outputs()
    module = Module.query.filter_by(name=request.form['name']).first()
    db.session.commit()

    return redirect('/module-info/{0}'.format(module.id))


############################################################################################
@app.route('/module-edit/<int:module_id>')
@roles_required('ModuleDeveloper')
def module_edit_page(module_id):

    module = Module.query.filter_by(id=module_id).first()

    if current_user.id != module.user_id:
        return "شما اجازه ی ویرایش این ماژول را ندارید"

    category = Category.query.filter_by(id=module.category_id).first()

    inputs = Input.query.filter(Input.module_id == module_id, Input.is_deleted == 0).all()

    outputs = Output.query.filter(Output.module_id == module_id, Output.is_deleted == 0).all()
    print(inputs)
    print(outputs)
    return render_template("module_edit.html", module=module, inputs=inputs, outputs=outputs,
                           module_category=category,
                           data_types=DataType.query.all(), categories=Category.query.all())


############################################################################################
@app.route('/render-module-edit-form/', methods=['POST'])
@roles_required('ModuleDeveloper')
def render_module_edit_form():
    em = ModuleEdit(request.form, request.files)
    result = em.update_module()

    if result != "SUCCESS":
        module = Module.query.filter_by(id=request.form['module_id']).first()
        category = Category.query.filter_by(id=module.category_id).first()
        inputs = Input.query.filter_by(module_id=module.id, is_deleted=False).all()
        parameters = InputParameter.query.filter_by(module_id=module.id, is_deleted=False).all()
        outputs = Output.query.filter_by(module_id=module.id, is_deleted=False).all()
        if result == "duplicate_name":
            return render_template("module_edit.html", module=module, inputs=inputs, outputs=outputs,
                                   parameters=parameters, module_category=category,
                                   data_types=DataType.query.all(), categories=Category.query.all(), duplicate_name=True)
        elif result == "duplicate_codename":
            return render_template("module_edit.html", module=module, inputs=inputs, outputs=outputs,
                                   parameters=parameters, module_category=category,
                                   data_types=DataType.query.all(), categories=Category.query.all(), duplicate_codename=True)
        elif result == "icon_file_error":
            return render_template("module_edit.html", module=module, inputs=inputs, outputs=outputs,
                                   parameters=parameters, module_category=category,
                                   data_types=DataType.query.all(), categories=Category.query.all(), icon_file_error=True)
        elif result == "img_file_error":
            return render_template("module_edit.html", module=module, inputs=inputs, outputs=outputs,
                                   parameters=parameters, module_category=category,
                                   data_types=DataType.query.all(), categories=Category.query.all(), img_file_error=True)

    em.update_inputs_and_outputs()

    em.finalize_module_edition()

    return redirect('/module-info/{0}'.format(request.form['module_id']))


############################################################################################
@app.route('/module-delete/<int:module_id>')
@roles_required(['ModuleDeveloper', 'Admin'])
def module_delete(module_id):
    dm = DbManager()

    if current_user.id != Module.query.filter_by(id=module_id).first().user_id and \
            dm.get_user_role(current_user.id) == "ModuleDeveloper":
        return "شما اجازه ی حذف کردن این ماژول را ندارید"

    result = dm.module_delete(module_id)

    if result == "SUCCESS":
        if dm.get_user_role(current_user.id) == "Admin":
            return redirect('/module-manager')
        elif dm.get_user_role(current_user.id) == "ModuleDeveloper":
            return redirect('/developer-dashboard')

    else:
        return "حذف ماژول با مشکل مواجه شد. دوباره امتحان کنید."


############################################################################################
@app.route('/processes')
def processes_page():
    processes = Process.query.filter_by(is_approved=1, is_deleted=0).all()
    print(processes)
    try:
        if not current_user.is_approved:
            return render_template("processes.html", processes=processes,
                                   role="not_approved_dev")
        role_id = UserRoles.query.filter_by(user_id=current_user.id).first().role_id
        return render_template("processes.html", processes=processes,
                               role=Role.query.filter_by(id=role_id).first().name)
    except:
        pass

    return render_template("processes.html", processes=processes, role="Customer")


############################################################################################

@app.route('/process-register/')
@roles_required('ModuleDeveloper')
def process_register_page():
    return render_template('process_register.html')


############################################################################################
@app.route('/render-process-register-form/', methods=['POST'])
@roles_required('ModuleDeveloper')
def render_process_register_form():

    rp = ProcessRegister(request.form, request.files)
    result = rp.create_process()
    if result == "duplicate_name":
        return render_template('process_register.html', duplicate_name=True)
    elif result == "duplicate_package_name":
        return render_template('process_register.html', duplicate_package_name=True)
    elif result == "kpp_file_error":
        return render_template('process_register.html', kpp_file_error=True)
    elif result == "img_file_error":
        return render_template('process_register.html', img_file_error=True)

    process = Process.query.filter_by(name=request.form['name']).first()

    return redirect('/process-info/{0}'.format(process.id))


############################################################################################
@app.route('/process-info/<int:process_id>')
def process_info_page(process_id):

    process = Process.query.filter_by(id=process_id).first()
    try:
        dm = DbManager()
        is_admin_or_process_owner = False
        if process.user_id == current_user.id or dm.get_user_role(current_user.id) == "Admin":
            is_admin_or_process_owner = True

        user_process = UserProcess.query.filter_by(user_id=current_user.id, process_id=process_id).first()

        bought_module = False
        if user_process is not None:
            bought_module = True

        if not current_user.is_approved:
            return render_template("process_info.html", process=process, role="not_approved_dev",
                                   is_admin_or_process_owner=is_admin_or_process_owner,bought_module=bought_module)
        role_id = UserRoles.query.filter_by(user_id=current_user.id).first().role_id
        return render_template("process_info.html", process=process, role=Role.query.filter_by(id=role_id).first().name,
                               is_admin_or_process_owner=is_admin_or_process_owner,bought_module=bought_module)
    except:
        pass

    return render_template("process_info.html", process=process, role="Customer")


############################################################################################
@app.route('/process-edit/<int:process_id>')
@roles_required('ModuleDeveloper')
def process_edit(process_id):

    process = Process.query.filter_by(id=process_id).first()

    if current_user.id != process.user_id:
        return "شما اجازه ی ویرایش این ماژول را ندارید"

    return render_template("process_edit.html", process=process)


############################################################################################
@app.route('/render-process-edit-form/', methods=['POST'])
@roles_required('ModuleDeveloper')
def render_process_edit_form():
    em = ProcessEdit(request.form, request.files)
    result = em.update_process()

    process = Process.query.filter_by(id=request.form['process_id']).first()

    if result != "SUCCESS":
        if result == "duplicate_name":
            return render_template("process_edit.html", process=process,
                                   duplicate_name=True)
        elif result == "duplicate_package_name":
            return render_template("process_edit.html", process=process,
                                   duplicate_package_name=True)
        elif result == "kpp_file_error":
            return render_template("process_edit.html", process=process,
                                   kpp_file_error=True)
        elif result == "img_file_error":
            return render_template("process_edit.html", process=process,
                                   img_file_error=True)

    return redirect('/process-info/{0}'.format(process.id))


############################################################################################
@app.route('/process-delete/<int:process_id>')
@roles_required(['ModuleDeveloper', 'Admin'])
def process_delete(process_id):
    dm = DbManager()

    if current_user.id != Process.query.filter_by(id=process_id).first().user_id and \
            dm.get_user_role(current_user.id) == "ModuleDeveloper":
        return "شما اجازه ی حذف کردن این فرآیند را ندارید"

    result = dm.process_delete(process_id)

    if result == "SUCCESS":
        if dm.get_user_role(current_user.id) == "Admin":
            return redirect('/process-manager')
        elif dm.get_user_role(current_user.id) == "ModuleDeveloper":
            return redirect('/developer-dashboard')

    else:
        return "حذف ماژول با مشکل مواجه شد. دوباره امتحان کنید."


############################################################################################
@app.route('/about-us')
def about_us_page():

    try:
        if not current_user.is_approved:
            return render_template("about_us.html", role="not_approved_dev")
        role_id = UserRoles.query.filter_by(user_id=current_user.id).first().role_id
        return render_template("about_us.html", role=Role.query.filter_by(id=role_id).first().name)
    except:
        pass

    return render_template("about_us.html", role="Customer")


############################################################################################
@app.route('/help')
def help_page():

    try:
        if not current_user.is_approved:
            return render_template("help.html", role="not_approved_dev")
        role_id = UserRoles.query.filter_by(user_id=current_user.id).first().role_id
        return render_template("help.html", role=Role.query.filter_by(id=role_id).first().name)
    except:
        pass
    return render_template("help.html", role="Customer")


############################################################################################
@app.route('/toolbox')
@roles_required('ModuleDeveloper')
def toolbox_page():

    return render_template("toolbox.html")


############################################################################################
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response
############################################################################################
# Start development web server


if __name__ == '__main__':

    blueprint = Blueprint('api', __name__, url_prefix='/api')
    api.init_app(blueprint)
    api.add_namespace(store_users_namespace)
    api.add_namespace(store_modules_namespace)
    api.add_namespace(store_process_namespace)
    api.add_namespace(store_categories_namespace)
    app.register_blueprint(blueprint)

    app.run(host='0.0.0.0', port=5000, debug=True)
    # di = db_initiator.DbInitiator()
    # di.create_users(user_manager)