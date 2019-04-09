/* global Renderer */

class QuizStatus extends Renderer {  
  
  // eslint-disable-line no-unused-vars
  getEvents() {
    return {
     
    };
  }
  
  template() {
    if(this.model.active) {
      return `
      <div>
        <span>Score: ${this.model.score}</span>
        <span>High Score: ${this.model.scoreHistory}</span>
        <span>Progress: ${6 - this.model.unasked.length} out of 5</span>
      </div><br>
    `
    }
    return `
      <div>
        <span>Score: ${this.model.score}</span>
        <span>High Score: ${this.model.scoreHistory}</span>
        <span>Progress: ${this.model.active}</span>
      </div><br>
    `;
  }
}
