// for in

const myobject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myobject) {
   //console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js", 'c++', "py"]
for (const key in programming) {
   console.log(programming[key]);   
}

//map is not iterable