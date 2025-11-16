// Algorithms Coursework 1
// By Luke Pring (A00012218)
// University of Roehampton

function stackAlgorithm(stack) {
    console.warn(`Before Pop: ${stack}`);
    let l = stack[stack.length - 1];
    let s = stack[stack.length - 2];
    while (stack.length > 1) {

        // Pop two items at top of stack
        for (i = 0; i < 2; i++) {
            stack.pop();
            console.info(`Pass ${i + 1}: ${stack}`);
        }

        if (l % 2 == 0 && s % 2 == 0) {
            // Both Even
            stack.push(l * s);
        } else if (l % 2 != 0 && s % 2 != 0) {
            // Both Odd
            stack.push(l + s);
        } else {
            // Different, subtract smaller from larger
            if (l > s) {
                stack.push(l - s);
            } else if (l < s) {
                stack.push(s - l);
            } else {
                stack.push(0);
            }
        }

        l = stack[stack.length - 1];
        s = stack[stack.length - 2];

    }

    // Return modified stack
    return stack;
}

function main() {

    const exampleStack = [8, 4, 5, 7, 7, 2, 9, 5, 6];

    console.log(`Final: ${stackAlgorithm(exampleStack)}`);

}

main();
