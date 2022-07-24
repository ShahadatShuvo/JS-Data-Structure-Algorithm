//(Program 3): let, we have a program .

const n = 4;
let count = 0;
for (let i = 0; i < n; i++){
    for (j = 0; j < n; j++){
        count++;
    }
}
console.log(`n is: ${n} and count is: ${count}`)

/*
Here, the outputs are:
when n = 1 count = 1
when n = 2 count = 4
when n = 3 count = 9
when n = 4 count = 16 and so on...
*/

// So the time complexity of (program: 3) id O(n^2);