from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

# create Application
app = Flask(__name__)

# create database for app as db
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///value_eat.db'
db = SQLAlchemy(app)

from value_eat import routes
from .models import *