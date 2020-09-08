var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];


let res = [];
function transformEmployeeData(arr) {
 let n = arr.length;
//  let outer = {};
 for(let i=0;i<n;i++) {
     let m = arr[i].length;
     let temp = {};
     for(let j=0;j<m;j++) {
        temp[arr[i][j][0]] = arr[i][j][1];
     }
     res.push(temp);
 }
 return res;
}

let object = transformEmployeeData(arr);

console.log(object);