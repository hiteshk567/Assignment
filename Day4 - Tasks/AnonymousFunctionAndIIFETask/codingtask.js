// Do the below programs in anonymous function & IIFE
// 1. Print odd numbers in an array 
    let printOdd = arr => {
        for(let i = 0;i<arr.length;i++) {
            if(+arr[i] % 2 === 1)
                console.log(arr[i]);
        }
    }
    printOdd([3,5,6,7,89]);

//2. Convert all the strings to title caps in a string array
    let titleCaps = name => {
        let arr = name.split(" ");
        for(let i=0;i<arr.length;i++) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
        }
        return arr.join(" ");
    }
    console.log(titleCaps("hitesh kumar mahto"));

//3. Sum of all numbers in an array
    let sum = arr => {
        let res = 0;
        for(let i=0;i<arr.length;i++)
            res += +arr[i];
        return res;
    }
    console.log(sum([1, 3, 5, 6, 7]));

//4. Return all the palindromes in an array
    let chechPal = s => {
        let l=0, r=s.length-1;
            while(l<r) {
                if(s[l] !== s[r])
                    return false;
                l++, r--;
            }
            return true;
    }

    console.log((function palindromes(arr) {
        let n = arr.length;
        let res = [];
        for(let i=0;i<n;i++) {
            if(chechPal(arr[i]))
                res.push(arr[i]);
        }
        return res;
    })(["abba", "abakaba", "hitesh", "plane"]));

    // console.log(palindromes());

//5. Return median of two sorted arrays of same size
    console.log((function median(arr1, arr2) {
        let i=0, j=0, n1=arr1.length, n2=arr2.length;
        let res = [];
        while(i<n1 || j<n2) {
            if(+arr1[i] <= +arr2[j]) {
                res.push(arr1[i]);
                i++;
            } else {
                res.push(arr2[j]);
                j++;
            }
        }
        let a1 = res.length/2;
        let a2 = a1 - 1;
        return (+res[a1] + +res[a2])/2;
    })([1, 5, 7], [3, 4, 8]));

//6. Remove duplicates from an array
    let removeDup = arr => [...new Set(arr)];
    
    console.log(removeDup([1, 1, 4, 5, 6, 6]));

//7. Rotate an array by k times and return the rotated array

let rotate = (arr, k) => {
    while(k--) {
        let temp = arr[arr.length-1];
        for(let i=arr.length-1;i>0;i--) {
            arr[i] = arr[i-1];
        }
        arr[0] = temp;
    }
    return arr;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 3));