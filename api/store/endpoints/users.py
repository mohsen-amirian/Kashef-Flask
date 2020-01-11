import logging

from flask import request
from flask_restplus import Resource
#from rest_api_demo.api.blog.business import create_blog_post, update_post, delete_post
from api.store.serializers import store_user
from api.store.parsers import pagination_arguments
from api.restplus import api
from models import User

log = logging.getLogger(__name__)

ns = api.namespace('store/users', description='Operations related to store Users')


@ns.route('/')
class UsersCollection(Resource):

    @api.expect(pagination_arguments, validate=True)
    def get(self):
        ...



@ns.route('/')
class UsersCollection(Resource):

    # @api.expect(pagination_arguments)
    # @api.marshal_with(page_of_blog_posts)
    #@api.expect(store_user)
    @api.marshal_list_with(store_user)
    @api.expect(pagination_arguments)
    def get(self):
        """
        Returns list of users.
        """

        users_query = User.query.all()

        return users_query

    # @api.expect(blog_post)
    # def post(self):
    #     """
    #     Creates a new blog post.
    #     """
    #     create_blog_post(request.json)
    #     return None, 201


@ns.route('/<int:id>')
@api.response(404, 'User not found.')
class UserItem(Resource):

    @api.marshal_with(store_user)
    def get(self, id):
        """
        Returns a user.
        """
        return User.query.filter_by(id=id).first()

    # @api.expect(blog_post)
    # @api.response(204, 'Post successfully updated.')
    # def put(self, id):
    #     """
    #     Updates a blog post.
    #     """
    #     data = request.json
    #     update_post(id, data)
    #     return None, 204

    # @api.response(204, 'Post successfully deleted.')
    # def delete(self, id):
    #     """
    #     Deletes blog post.
    #     """
    #     delete_post(id)
    #     return None, 204

#
# @ns.route('/archive/<int:year>/')
# @ns.route('/archive/<int:year>/<int:month>/')
# @ns.route('/archive/<int:year>/<int:month>/<int:day>/')
# class PostsArchiveCollection(Resource):
#
#     @api.expect(pagination_arguments, validate=True)
#     @api.marshal_with(page_of_blog_posts)
#     def get(self, year, month=None, day=None):
#         """
#         Returns list of blog posts from a specified time period.
#         """
#         args = pagination_arguments.parse_args(request)
#         page = args.get('page', 1)
#         per_page = args.get('per_page', 10)
#
#         start_month = month if month else 1
#         end_month = month if month else 12
#         start_day = day if day else 1
#         end_day = day + 1 if day else 31
#         start_date = '{0:04d}-{1:02d}-{2:02d}'.format(year, start_month, start_day)
#         end_date = '{0:04d}-{1:02d}-{2:02d}'.format(year, end_month, end_day)
#         posts_query = Post.query.filter(Post.pub_date >= start_date).filter(Post.pub_date <= end_date)
#
#         posts_page = posts_query.paginate(page, per_page, error_out=False)
#
#         return posts_page