import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';

class Graph extends Component {
    render() {
        let count;
        if (this.props.data) {
            count = this.props.data.slice();
        }

        let data = [{
            name: this.props.question,
            Answer1: count[0],
            Answer2: count[1],
            Answer3: count[2],
            Answer4: count[3]
        }]

        return (
            <div className="graph">
                <BarChart width={600} height={300} data={data}
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis label={{ value: 'Times Answered', angle: -90, position: 'insideBottomLeft' }} />
                    <Legend />
                    <Bar name = {this.props.ans[0]} dataKey="Answer1" fill="#8884d8" />
                    <Bar name = {this.props.ans[1]} dataKey="Answer2" fill="#82ca9d" />
                    <Bar name = {this.props.ans[2]} dataKey="Answer3" fill="#8884d8" />
                    <Bar name = {this.props.ans[3]} dataKey="Answer4" fill="#82ca9d" />
                </BarChart>

                <button className="Next" onClick={this.props.onClick}>Next Question</button>
            </div>
        );
    }
}

export default Graph;