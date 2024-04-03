class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  moveToNextQuestion() {
    this.currentQuestionIndex += 1;
  }

  shuffleQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      let randomIndex = Math.floor(Math.random * this.questions.length);
      this.questions.push(this.questions[randomIndex]);
      this.questions.splice(this.questions[randomIndex], 1);
    }
    return this.questions;
  }

  checkAnswer(answer) {
    if ((this.answer = true)) {
      this.correctAnswers += 1;
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
      return false;
    } else if (this.currentQuestionIndex === this.questions.length) {
      return true;
    }
  }
}
