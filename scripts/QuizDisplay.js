/* global Renderer */

class QuizDisplay extends Renderer {    // eslint-disable-line no-unused-vars
  getEvents() {
    return {
      'click .start': 'handleStart',
      'click .question': 'handleAnswerSubmit',
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
          <button class="question">Start</button>
      </div>
      </form>
    `;
  }

  template() {
    if (this.model.active) {
      return this._generateQuestion();
    } else {
      return this._generateIntro();
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
    this.model.update();
  }



}