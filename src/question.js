class Question {
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }

  shuffleChoices() {
    // console.log(this.choices);
    for (let i = 0; i < this.choices.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.choices.length);
      this.choices.push(this.choices[randomIndex]);
      this.choices.splice(randomIndex, 1);
    }
    return this.choices;
  }
}
//RANDOM NOTES

// shuffleArr.push(this.choices[randomIndex]);
// console.log(shuffleArr);
// return shuffleArr;

// 2. shuffleChoices()

//const randomIndex = Math.floor(Math.random() * this.choices.length);
//console.log(randomIndex);

// let example = new Question("hello", ["a", "b"], "a", 1);

// console.log(example.shuffleChoices());

const newQuestion = new Question("howdy", ["a,b,c,d"], "a", 1);

// console.log(newQuestion);
