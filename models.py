from flask_sqlalchemy import SQLAlchemy
from flask_user import UserMixin
import json
from json import JSONEncoder

db = SQLAlchemy()


# Define the User data-model.
class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    active = db.Column('is_active', db.Boolean(), nullable=False, server_default='1')

    # User authentication information. The collation='NOCASE' is required
    # to search case insensitively when USER_IFIND_MODE is 'nocase_collation'.
    username = db.Column(db.String(100, collation='NOCASE'), nullable=False, unique=True)
    email = db.Column(db.String(255, collation='NOCASE'), nullable=True, unique=True)
    password = db.Column(db.String(255), nullable=False, server_default='')

    # User information
    first_name = db.Column(db.String(100, collation='NOCASE'), nullable=False, server_default='')
    last_name = db.Column(db.String(100, collation='NOCASE'), nullable=False, server_default='')

    # Other info's
    user_registration_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_deleted = db.Column(db.Boolean())
    is_approved = db.Column(db.Boolean())

    # Define the relationship to Role via UserRoles
    roles = db.relationship('Role', secondary='user_roles')


# Define the Role data-model
class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(50), unique=True)
    creation_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_deleted = db.Column(db.Boolean())

    users = db.relationship('User', secondary='user_roles')


# Define the UserRoles association table
class UserRoles(db.Model):
    __tablename__ = 'user_roles'
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id', ondelete='CASCADE'))
    role_id = db.Column(db.Integer(), db.ForeignKey('roles.id', ondelete='CASCADE'))
    is_deleted = db.Column(db.Boolean())


class Module(db.Model):
    __tablename__ = 'modules'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    code_name = db.Column(db.String(255), unique=True)
    description = db.Column(db.Text)
    web_service_url = db.Column(db.Text)
    package_address = db.Column(db.Text)
    image_address = db.Column(db.Text)
    icon_address = db.Column(db.Text)
    web_service_type = db.Column(db.String(50))
    creation_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_approved = db.Column(db.Boolean())
    is_deleted = db.Column(db.Boolean())
    category_id = db.Column(db.Integer(), db.ForeignKey('categories.id', ondelete='CASCADE'))
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id', ondelete='CASCADE'))
    tags = db.relationship('Tag', secondary='module_tags')


class UserModules(db.Model):
    __tablename__ = 'user_module'
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id', ondelete='CASCADE'))
    module_id = db.Column(db.Integer(), db.ForeignKey('modules.id', ondelete='CASCADE'))


class Process(db.Model):
    __tablename__ = 'processes'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(255), unique=True)
    package_name = db.Column(db.String(255), unique=True)
    description = db.Column(db.Text)
    json_file = db.Column(db.Text)
    creation_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_deleted = db.Column(db.Boolean())
    image_address = db.Column(db.Text)
    is_approved = db.Column(db.Boolean())
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id', ondelete='CASCADE'))


class UserProcess(db.Model):
    __tablename__ = 'user_process'
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id', ondelete='CASCADE'))
    process_id = db.Column(db.Integer(), db.ForeignKey('processes.id', ondelete='CASCADE'))


class Category(db.Model):
    __tablename__ = 'categories'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.Text)
    creation_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_deleted = db.Column(db.Boolean())


class DataType(db.Model):
    __tablename__ = 'data_types'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.Text)
    creation_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_deleted = db.Column(db.Boolean())


class Input(db.Model):
    __tablename__ = 'inputs'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    script_name = db.Column(db.String(100))
    description = db.Column(db.Text)
    module_id = db.Column(db.Integer(), db.ForeignKey('modules.id', ondelete='CASCADE'))
    data_type_id = db.Column(db.Integer(), db.ForeignKey('data_types.id', ondelete='CASCADE'))
    is_deleted = db.Column(db.Boolean())


class InputParameter(db.Model):
    __tablename__ = 'input_parameters'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    script_name = db.Column(db.String(100))
    description = db.Column(db.Text)
    module_id = db.Column(db.Integer(), db.ForeignKey('modules.id', ondelete='CASCADE'))
    data_type_id = db.Column(db.Integer(), db.ForeignKey('data_types.id', ondelete='CASCADE'))
    is_deleted = db.Column(db.Boolean())


class Output(db.Model):
    __tablename__ = 'outputs'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    script_name = db.Column(db.String(100))
    description = db.Column(db.Text)
    module_id = db.Column(db.Integer(), db.ForeignKey('modules.id', ondelete='CASCADE'))
    data_type_id = db.Column(db.Integer(), db.ForeignKey('data_types.id', ondelete='CASCADE'))
    is_deleted = db.Column(db.Boolean())


class Tag(db.Model):
    __tablename__ = 'tags'
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.Text)
    creation_date = db.Column(db.String(50))
    last_modified_date = db.Column(db.String(50))
    is_deleted = db.Column(db.Boolean())

    modules = db.relationship('Module', secondary='module_tags')


class ModuleTags(db.Model):
    __tablename__ = 'module_tags'
    id = db.Column(db.Integer(), primary_key=True)
    module_id = db.Column(db.Integer(), db.ForeignKey('modules.id', ondelete='CASCADE'))
    tag_id = db.Column(db.Integer(), db.ForeignKey('tags.id', ondelete='CASCADE'))
    is_deleted = db.Column(db.Boolean())
