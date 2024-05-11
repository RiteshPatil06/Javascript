const marvelHeros = ["thor", "ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman" ]

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

// const allnewHeros = [...marvelHeros, ...dcHeros]
// console.log(allnewHeros);  

const arr = [1, 2, 3, 4, [5, 6, 7], [8, 9, [10, 11]]]
const realarr = arr.flat(Infinity)
console.log(realarr);



console.log(Array.isArray("ritesh"));
console.log(Array.from("ritesh"));
console.log(Array.from({name:"ritesh"})); //intresting



let score1 = 100
let sc0re2 = 200
let score3 = 300

console.log(Array.of(score1, sc0re2, score3));

