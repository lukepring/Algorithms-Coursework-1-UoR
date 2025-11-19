// Algorithms Coursework 1
// Task 1
// By Luke Pring (A00012218)
// University of Roehampton London

// Reduces the stack to a single value by applying arithmetic rules to the top two elements.
function stackAlgorithm(stack) {
    let l = stack[stack.length - 1];
    let s = stack[stack.length - 2];

    while (stack.length > 1) {
        // Remove the top two elements from the stack.
        for (i = 0; i < 2; i++) {
            stack.pop();
        }
        if (l % 2 == 0 && s % 2 == 0) {
            // If both numbers are even, push their product.
            stack.push(l * s);
        } else if (l % 2 != 0 && s % 2 != 0) {
            // If both numbers are odd, push their sum.
            stack.push(l + s);
        } else {
            // If parity differs, push the absolute difference (larger minus smaller).
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

// Initializes an example stack and logs the result of the reduction algorithm.
function main() {

    const exampleStack = [8, 4, 5, 7, 7, 2, 9, 5, 6];

    console.log(`Result: ${stackAlgorithm(exampleStack)}`);

}

main();
