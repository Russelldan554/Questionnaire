import React from "react";



function Answer(props) {
    return (
        <button className="answer" onClick={props.onClick}>{props.value}</button>
    );
}

export default Answer;