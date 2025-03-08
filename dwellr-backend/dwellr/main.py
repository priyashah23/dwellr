from flask import Flask
from flaskext.mysql import MySQL
import os

app = Flask(__name__)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = os.environ.get('MYSQL_USER', 'root')
app.config['MYSQL_DATABASE_PASSWORD'] = os.environ.get('MYSQL_PASSWORD', 'root')
app.config['MYSQL_DATABASE_DB'] = os.environ.get('MYSQL_DATABASE', 'dwellr')
app.config['MYSQL_DATABASE_HOST'] = os.environ.get('MYSQL_HOST', 'db')
mysql.init_app(app)

@app.route("/")
def hello_world():
    conn = mysql.connect()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM listings")

    myresult = cursor.fetchall()
    print(myresult)

    cursor.close()
    conn.close()

    return "<p>Hello, World!</p>"

@app.route("/property", methods=['GET']) # We will need an id of the property and the user
def get_property(): 
    property_dict = {"name": 'ST ANDREWS ST'}
    #property = Property.render_property()
    return property_dict

@app.route("/user/<user_id>", methods=['GET'])
def get_quiz_question():
    question_dict = {"question_id": 0}
    return question_dict

@app.route("/user/<user_id>/preferences", methods=['POST'])
def post_preferences():
    pass

@app.route("/user/<user_id>/preferences", methods=['PUT'])
def update_preferences():
    pass

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')
