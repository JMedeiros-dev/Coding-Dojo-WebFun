// Challenge 1
var testArr = [6,3,5,1,2,4]

sum = 0;
for(var i = 0; i < testArr.length; i++){
    sum = sum + testArr[i];
    console.log("Num" + testArr[i], "Sum" + sum);
}

// Challenge 2
var testArr = [6,3,5,1,2,4]

for(var i = 0; i < testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);