/*
a. To analyze the performance of an algorithm, we use Big O Notation
b. Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
c. Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
d. The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
*/

// For calculating Time and Space Complexity we use some units like [Big-O notation, Omega notation, Theta notation]

// CSE Students can learn these deeply in [Discrete Mathematics]. For simplicity, here we will practice Big(O) notation 

// ********************** Time Complexity **********************

//(Program 1): let, we have a program for calculating sum of two integer numbers. 

const a = 10;
const b = 20;
const sum = a + b;
console.log("sum:", sum)

//Question: What is the Time Complexity of (Program 1)?

/*  in this program, 4 operations executes and its always fixed.. for any value of a and b, every time the program will do 4 operations...[
    1. Assign 10 into a. 
    2. Assign 20 into b. 
    3. Do sum of a, b and assign into sum(variable). 
    4. Output the sum variable.
]
As the number of operations are static amount, So the Complexity is O(1).
*/

//Answer: Time Complexity of (Program 1) is O(1).