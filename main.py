from flask import Flask
from app import Property

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/property", methods=['GET']) # We will need an id of the property and the user
def get_property(): 
    property = Property.render_property()
    return property.__dict__

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
    app.run(debug=True)