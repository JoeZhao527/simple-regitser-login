from value_eat import app, db
from .models import Diner
from flask import render_template, request
import json

@app.route('/')
def home():
    return render_template('index.html', diner=None)

@app.route('/login',methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        info = json.loads(request.data)
        email = info['email']
        password = info['password']
        diner = None
        for i in Diner.query.filter_by(email=email, password=password):
            diner = i.firstname
        return str(diner)
    return render_template('login.html')

@app.route('/diner_register', methods=['GET', 'POST'])
def diner_register():
    if request.method == 'POST':
        info = json.loads(request.data)
        diner = Diner(firstname=info['firstname'], lastname=info['lastname'], email=info['email'], password=info['password'])
        db.session.add(diner)
        db.session.commit()
        return info['firstname']
    return render_template('diner_register.html')

@app.route('/<string:diner>')
def diner_home():
    return render_template('index.html', diner=diner)
