from flask_restplus import fields
from api.restplus import api

store_user = api.model('Kashef Users', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a user'),
    'username': fields.String(required=False, description='UserName'),
    'first_name': fields.String(required=False, description='User first name'),
    'last_name': fields.String(required=False, description='User last name'),
})


store_module = api.model('Kashef Modules', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a module'),
    'name': fields.String(required=False, description='Name of Module'),
    'category_id': fields.Integer(required=False, description='Category of Module'),
    # 'code_name': fields.String(required=False, description='Module Code Name'),
    'description': fields.String(required=False, description='Description of module'),
    'web_service_url': fields.String(required=False, description='Module web service url'),
    'web_service_type': fields.String(required=False, description='Module web service type'),
    'image_address': fields.String(required=False, description='Module image address'),
    'icon_address': fields.String(required=False, description='Module icon address')

})

user_modules = api.model('Kashef Modules', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a module'),
    'name': fields.String(required=False, description='Persian Name of Module'),
    'category_id': fields.Integer(required=False, description='Category of Module'),

    'code_name': fields.String(required=False, description='English Name of Module'),
    'description': fields.String(required=False, description='Description of module'),
    'web_service_url': fields.String(required=False, description='Module web service url'),
    'web_service_type': fields.String(required=False, description='Module web service type'),
    'image_address': fields.String(required=False, description='Module image address'),
    'icon_address': fields.String(required=False, description='Module icon address'),
    'inputs': fields.Raw(required=False, description='Module inputs'),
    'outputs': fields.Raw(required=False, description='Module outputs')
})


store_process = api.model('Kashef Process', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a process'),
    'name': fields.String(required=False, description='Name of process'),
    'description': fields.String(required=False, description='Description of process'),
    'json_file': fields.String(required=False, description='Json file of process'),
})

module_categories = api.model('Kashef Categories', {
    'id': fields.Integer(readOnly=True, description='The unique identifier of a category'),
    'name': fields.String(required=False, description='Name of category'),
    'description': fields.String(required=False, description='Description of category'),
})

pagination = api.model('A page of results', {
    'page': fields.Integer(description='Number of this page of results'),
    'pages': fields.Integer(description='Total number of pages of results'),
    'per_page': fields.Integer(description='Number of items per page of results'),
    'total': fields.Integer(description='Total number of results'),
})
