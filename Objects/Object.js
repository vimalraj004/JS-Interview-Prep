// Question 1 — Object Transformation

// Given:

// let users = [
//     { name: "Vimal", role: "developer" },
//     { name: "Arun", role: "tester" },
//     { name: "Rahul", role: "developer" },
//     { name: "Kiran", role: "designer" }
// ];

// Convert it into:

// {
//     developer: ["Vimal", "Rahul"],
//     tester: ["Arun"],
//     designer: ["Kiran"]
// }
//ANS:
let users = [
    { name: "Vimal", role: "developer" },
    { name: "Arun", role: "tester" },
    { name: "Rahul", role: "developer" },
    { name: "Kiran", role: "designer" }
];
let store = {};
for(let ele of users){
    if(store[ele.role]){
         store[ele.role].push(ele.name); 
    }else{
        store[ele.role]=[ele.name];
    }
    
   
}
console.log(store,"store")
// -----------------------------------------------------------
