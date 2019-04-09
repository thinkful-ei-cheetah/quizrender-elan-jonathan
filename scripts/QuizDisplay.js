/* global Renderer */

class QuizDisplay extends Renderer {    // eslint-disable-line no-unused-vars
  getEvents() {
    return {
      'click .start': 'handleStart',
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
    console.log(this.model.unasked.length);
    console.log(this.model);
    return `
      <div>
        ${this.model.unasked[0].text}
      </div>
    `;
  }

  template() {
    if (this.model.active && this.model.unasked.length === 0) {
      return this._generateQuestion();
    } else {
      return this._generateIntro();
    }
  }

  handleStart() {
    this.model.start();
    this.model.update();
  }
}