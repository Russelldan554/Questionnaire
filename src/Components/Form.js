import React, { Component } from 'react';
import Question from "./Question";
import Answer from "./Answer";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answered: false,
            count:null
        }
    }

    handleSubmit(e) {
        this.setState({
            answered: true
        }, function() {
            this.props.countData(this.state.count);
        });
        e.preventDefault();
    }

    handleClick(i) {
        const count = this.props.count.slice();
        count[i]++;
        this.setState({
            count: count
        });
    }


    render() {
        let ans = [0,0,0,0];
        if (this.props.ans) {
            ans = this.props.ans.slice();
        }

        return (
            <div className="Questionnaire">
                <Question value={this.props.question}></Question>
                <br/>
                <form onSubmit={this.handleSubmit.bind(this)}>
                <Answer
                    value={ans[0]}
                    onClick={() => this.handleClick(0)}>
                </Answer>
                <br/>
                <br/>
                <Answer
                    value={ans[1]}
                    onClick={() => this.handleClick(1)}>
                </Answer>
                <br/>
                <br/>
                <Answer
                    value={ans[2]}
                    onClick={() => this.handleClick(2)}>
                </Answer>
                <br/>
                <br/>
                <Answer
                    value={ans[3]}
                    onClick={() => this.handleClick(3)}>
                </Answer>
                </form>
            </div>
        );
    }
}

export default Form;
