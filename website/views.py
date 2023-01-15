from flask import Blueprint, render_template, request, json, jsonify, flash

views = Blueprint('views', __name__)

@views.route('/', methods=['POST', 'GET'])
def homepage():

    return render_template('base.html')



