from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def homepage():
    return render_template('base.html')


@views.route('/kontakt',methods=['GET', 'POST'])
def kontakt():
    return render_template('contact.html')

