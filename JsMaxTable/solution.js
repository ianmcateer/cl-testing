/**
 * JsMaxTable - Find the smallest positive integer not in array
 *
 * Problem: Given an array A of N integers, return the smallest positive
 * integer (greater than 0) that does not occur in A.
 *
 * Examples:
 * - A = [1, 3, 6, 4, 1, 2] → return 5
 * - A = [1, 2, 3] → return 4
 * - A = [-1, -3] → return 1
 *
 * Constraints:
 * - N: 1 to 100,000
 * - Elements: -1,000,000 to 1,000,000
 */

function solution(A) {
    // Approach: Store all positive numbers in a Set, then count from 1
    // until we find a number that's not in the Set

    // First, collect all the positive numbers from the array
    // We ignore negative numbers and zero since we only care about positive integers
    const positives = new Set();

    for (let num of A) {
        if (num > 0) {
            positives.add(num);
        }
    }

    // Now, start counting from 1 and find the first number that's missing
    // Keep incrementing until we find a number that doesn't exist in our Set
    let smallest = 1;

    while (positives.has(smallest)) {
        smallest++;
    }

    return smallest;
}

// Test cases
console.log(solution([1, 3, 6, 4, 1, 2])); // Expected: 5
console.log(solution([1, 2, 3])); // Expected: 4
console.log(solution([-1, -3])); // Expected: 1
