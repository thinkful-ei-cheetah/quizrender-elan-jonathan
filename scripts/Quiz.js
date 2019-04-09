/* global Model */

/**
 * You can replace this Quiz with the version you worked on yesterday. It's just
 * provided as an example.
 */

class Quiz extends Model {          // eslint-disable-line no-unused-vars

  // This class property could be used to determine the no. of quiz questions
  // In later implementations, the user could provide a quiz length and override
  // static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();
    this.unasked=[];
    this.asked=[];
    this.activeQuestion={};
    this.score=0;
    this.scoreHistory=[];
    this.active=false;
  }

  generateQuizApi() {
    const quizApi = new QuizApi();
    return quizApi.getItems(this);
  }

  start() {
    this.active = true;
  }

  nextQuestion() {
    this.activeQuestion = this.unasked.shift();
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
