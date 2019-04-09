/* global Renderer */

class QuizDisplay extends Renderer {    // eslint-disable-line no-unused-vars
  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .question': 'handleAnswerSubmit',
      'click .next-question': 'handleNextQuestion',
      'click .play-again': 'handlePlayAgain'
    };
  }

  _generateIntro() {
    return `
      <div>
        <p>
          Welcome to the Trivia Quiz
        </p>
      </div>
      <div>
        <button class="start">Start</button>
      </div>
    `;
  }

  _generateQuestion() {
    let radioTemplate ='';

    
    this.model.unasked[0].answers.forEach(item=>{
     
      radioTemplate +=`<input type="radio" id="${item}" name="radioName" value="${item}"> <label for="${item}">${item}</label><br />`;
    });

    return `
    <form class="current-question">
      <div >Question:
        ${this.model.unasked[0].text}
        <br />Answer:<br />
          ${radioTemplate}
          <button class="question">Submit Answer</button>
      </div>
      </form>
    `;
  }

  _generateResponse() {
    if(this.model.unasked[0].userAnswer === this.model.unasked[0].correctAnswer) {
      return `
      <h1>${this.model.unasked[0].text}</h1>
      <h2>You got the correct answer!<h2>
      <button class = "next-question">Continue</button>
    `
    }
    else {
      return `
      <h1>${this.model.unasked[0].text}</h1>
      <h2>Sorry, that's incorrect: <br>
      ${this.model.unasked[0].userAnswer}</h2>
      <h2>The correct answer was: <br>
      ${this.model.unasked[0].correctAnswer}</h2>
      <button class = "next-question">Continue</button>
      `
    }
  }

  _generateEndPage() {
    return `
    <h1>Good job!</h1><br>
    Your final score was ${this.model.score} out of 5.
    That's a new high score!
    <button class = "play-again">Play Again</button>
    `
  }

  template() {
    if (this.model.active) {
      if (this.model.unasked[0].userAnswer) {
        return this._generateResponse();
      } else {
        return this._generateQuestion();
      }
    } else {
        if (this.model.unasked.length === 1) {
          return this._generateEndPage();
        } 
        else {
          return this._generateIntro();
        }
    }

  }

  handleStart() {
    this.model.start();
    this.model.update();
  }

  handleAnswerSubmit(event) {
    event.preventDefault();
    let submittedAnswer = $('input[name=radioName]:checked', '.current-question').val();
    this.model.submitAnswer(submittedAnswer);
    this._generateResponse();
    this.model.update();
  }

  handleNextQuestion(event) {
    event.preventDefault();
    this.model.nextQuestion();
    this.model.update();
  }



}