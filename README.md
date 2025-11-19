# Algorithms Coursework 1 UoR
Stack Data Structure built in JavaScript.

# Task 1 – Stack Reduction Algorithm

## Overview
`Task1.js` implements `stackAlgorithm(stack)` (`Task1.js:5`), a destructive reducer that consumes the input stack two elements at a time and pushes a single result until one value remains. `main()` (`Task1.js:28`) just seeds an example stack, runs the algorithm, and logs the result.

## AI Usage Transparency
I used AI selectively and respectfully within this coursework to explain and understand core concepts, write Git commit messages and refine the documentation below (which is not submitted). All core algorithmic logic, data-structure implementation and problem solving decisions were designed and written by me.

## Reduction Rules
Given the two top-most values `l` and `s`:
- Both even → push `l * s`
- Both odd → push `l + s`
- Mixed parity → push `|l - s|`
The loop repeats until the stack length is 1, then returns the mutated stack.

## Usage
```js
const stack = [12, 3, 5, 8];
const [result] = stackAlgorithm(stack); // stack mutated to [result]
console.log(result);
```


# Task 2 – Linked List Name Builder

## Overview
`Task2.js` implements a hand-built singly linked list for storing the letters of a person’s full name (first, middle, last). Each node keeps the character, its name part, and its position. The exported helpers let you build the list interactively, inspect it, and render the stored name.

## Data Structures
- **Node** (`Task2.js:1`): wraps an individual letter with its `position`, `letter`, `part` (`"f"`, `"m"`, or `"l"`), and `next` pointer.
- **LinkedList** (`Task2.js:9`): owns the `head` pointer and provides the methods below.

## Core API
| Method | Description |
| --- | --- |
| `length()` | Walks the list and returns the total number of nodes; used for validation. |
| `Get_element(pos)` | Returns the node at the supplied zero-based index. If `pos` exceeds `length()`, logs an error and returns `null`. |
| `Add_element(letter, part)` | Creates a new `Node` with `position = length() + 1`, appends it to the tail, and keeps `head` up to date. |
| `Add_word(word, part)` | Splits `word` into characters and calls `Add_element` for each, tagging nodes with the name section tracked by `part`. |
| `Search_element(letter)` | Traverses from `head`, returning the first node whose `letter` matches (case-sensitive) or `null` if absent. |
| `Print_list()` | Logs every node as `{ position, letter, part }` so the full structure is visible for debugging. |
| `Print_full_name()` | Renders the linked list as a single string grouped by part: e.g., `Luke James Pring`. Useful after interactive entry. |

## Usage Flow
1. Collect first/middle/last names (see the commented `readline` block at the bottom of `Task2.js`).
2. For each name, call `Full_Name.Add_word(name, "<part>")`.
3. Inspect with `Full_Name.Print_list()` or simply render `Full_Name.Print_full_name()`.
4. Developers can also call `buildExampleLinkedList()` to obtain a fully populated demo list (`Example_Full_Name`) for testing.

## Example
```js
const list = new LinkedList();
list.Add_word("Ada", "f");
list.Add_word("Lovelace", "l");
list.Print_full_name(); // Ada  Lovelace
```

