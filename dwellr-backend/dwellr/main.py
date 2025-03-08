import logging
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

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/property", methods=['GET'])
def get_property(): 
    conn = mysql.connect()
    cursor = conn.cursor()

    cursor.execute('''
        SELECT * FROM listings LIMIT 1;
    ''')

    result = cursor.fetchall()
    logger.info(result)
    logger.info("Hello")
    cursor.close()
    conn.close()
    return "<p>Property</p>"

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
