const coding = ["js", "ruby", "java", "c++", "python"]

// coding.forEach( function  (item) {
//     console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// })

const myCoding = [
    {
        languageNAme : "javascript",
        languageFileName: "java"
    },
    {
        languageNAme : "ruby",
        languageFileName: "raba"
    },
    {
        languageNAme : "dooby",
        languageFileName: "daba"
    },
]
myCoding.forEach( (item) => {

   console.log(item.languageNAme);
})