var obj = {name : "RajiniKanth", age : 33, hasPets : false};

let res = [];

for(let key in obj) {
    res.push(key);
}

console.log(res);