from flask import Flask, request
from jinja2 import Environment, PackageLoader, select_autoescape, Template

SECRET = 'W3llPl4yed!'

app = Flask(__name__)
env = Environment()
env.globals['SECRET'] = SECRET

def printTemplate(name, company):
    template = env.from_string(f'Bonjour {{{{ name }}}} de {company}')
    output = template.render(name=name, company=company)

    return output




@app.route('/', methods=['GET', 'POST'])
def index():
    page = '''<!DOCTYPE html>
    <html>
        <body>
            <form method="POST">
                <label for="input-name">Nom</label>
                <input id="input-name" type="text" name="name">
                <label for="input-company">Entreprise</label>
                <input id="input-company" type="text" name="company">
                <button type="submit">Envoyer</button>
            </form>'''
    if request.method == 'POST':
        page += printTemplate(request.form['name'], request.form['company'])
    page += '''
        <body>
    </html>'''

    return page

if '__main__' == __name__:
    app.run(host='0.0.0.0', debug=True)
