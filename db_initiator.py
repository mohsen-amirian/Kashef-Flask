from models import db, User, Role
import datetime


class DbInitiator:

    def create_users(self, user_manager):
        # Create 'member1' user with 'Customer roles
        if not User.query.filter(User.username == 'member1').first():
            user = User(
                username='member1',
                user_registration_date=str(datetime.datetime.utcnow()),
                password=user_manager.hash_password('Password1'),
            )
            user.roles.append(Role(name='Customer'))
            db.session.add(user)
            db.session.commit()

        # Create 'admin1' user with 'Admin' role
        if not User.query.filter(User.username == 'admin1').first():
            user = User(
                username='admin1',
                user_registration_date=str(datetime.datetime.utcnow()),
                password=user_manager.hash_password('Password1'),
            )
            user.roles.append(Role(name='Admin'))
            db.session.add(user)
            db.session.commit()

        # Create 'dev1' user with 'dev1' role
        if not User.query.filter(User.username == 'dev1').first():
            user = User(
                username='dev1',
                user_registration_date=str(datetime.datetime.utcnow()),
                password=user_manager.hash_password('Password1'),
            )
            user.roles.append(Role(name='ModuleDeveloper'))
            db.session.add(user)
            db.session.commit()

        # Crate 'Admin' role in Role Table
        if not Role.query.filter(Role.name == 'Admin').first():
            role = Role(
                name='Admin'
            )
            db.session.add(role)
            db.session.commit()

        # Crate 'ModuleDeveloper' role in Role Table
        if not Role.query.filter(Role.name == 'ModuleDeveloper').first():
            role = Role(
                name='ModuleDeveloper'
            )
            db.session.add(role)
            db.session.commit()

        # Crate 'User' role in Role Table
        if not Role.query.filter(Role.name == 'Customer').first():
            role = Role(
                name='Customer'
            )
            db.session.add(role)
            db.session.commit()