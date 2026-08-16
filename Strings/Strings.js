
// 🧑‍💼 Q1 — Most Frequent Character

// Given:

// let arr = ["a", "b", "a", "c", "b", "a", "d", "c", "a"];

// Find the most frequently occurring character.

// Expected output:
// "a"

// Because:

// a → 4 times
// b → 2 times
// c → 2 times
// d → 1 time
let arr = ["a", "b", "a", "c", "b", "a", "d", "c","b","b"];
let store = {};
let max=-Infinity;
let ans = []
for(let ele of arr){
    store[ele] = (store[ele]||0)+1;
}
for(let [key,val]of Object.entries(store)){
if(max <val ){
    max = val;
ans = [key];
}else if (max === val){
     ans.push(key)
}
}
if(ans.length<2){
    console.log(...ans,"finalans")
}

// ------------------------------------------------------------
// Question 2 — String Transformation

// Given:

// let str = "javascript";

// Return the first character that appears only once.

// Expected:

// "j"

// Another example:

// let str = "aabbcdde";

// Expected:

// "c"
//Ans:

