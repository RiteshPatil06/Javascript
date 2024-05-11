let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleTimeString());

//console.log(typeof mydate);

//let createDate = new Date(2024, 0, 12)
let createDate = new Date(2024, 0, 12, 4, 5)
// console.log(createDate.toDateString());

let date1 = new Date("01-03-2025")
// console.log(date1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(createDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate,getDay());

newDate.toLocaleString('defaullt',{
    weekday: "long",
})
