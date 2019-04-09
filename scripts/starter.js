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

class Quiz {
    constructor() {
        this.unasked=[];
        this.asked=[];
        this.activeQuestion={};
        this.score=0;
        this.scoreHistory=[];
        this.active=false;
    }
    start() {
        this.active = true;
        const quizApi = new QuizApi();
        quizApi.getItems(this);
    }

    nextQuestion() {
        this.activeQuestion = this.unasked.pop();
    }
   
    submitAnswer() {
        if (this.unasked.length > 0) {
            this.asked.push(this.activeQuestion);
        }
        let userAnswer = prompt('Please enter your answer');
        console.log(userAnswer);
        this.activeQuestion.submitAnswer(userAnswer);
        let currentScore = this.activeQuestion.answerStatus();
        this.score += currentScore;
        console.log(this.score);
        this.scoreHistory.push(currentScore);
        this.nextQuestion();
        console.log(this.activeQuestion);
        }
}

class QuizApi {
    constructor() {
        this.BASE_URL = "https://opentdb.com/api.php?amount=10";
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

const newQuiz = new Quiz;
newQuiz.start();
console.log(newQuiz)