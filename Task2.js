// Algorithms Coursework 1
// Task 2
// By Luke Pring (A00012218)
// University of Roehampton London

// Represents a single character node with its position and name part.
class Node {
    constructor(position, letter, part) {
        this.position = position;
        this.letter = letter;
        this.part = part;
        this.next = null;
    }
}

// A singly linked list to store the characters of a name.
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Counts and returns the total number of nodes in the list.
    length() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Returns the node at the given zero-based index, or null if invalid.
    Get_element(pos) {
        let current = this.head;
        let index = 0;

        while (current && index < pos) {
            current = current.next;
            index++;
        }

        if (!current || pos < 0) {
            console.error("Linked List Error: Invalid position.")
            return null;
        }

        return current;
    }

    // Creates a new node with the given letter and appends it to the end of the list.
    Add_element(letter, part) {
        const newNode = new Node(this.length() + 1, letter.toLowerCase(), part);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    Add_word(word, part) {
        const wordArray = word.split("");
        for (let i = 0; i < wordArray.length; i++) {
            this.Add_element(wordArray[i], part);
        }
    }

    Search_element(letter) {
        let current = this.head;
        let results = [];
        letter = letter.toLowerCase();
        while (current) {
            if (current.letter === letter) {
                results.push(current.position);
            }
            current = current.next;
        }
        return results.length > 0 ? results : null;
    }

    Print_list() {
        let current = this.head;
        let result = "[";
        while (current) {
            result += "(";
            result += current.position;
            result += ", ";
            result += current.letter;
            result += ", ";
            result += current.part;
            result += ")";
            current = current.next;
            if (current) {
                result += ", ";
            }
        }
        result += "]";
        console.log(result);
    }

    Print_full_name() {
        let current = this.head;
        let name = "";
        let prevPart = "f";
        name += current.letter.toUpperCase();
        current = current.next;
        while (current) {
            if (current.part != prevPart) {
                name += " ";
                name += current.letter.toUpperCase();
            } else {
                name += current.letter;
            }
            prevPart = current.part;
            current = current.next;
        }
        console.log(name);
    }

}


// Example linked list so the methods above can be tested once implemented.
// Creates a sample linked list with the name "Luke Matthew Pring" for testing.
// function buildExampleLinkedList() {
//     const example = new LinkedList();
//     const sampleLetters = [];

//     const nodes = sampleLetters.map((data, index) => new Node(index + 1, data.letter, data.part));
//     for (let i = 0; i < nodes.length - 1; i++) {
//         nodes[i].next = nodes[i + 1];
//     }

//     example.head = nodes[0];
//     return example;
// }

// const Example_Full_Name = buildExampleLinkedList();

// Example_Full_Name.Add_word("Luke", "f");

// Example_Full_Name.Add_word("Matthew", "m");

// Example_Full_Name.Add_word("Pring", "l");

// Example_Full_Name.Print_full_name();

// console.log(Example_Full_Name.Search_element("l"));

// Example_Full_Name.Print_list();

const Full_Name = new LinkedList();

function main() {
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
        Full_Name.Add_word(answers[0], "f");
        Full_Name.Add_word(answers[1], "m");
        Full_Name.Add_word(answers[2], "l");
    });

}

main();

