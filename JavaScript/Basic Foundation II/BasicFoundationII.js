// Challenge 1
function makeItBig(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = "big";
        }
    }
    console.log(arr);
}

// Challenge 2
var max = 0;
function lowHigh(arr) {
    var min = arr[0];
    for(var i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        }
        if(max < arr[i]) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

// Challenge 3
var firstOdd = 0;
function oneAnother(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[arr.length-2])
        if(arr[i] % 2 !== 0){
            firstOdd = arr[i];
            return;
        }
    }
}

// Challenge 4
var newArr = [];
function double(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
        newArr.push(arr[i]);
    }
    return newArr;
}

// Challenge 5
function countPositives(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            count = count + 1;
        }
        arr[arr.length-1] = count;
    }
    return arr;
}

// Challenge 6
function evenOdd(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0 && arr[i+2] % 2 !== 0) {
            console.log("That's odd!");
        }
        else if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0 && arr[i+2] % 2 === 0) {
            console.log("Even more so!")
        }
    }
}

// Challenge 7
function seconds(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

// Challenge 8
function previousLengths(arr) {
    for(var i = arr.length-1; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}

// Challenge 9
function addSeven(arr) {
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

// Challenge 10
function reverse(arr) {
    arr = arr.reverse();
    return arr;
}

// Challenge 11
function negative() {
    newArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            newArr.push(arr[i] * -1);
        }
        else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Challenge 12
function alwaysHungry(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === "food"){
            console.log("yummy");
        }
        else {
            console.log("I'm hungry");
        }
    }
}

// Challenge 13
function swapTowardsTheCenter(arr) {
    for (var i = 0; i < Math.floor(arr.length/2); i+=2 ) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// Challenge 14
function scaleAway(arr, num) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}
