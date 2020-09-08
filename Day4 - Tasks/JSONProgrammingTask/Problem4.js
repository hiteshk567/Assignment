var arr = ["GUVI", "I", "am", "a geek"];

let res = {};
function transformFirstAndLast(arr) {
    res[arr[0]] = arr[arr.length-1];
    return res;
}

let object = transformFirstAndLast(arr);
console.log(object);