const fs = require("fs");

const date = new Date
const day = date.getDate();
const month = date.getMonth()+1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const currentDateAndTime = `${day}-${month}-${year} ${hours}.${minutes}` 

const content = currentDateAndTime
console.log(content);
fs.writeFile(`Files/${currentDateAndTime}.txt`,content,(msg)=>{
    console.log("File created successfully");
})


fs.readFile(`Files/${currentDateAndTime}.txt`,"utf-8",(err,data)=>{
    if(err){
        console.log("Sorry!Can't read the file")

    }else{
        console.log(`The file contains:${data}`);
    }
})