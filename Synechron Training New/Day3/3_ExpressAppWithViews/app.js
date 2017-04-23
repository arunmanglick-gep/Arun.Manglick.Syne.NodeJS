// const express = require('express');
// const app = express();

// app.set("view engine","jade");

// app.get("/",(req,res)=>{
//     res.render("jade/index",{title:"Express with Jade View"});
// });

// app.get("/empView",(req,res)=>{
//     let employees = [{id:1,name:"Ram"},
//                      {id:2,name:"RK"},
//                      {id:3,name:"Manish"},
//                      {id:4,name:"Abhijeet"},
//                      {id:5,name:"Varun"}];

//     res.render("jade/emps",{title:"Employees View",empList:employees});
// });

// app.listen(3000,()=>{
//     console.log("Express Server Started....");
// });

const express = require('express');
const app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("ejs/index",{title:"Express with EJS View"});
});

app.listen(3000,()=>{
    console.log("Express Server Started....");
});