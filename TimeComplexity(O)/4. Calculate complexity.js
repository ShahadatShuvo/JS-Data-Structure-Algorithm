//Question: What is the Time Complexity of given program?


const n = 5;
let count = 0;

//Loop:1
for (let i = 0; i < n; i++){
    count++;
}
console.log("count: ", count);

let value = 0;

// Loop:2
for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
        value++;
    }
}
console.log("value: ", value);

/* 
Here, The complexity of loop:1 is O(n)
Here, The complexity of loop:2 is O(n^2)
The maximum complexity is the complexity for the program.. 
*/

// Result: O(n^2)