import os

static_dir_local = "D:\\projects\\kashef\\KashefModuleStore\\static\\"
data_base_uri = 'sqlite:///app.sqlite'
secret_key = "This is a secret key for Kashef Module Store App."
server_name = 'localhost:8888'
SQLALCHEMY_TRACK_MODIFICATIONS = False

# Flask settings
FLASK_SERVER_NAME = 'localhost:8888'
FLASK_DEBUG = True  # Do not use debug mode in production

# Flask-Restplus settings
RESTPLUS_SWAGGER_UI_DOC_EXPANSION = 'list'
RESTPLUS_VALIDATE = True
RESTPLUS_MASK_SWAGGER = False
RESTPLUS_ERROR_404_HELP = False

# Flask-User settings
USER_APP_NAME = "KASHEF"  # Shown in and email templates and page footers
USER_ENABLE_EMAIL = False  # Enable email authentication
USER_ENABLE_USERNAME = True  # Disable username authentication
USER_REQUIRE_RETYPE_PASSWORD = True  # Simplify register form
SERVER_NAME = 'localhost:8888'
BABEL_DEFAULT_LOCALE = 'fa'
