var arr = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];

let res = {};
function fromListToObject(arr) {
    let n = arr.length;
    for(let i=0;i<n;i++) {
        res[arr[i][0]] = arr[i][1];
    }
    return res;
}

let object = fromListToObject(arr);
console.log(object);