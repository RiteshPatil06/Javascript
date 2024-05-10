const name = "ritesh"
const repocount = 40

//console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('ritesh')

console.log(gamename.length);
console.log(gamename.toUpperCase);
console.log(gamename.indexOf('t'));

const newString = gamename.substring(0, 4)
console.log(newString);

const anotherString = gamename.slice(-5, 4)
console.log(anotherString);

const newstring1 = "  ritesh   "
console.log(newstring1);
console.log(newstring1.trim());

const url = "https://ritesh.com/ritesh%20Patil"
console.log(url. replace('%20', '-'))

console.log(gamename.split('-'));