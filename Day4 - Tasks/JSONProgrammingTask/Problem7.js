var expected = {foo: 5, bar: 6};
var actual = {foo: 7, bar: 6}
function assertObjectsEqual(actual, expected, testName){
    if(JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Passed");
    }
    else {
        console.log("FAILED " + testName + " Expected " + expected + ", but got " + actual);
    }
}

assertObjectsEqual(actual, expected, "Check if two objects are equal");