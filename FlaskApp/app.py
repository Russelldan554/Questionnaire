from flask import Flask, request, jsonify, json
from flask_mysqldb import MySQL
import random

app = Flask(__name__)

#Configure db
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Dino12help'
app.config['MYSQL_DB'] = 'Questionnaire'

mysql = MySQL(app)

@app.route('/', methods=['GET'])
def index():
    if request.method == "GET":
        questionID = random.randint(0,4)
        ques = ""
        answer = []
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM questions WHERE questionID = " + str(questionID))
        rv = cur.fetchall()
        cur.execute("SELECT * FROM questionCount WHERE questionID = " + str(questionID))
        co = cur.fetchall()
        cur.close()
        question = {
          'count' :[co[0][1],co[0][2],co[0][3],co[0][4]],
          'questionID': rv[0][0],
          'question': rv[0][1],
          'answers': [rv[0][2],rv[0][3],rv[0][4],rv[0][5]]
        }
        return jsonify(question)

@app.route('/process', methods=['POST'])
def process():
    id = 0
    count = [0,0,0,0]
    if request.method == "POST":
        ID = request.form['questionID']
        count[0] = request.form['answer1']
        count[1] = request.form['answer2']
        count[2] = request.form['answer3']
        count[3] = request.form['answer4']
        print(count, id)
        cur = mysql.connection.cursor()
        cur.execute("UPDATE questionCount SET answer1 = %s, answer2 = %s, answer3 = %s, answer4 = %s WHERE questionID = %s", (count[0],count[1],count[2],count[3],ID))
        mysql.connection.commit()
        cur.close()
        return json.dumps({'status' : 'ok'});

if __name__ == "__main__":
    app.run()

#CREATE DATABASE Questionnaire;
#USE Questionnaire
#CREATE TABLE questions(questionID int(4), question varchar(60), answer1 varchar(20), answer2 varchar(20), answer3 varchar(20), answer4 varchar(20));
#CREATE TABLE questionCount(questionID int(4), answer1 int(4), answer2 int(4), answer3 int(4), answer4 int(4));
# INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(0,"How many Continents are There?","7","8","12","21");
# INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (0,0,0,0,0);
# INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(1,"What do you prefer?","Cable","Netflix","Hulu","YouTube");
# INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (1,0,0,0,0);
# INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(2,"What is your favorite of the major four sports?","Basketball","Baseball","Football","Hockey");
# INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (2,0,0,0,0);
# INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(3,"What is your age?","0-11","12-18","21-34","34+");
# INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (3,0,0,0,0);
# INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(4,"Where are you from?","North America","Europe","Asia","Other");
# INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (4,0,0,0,0);
