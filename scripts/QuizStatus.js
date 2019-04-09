/* global Renderer */

class QuizStatus extends Renderer {  
  
  // eslint-disable-line no-unused-vars
  getEvents() {
    return {
      'click .start': 'handleStart',
    };
  }
  
  template() {
    return `
      <div>Score High Score Status</div>
    `;
  }

  handleStart() {
    this.model.update();
  }

}
