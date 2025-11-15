// Algorithms Coursework 1
// By Luke Pring (A00012218)
// University of Roehampton



function stackAlgorithm(stack) {
    console.warn(`Before Pop: ${stack}`);

    // Pop two items at top of stack
    for (i = 0; i < 2; i++) {
        stack.pop()
        console.info(`Pass ${i+1}: ${stack}`);
    }

    // Compare and calculate two items at top
    console.log(stack.length);

    // Return modified stack
    return stack;
} 

function main() {

    const exampleStack = [8,4,5,7,7,2,9,5,6];

    console.log(`Final: ${stackAlgorithm(exampleStack)}`);

}

main();
