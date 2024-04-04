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

  filterQuestionsByDifficulty(difficulty) {
    if (difficulty >= 1 || difficulty <= 3) {
      this.questions = this.questions.filter(
        (question) => question.difficulty === difficulty
      );
    }
  }

  averageDifficulty() {
    const sumDifficulty = this.questions.reduce((acc, curr) => {
      return acc + curr.difficulty;
    }, 0);
    return sumDifficulty / this.questions.length;
  }
}

// return this.questions[0];

// filterQuestionsByDifficulty(difficulty) {
//   const filteredQuestions = this.questions.filter((question) => {
//     return question.difficulty === difficulty;
//   });
//   return filteredQuestions;
// }
// if (question.difficulty === 2) {
//   return this.questions[0];
// }

// if (question.difficulty === 3) {
//   return this.questions[0];
// }
