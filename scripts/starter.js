'use strict';

class Question {
    constructor(text, answers, correctAnswer) {
        this.text=text;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.userAnswer ='';
    }

    submitAnswer(answer) {
        this.userAnswer = answer;
    } 
    answerStatus() {
        if (this.userAnswer === this.correctAnswer) {
            return 1;
        }
        if (this.userAnswer === '') {
            return -1;
        }
        else {
            return 0;
        }
    }
}

class QuizApi {
    constructor() {
        this.BASE_URL = "https://opentdb.com/api.php?amount=5";
    }

    getItems(passedQuiz) {
        return fetch(this.BASE_URL)
            .then(res => res.json())
            .then(data => data.results.forEach(item => {       
                item.incorrect_answers.push(item.correct_answer);
                passedQuiz.unasked.push(new Question(item.question, item.incorrect_answers, item.correct_answer));
                })
                  
            )}
}