/* global Renderer */

class QuizStatus extends Renderer {  
  
  // eslint-disable-line no-unused-vars
  getEvents() {
    return {
     
    };
  }
  
  template() {
    return `
      <div>
        <span>Score: ${this.model.score}</span>
        <span>High Score: ${this.model.scoreHistory}</span>
        <span>Progress: ${this.model.active}</span>
      </div><br>
    `;
  }

  
}
