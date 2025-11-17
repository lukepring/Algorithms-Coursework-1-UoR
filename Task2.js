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

    length() {
        let count = 0;
        let current = this.head;
        while(current) {
            count ++;
            current = current.next;
        }
        return count;
    }

    Get_element(pos) {

        if (pos > this.length()) {
            console.error("Linked List Error: Invalid position.")
            return null;
        }

        let current = this.head;
        let index = 0;

        while (current && index < pos) {
            current = current.next;
            index++
        }

        return current ?? null;
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

// Example linked list so the methods above can be tested once implemented.
function buildExampleLinkedList() {
    const example = new LinkedList();
    const sampleLetters = [
        { letter: "L", part: "f" },
        { letter: "u", part: "f" },
        { letter: "k", part: "f" },
        { letter: "e", part: "f" },
        { letter: "J", part: "m" },
        { letter: "a", part: "m" },
        { letter: "m", part: "m" },
        { letter: "e", part: "m" },
        { letter: "s", part: "m" },
        { letter: "P", part: "l" },
        { letter: "r", part: "l" },
        { letter: "i", part: "l" },
        { letter: "n", part: "l" },
        { letter: "g", part: "l" }
    ];

    const nodes = sampleLetters.map((data, index) => new Node(index + 1, data.letter, data.part));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    example.head = nodes[0];
    return example;
}

const Example_Full_Name = buildExampleLinkedList();

console.log(Example_Full_Name);

console.log(Example_Full_Name.Get_element(100).letter);


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const questions = [
//   "Please enter your first name: ",
//   "Please enter your middle name: ",
//   "Please enter your last name: "
// ];

// function collectNames() {
//   return new Promise((resolve) => {
//     const answers = [];

//     const ask = (i) => {
//       if (i >= questions.length) {
//         rl.close();
//         resolve(answers);
//         return;
//       }

//       rl.question(questions[i], (answer) => {
//         answers.push(answer);
//         ask(i + 1);
//       });
//     };

//     ask(0);
//   });
// }

// collectNames().then((answers) => {
//   console.log("Your answers:", answers);
//   Full_Name.Add_word(answers[0], "f");
//   Full_Name.Add_word(answers[1], "m");
//   Full_Name.Add_word(answers[2], "l");
// });
