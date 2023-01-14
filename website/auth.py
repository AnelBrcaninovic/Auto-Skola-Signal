from flask import Blueprint, render_template

auth = Blueprint('auth', __name__)

@auth.route('/prijava')
def prijava():
    return render_template('prijava.html')