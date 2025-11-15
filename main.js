// Algorithms Coursework 1
// By Luke Pring (A00012218)
// University of Roehampton



function stackAlgorithm(stack) {
    console.warn(stack);
    for (i = 0; i < 2; i++) {
        stack.pop()
        console.info(stack);
    }
    return stack;
} 

function main() {

    const exampleStack = [8,4,5,7,7,2,9,5,6];

    console.log(stackAlgorithm(exampleStack));

}

main();
