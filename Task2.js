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

function collectNames() {
  return new Promise((resolve) => {
    const answers = [];

    const ask = (i) => {
      if (i >= questions.length) {
        rl.close();
        resolve(answers);
        return;
      }

      rl.question(questions[i], (answer) => {
        answers.push(answer);
        ask(i + 1);
      });
    };

    ask(0);
  });
}

collectNames().then((answers) => {
  console.log("Your answers:", answers);
  // work with the answers array here
});
