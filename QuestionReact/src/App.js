import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Graph from './Components/Graph';
import $ from'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showForm: true,
        questions: [],
        count : [0,0,0,0]
    }
  }

  collectData(count) {
      this.setState({
          showForm: !this.state.showForm,
          count: count
      });
      this.post(count);
  }

  post(count) {
      $.ajax({
          url: 'http://127.0.0.1:5000/process',
          type: 'POST',
          data: {
              questionID : this.state.questions.questionID,
              answer1 : count[0],
              answer2 : count[1],
              answer3 : count[2],
              answer4 : count[3]
          },
          dataType: "json",
          success: function (data) {
                console.log(data);
          },
          error: function (xhr, status, err) {
              console.log(err);
          }
      });
  }

  componentWillMount(){
  }

    componentDidMount(){
        this.getQuestion();
    }

  getQuestion() {
    $.ajax({
       url: 'http://127.0.0.1:5000/',
       type : 'GET',
       dataType:'json',
       cache: false,
       success: function(data) {
           this.setState({
                questions: data
            })
           this.setState({
               count: this.state.questions.count
           })
       }.bind(this),
        error: function(xhr,status, err){
           console.log(err);
        }
    });
  }

  formSubmit() {
      this.setState({showForm: !this.state.showForm});
      this.getQuestion();
  }

  render() {
    const showForm = this.state.showForm;
    return (
      <div className="Questionnaire">
          {showForm ? (
              <Form
                  showForm={showForm}
                  count = {this.state.questions.count}
                  question = {this.state.questions.question}
                  ans = {this.state.questions.answers}
                  countData={this.collectData.bind(this)}
                  onClick={() => this.formSubmit()}>
              </Form>
          ) : (
             <Graph
                 showForm={showForm}
                 data={this.state.count}
                 question = {this.state.questions.question}
                 ans = {this.state.questions.answers}
                 onClick={() => this.formSubmit()}>
             </Graph>
          )}
      </div>
    );
  }
}

export default App;
