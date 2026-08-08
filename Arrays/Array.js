// Question 1 — Array Transformation

// Given:
// let arr = [10, 8, [2, 3], 4, 2, [1, 1, 1], 5, 7, [4, 2], 0];

// Move the nested arrays based on their sum in ascending order, while keeping all non-array elements in their original positions.

// Expected output:

// [10, 8, [1, 1, 1], 4, 2, [2, 3], 5, 7, [2, 4], 0]

// Interviewer: Explain your approach and write the JavaScript code.
//ANS:
let arr = [10, 8, [2, 3], 4, 2, [1, 1, 1], 5, 7, [4, 2], 0];
let store = new Map();
let filteredArray = arr.filter((item,index)=>{
    if(Array.isArray(item)){
        store.set(index,item)
        return item
    }}).sort((a,b)=> a.reduce((acc,val)=>acc+val,0)-b.reduce((acc,val)=>acc+val,0));
let j =0;
for(let [key,val] of store){
    arr.splice(key,1,filteredArray[j])
    j++
}
console.log(arr,"final ans") 

// -----------------------------------------------------------
// Question 2 — Array of Objects

// Given:
// let users = [
//     { name: "Vimal", age: 25 },
//     { name: "Arun", age: 22 },
//     { name: "Rahul", age: 28 },
//     { name: "Kiran", age: 24 }
// ];

// Sort the users by age in descending order.

// Expected:

// [
//     { name: "Rahul", age: 28 },
//     { name: "Vimal", age: 25 },
//     { name: "Kiran", age: 24 },
//     { name: "Arun", age: 22 }
// ]

//ANS:
 let users = [
    { name: "Vimal", age: 25 },
    { name: "Arun", age: 22 },
    { name: "Rahul", age: 28 },
    { name: "Kiran", age: 24 }
];
let check = users.sort((a,b)=>b.age-a.age);
console.log(check,"check")

// -----------------------------------------------------------
// Question 3 — Remove Duplicate Objects

// Given:

// let users = [
//     { id: 1, name: "Vimal" },
//     { id: 2, name: "Arun" },
//     { id: 1, name: "Vimal" },
//     { id: 3, name: "Rahul" },
//     { id: 2, name: "Arun" }
// ];

// Remove duplicate users based on id.

// Expected:

// [
//     { id: 1, name: "Vimal" },
//     { id: 2, name: "Arun" },
//     { id: 3, name: "Rahul" }
// ]

//ANS:
let users = [
    { id: 1, name: "Vimal" },
    { id: 2, name: "Arun" },
    { id: 1, name: "Vimal" },
    { id: 3, name: "Rahul" },
    { id: 2, name: "Arun" }
];
let check = new Set()
let finalans = []
for(let user of users){
    if(!check.has(user.id)) {
        finalans.push(user);
        check.add(user.id)
    }
}
console.log(finalans,"finalans")
// -----------------------------------------------------------
// Question 4 — Nested Array

// Given:

// let arr = [
//     [1, 2],
//     [3, 4, 5],
//     [6],
//     [7, 8, 9, 10]
// ];

// Sort the nested arrays based on their length, from longest to shortest.

// Expected:

// [
//     [7, 8, 9, 10],
//     [3, 4, 5],
//     [1, 2],
//     [6]
// ]
//ANS:
let arr = [
    [1, 2],
    [3, 4, 5],
    [6],
    [7, 8, 9, 10]
];
 let check = [...arr].sort((a,b)=>b.length - a.length);
console.log(check,"check")
// -----------------------------------------------------------
// Question 5 — Array + Frequency

// Given:

// let arr = [2, 3, 2, 5, 3, 2, 7, 5, 3];

// Return the elements sorted by their frequency in descending order.

// Expected:

// [2, 2, 2, 3, 3, 3, 5, 5, 7]

// If two numbers have the same frequency, keep their first appearance order.
//ANS:
let arr = [2, 3, 2, 5, 3, 2, 7, 5, 3];
let store ={};
for(let i=0;i<=arr.length-1;i++){
    if(store[arr[i]]){
        store[arr[i]]={
            Number:arr[i],
    count: store[arr[i]].count +1,
    position: store[arr[i]].position
}
    }else{

        store[arr[i]]={
                    Number:arr[i],
    count:1,
    position:i
}
    }

}
console.log(store,"store")
let finalAns = Object.values(store).sort((a,b)=>{
    if(b.count === a.count){
        return a.position - b.position
    }else{
        return b.count - a.count;
    }
}).flatMap((ele)=>Array(ele.count).fill(ele.Number))
console.log(finalAns,"finalAns")
// -----------------------------------------------------------


