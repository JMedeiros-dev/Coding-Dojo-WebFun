// 1. Sigma
function sigma(b) {
var a = b;
var sum = 0;
for(var i = 1; i <= a; i++) {
    sum = sum + i; 
}
return sum;
}

// 2. Factorial
function factorial(num) {
    if (num === 0 || num === 1)
    return 1;
    for (var i = num - 1; i >= 1; i--) {
        num = num * i;
    }
    return num;
}

// 3.
function fibonacci(num) { 
    var sum;  
    var num1 = 0; 
    var num2 = 1; 
    for (var i = 0; i < num; i++) { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum; 
    } 
    return num2; 
} 

// 4. Array: Second-to-Last
function secondToLast(arr) {
    if(arr.length <= 2){
        return null;
    }
    else {
        return arr[arr.length-2];
    }
}

// 5. Array: Nth-to-Last
function nthToLast(arr,b) {
    var x = b;
    if(arr < x){
        return null;
    }
    else {
        console.log(arr[arr.length-x]);
    }
}

// 6. Array: Second-Largest
function secondToLargest(arr) {
var max = arr[0];
var secondMax = arr[0];

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
        else { (arr[i] > secondMax && arr[i] < max)
            arr[i] = secondMax;
        }
        return secondMax;
    }
}

// 7. Double Trouble
function doubleTrouble(arr) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
       newArr.push(arr[i],arr[i]); 
    }
    arr = newArr;
    return arr;
}