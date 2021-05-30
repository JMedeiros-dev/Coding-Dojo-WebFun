// Challenge 1
function arrTo255() {
    var arr = [];
    for(var i = 1; i < 256; i++) {
        arr.push(i);  
    }
    console.log(arr);
}

// Challenge 2
function even1000() {
    var sum = 0;
    for(var i = 1; i < 1001; i++) {
        if(i % 2 === 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}


// Challenge 3
function odd5000() {
    var sum = 0;
    for(var i = 1; i < 5000; i++) {
        if(i % 2 !== 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

// Challenge 4
function getArr(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

// Challenge 5
function findMax(arr) {
    var max = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max)
}

// Challenge 6
function findAvg(arr) {
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        avg = sum / arr.length;
    }
    console.log(avg);
}

// Challenge 7
function arrOdd() {
    var arr = [];
    for(var i = 1; i < 50; i++) {
        if(i % 2 !== 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

// Challenge 8
function greaterThanY(Y) {
    var count = 0
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > Y) {
            count = count + 1;
        }
    }
    console.log(count);
}

// Challenge 9
function square(arr) {
    for(var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    console.log(arr);
}

// Challenge 10
function negatives(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// Challenge 11
function maxMinAvg(arr) {
    var max = 0;
    var min = 0;
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++) {
        if(max < arr[i]) {
            max = arr[i];
        }
        if(min > arr[i]) {
            min = arr[i];
        }
        sum = sum + arr[i];
        avg = sum / arr.length
    }
    console.log([max,min,avg]);
}

// Challenge 12
function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;
    console.log(arr);
}

// Challenge 13
function numToString(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}