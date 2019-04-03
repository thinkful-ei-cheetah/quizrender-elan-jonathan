/* global Model */

class Quiz extends Model {          // eslint-disable-line no-unused-vars

  // This class property could be used to determine the no. of quiz questions
  // In later implementations, the user could provide a quiz length and override
  static DEFAULT_QUIZ_LENGTH = 5;

  constructor() {
    super();

    // Your Quiz model's constructor logic should go here. There is just examples below.
    this.active = false;
    this.questions = [{ id: 1, text: 'Question 1' }];
  }

  startNewGame() {
    this.active = true;
  }

}
