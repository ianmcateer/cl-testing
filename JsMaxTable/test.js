/**
 * Test file for JsMaxTable solution
 */

// Import the solution (adjust if using modules)
// For now, copy the solution function here or run solution.js first

function solution(A) {
    // Your solution here

}

// Test helper
function test(name, input, expected) {
    const result = solution(input);
    const passed = result === expected;
    console.log(`${passed ? '✓' : '✗'} ${name}`);
    console.log(`  Input: [${input}]`);
    console.log(`  Expected: ${expected}, Got: ${result}`);
    if (!passed) console.log('  FAILED!');
    console.log('');
}

// Given test cases
test('Example 1', [1, 3, 6, 4, 1, 2], 5);
test('Example 2', [1, 2, 3], 4);
test('Example 3', [-1, -3], 1);

// Edge cases
test('Single element positive', [1], 2);
test('Single element not 1', [5], 1);
test('All negatives', [-5, -10, -3], 1);
test('Large gap', [1, 100], 2);
test('Sequential from 1', [1, 2, 3, 4, 5], 6);
test('Missing 1', [2, 3, 4], 1);
test('Large numbers only', [1000000], 1);
test('Mix of positive and negative', [-1, -2, 1, 2, 3], 4);
test('Duplicates', [1, 1, 1, 1], 2);
test('Zero included', [0, 1, 2], 3);
