/* 
CHALLENGE: Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

EXAMPLE:
35231 => [1, 3, 2, 5, 3]
*/

// MY SOLUTION

const digitize = (n) => String(n).split("").map(Number).reverse();
