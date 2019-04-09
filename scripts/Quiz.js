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

  end() {
    this.active = false;
  }

  nextQuestion() {
    this.activeQuestion = this.unasked.shift();

  }

  submitAnswer(userAnswer) {
    if (this.unasked.length > 0) {
        this.asked.push(this.activeQuestion);
    }

    this.unasked[0].submitAnswer(userAnswer);
    let currentScore = parseInt(this.unasked[0].answerStatus());
    this.score += currentScore;

    if(this.unasked.length === 1) {
      this.scoreHistory.push(this.score);
      this.end();
    }

  }

  resetGame()
  {
    this.unasked = [];
    this.score = 0;
    this.start();
    return this.generateQuizApi();
  }
}
