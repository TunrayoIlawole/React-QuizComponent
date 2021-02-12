import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion.js';
import QuizEnd from './QuizEnd.js';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        }
    }

    showNextQuestion() {
        this.setState({
            quiz_position: this.state.quiz_position + 1
        })
    }

    handleResetClick() {
        this.setState({
            quiz_position: 1
        })
    }

    render() {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length ? true : false;
        let returnedComponent;
        if(isQuizEnd) {
            returnedComponent = <QuizEnd />;
        } else {
            returnedComponent = <QuizQuestion quiz_question = {quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler = {this.showNextQuestion.bind(this)} resetClickHandler = {this.handleResetClick.bind(this)} />
        }
        return (
            <div>
                {returnedComponent}
            </div>
        )
    }
}

export default Quiz;