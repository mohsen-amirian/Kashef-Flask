from flask_restplus import Resource
from api.store.serializers import module_categories
from api.restplus import api
from db_manager.models import Category

ns = api.namespace('store/categories', description='Operations related to store Categories')


@ns.route('/all_categories')
@api.response(404, 'Categories not found.')
class AllCategories(Resource):

    @api.marshal_with(module_categories)
    def get(self):
        """
        Returns all categories of modules.
        """

        return Category.query.all()

