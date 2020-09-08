var object = {name: "ISRO", age: 35, role: "Scientist"};

let res = [];
for(let key in object) {
    let temp = [];
    temp.push(key, object[key]);
    res.push(temp);
}

console.log(res);