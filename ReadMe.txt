Readme
Questionnaire Application created by Daniel Russell

This application presents the user with a random question once the answer is selected it shows them the results of their answer and past answers from users. Hitting the "next question" button will serve them another random question from the database.

The reactJS code is saved in the QuestionReact folder and the pythons/Flask code is in the FlaskApp folder.

SOFTWARE
Node.js 10.15.0
Create React App
jQuery
reCharts
Python 3.7.2
Flask
flask_mysqldb
MySQL 8.0.13.0

To install locally follow instructions below or host on a server using the build file located in QuestionReact however the flask server will need to still be installed and the url in app.js will have to be updated to the correct address
install nodeJS (https://nodejs.org/en/)
install recharts (http://recharts.org/en-US/)
in Command Prompt:
npm install -g create-react-app
cd QuestionReact\src
npm install jquery --save 
npm start

Install pyhon 3.7.2
open command prompt
cd \python37\Scripts (cd into wherever python is installed)
(May have to setup enviroment variables for python depending on installation)
pip virtual install virtualenv
(May need to create a virtualenv on your machine:
   virtualenv FlaskApp
   cd Scripts
   activate
   add app.py to folder
pip install flask
pip install flask-mysqldb
cd \FlaskApp\
python app.py

For the development environment to work correctly the browser may need to have cross origin resource sharing enabled. I used this chrome extension
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

Install MySQL 8.0 (most old versions would work)
open command prompt
I created a user 'root' with password 'Dino12help' for this database but if changed or using existing just update in app.py on #Configure DB
mysql --user root -p
PASSWORD
CREATE DATABASE Questionnaire;
USE Questionnaire
CREATE TABLE questions(questionID int(4), question varchar(60), answer1 varchar(20), answer2 varchar(20), answer3 varchar(20), answer4 varchar(20));
CREATE TABLE questionCount(questionID int(4), answer1 int(4), answer2 int(4), answer3 int(4), answer4 int(4));
INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(0,"How many Continents are There?","7","8","12","21");
INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (0,0,0,0,0);
INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(1,"What do you prefer?","Cable","Netflix","Hulu","YouTube");
INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (1,0,0,0,0);
INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(2,"What is your favorite of the major four sports?","Basketball","Baseball","Football","Hockey");
INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (2,0,0,0,0);
INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(3,"What is your age?","0-11","12-18","21-34","34+");
INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (3,0,0,0,0);
INSERT INTO questions(questionID,question,answer1,answer2,answer3,answer4) VALUES(4,"Where are you from?","North America","Europe","Asia","Other");
INSERT INTO questionCount(questionID,answer1,answer2,answer3,answer4) VALUES (4,0,0,0,0);

The npm start command should have opened a browser to localhost:3000 which is where the React page is and the python app should have started the server on localhost:5000 if this is changed then it will need to be updated in the ajax calls in app.js under the url tag.