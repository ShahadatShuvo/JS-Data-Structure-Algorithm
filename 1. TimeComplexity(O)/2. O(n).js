//(Program 2): let, we have a program for calculating sum of n numbers(from 1 to n).

// We will do the solution in two different ways. 

// Method: 1
const n = 100;
const result = n * (n + 1) / 2;
console.log("result:", result)

// Method: 2
const value = 100; // here, value === n
let sum = 0;
for (let i = 1; i <= value; i++){
    sum += i;
}
console.log("sum:", sum)

//Question: What is the Time Complexity of (Program 2)?

/* For Method:1, the total number of operations are fixed(Static). So, the time complexity is O(1).  
*/
/* For Method:2, the total number of operations are not fixed(Dynamic). The Total number of operations depends on the value of n.[e.x: if, n === 10; the program will run 10 times(10 circle){
    for 1 circle: [
    1. assign value into i;
    2. check i<= value;
    3. sum += i;
    4. increment value of i(i++).
    ]
}
if n === 100, it will run 100 times..and so on. Proportionate to n.
So, the time complexity is O(n).  
]  
*/
//Answer: Time Complexity of (Program 2: Method: 1 is O(1)), (Program 2: Method: 2 is O(n)).