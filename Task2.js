class Node {
    constructor(position, letter, part) {
        this.position = position;
        this.letter = letter;
        this.part = part;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    Get_element(pos) {

    }

    Add_element(letter, part) {

    }

    Add_word(word, part) {

    }

    Search_element(letter) {

    }

    Print_list() {

    }

    Print_full_name() {

    }

}

const Full_Name = new LinkedList();

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "Please enter your first name: ",
  "Please enter your middle name: ",
  "Please enter your last name: "
];

const answers = [];

function ask(i) {
  if (i < questions.length) {
    rl.question(questions[i], (answer) => {
      answers.push(answer);
      ask(i + 1); // ask next question
    });
  } else {
    rl.close(); // close AFTER all questions are done
    console.log("Your answers:", answers);
  }
}

ask(0);

