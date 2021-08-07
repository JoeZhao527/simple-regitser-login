from value_eat import db

class Diner(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    firstname = db.Column(db.String(length=20), nullable=False)
    lastname = db.Column(db.String(length=20), nullable=False)
    email = db.Column(db.String(length=30), nullable=False, unique=True)
    password = db.Column(db.String(length=20), nullable=False)
    def __repr__(self):
        return f'Diner {self.firstname} {self.lastname}'
