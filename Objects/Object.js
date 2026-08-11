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
// Question 2 — Object Filtering

// Given:

// let products = {
//     laptop: 50000,
//     phone: 20000,
//     tablet: 15000,
//     watch: 5000,
//     monitor: 12000
// };

// Return a new object containing only products whose price is greater than 15000.

// Expected:

// {
//     laptop: 50000,
//     phone: 20000
// }
//ANS:
let products = {
    laptop: 50000,
    phone: 20000,
    tablet: 15000,
    watch: 5000,
    monitor: 12000
};
let store = {};
for(let [key,val] of Object.entries(products)){
    if(val >15000){
        store[key] = val
    }
}
console.log(store,"store")
// -----------------------------------------------------------
// Question 3 — Interview-Level Object Problem 🔥

// Given:

// let employees = [
//     { name: "A", department: "IT", salary: 50000 },
//     { name: "B", department: "HR", salary: 40000 },
//     { name: "C", department: "IT", salary: 70000 },
//     { name: "D", department: "HR", salary: 60000 },
//     { name: "E", department: "Finance", salary: 55000 }
// ];

// Find the employee with the highest salary in each department.

// Expected:

// {
//     IT: { name: "C", department: "IT", salary: 70000 },
//     HR: { name: "D", department: "HR", salary: 60000 },
//     Finance: { name: "E", department: "Finance", salary: 55000 }
// }
//ANS:
let employees = [
    { name: "A", department: "IT", salary: 50000 },
    { name: "B", department: "HR", salary: 40000 },
    { name: "C", department: "IT", salary: 70000 },
    { name: "D", department: "HR", salary: 60000 },
    { name: "E", department: "Finance", salary: 55000 }
];
let store ={};
for(let ele of employees){
  if(store[ele.department]){
    
          if(ele.salary > store[ele.department].salary){
      store[ele.department] = {name:ele.name,department:ele.department,salary:ele.salary}
          }
  
  }else{
      store[ele.department] = {name:ele.name,department:ele.department,salary:ele.salary}
  }
}
console.log(store,"store")
// -----------------------------------------------------------
// Question 4 — Nested Objects
// let users = [
//     {
//         name: "Vimal",
//         skills: ["React", "Node", "MongoDB"]
//     },
//     {
//         name: "Arun",
//         skills: ["Java", "Spring"]
//     },
//     {
//         name: "Rahul",
//         skills: ["React", "Node"]
//     }
// ];

// Find all users who have "React" as a skill.

// Expected output:

// [
//     {
//         name: "Vimal",
//         skills: ["React", "Node", "MongoDB"]
//     },
//     {
//         name: "Rahul",
//         skills: ["React", "Node"]
//     }
// ]
//ANS:
let users = [
    {
        name: "Vimal",
        skills: ["React", "Node", "MongoDB"]
    },
    {
        name: "Arun",
        skills: ["Java", "Spring"]
    },
    {
        name: "Rahul",
        skills: ["React", "Node"]
    }
];
let requiredSkills = [
    "React",
    "Node",
    "MongoDB",
    "Express"
];
// 3 approach are their
let finalAns = users.filter((item)=>item.skills.includes("React"))
let finalAns = users.filter((item) =>
    item.skills.includes("React") ||
    item.skills.includes("Node")
);
let finalAns = users.filter((item)=> requiredSkills.some(x=>item.skills.includes(x)) )
console.log(finalAns,"FINALaNS")
