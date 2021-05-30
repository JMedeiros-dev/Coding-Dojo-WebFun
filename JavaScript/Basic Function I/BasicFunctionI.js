// I got 14/15 correct

// #1
function a() {
    return 35;
}
console.log(a())

// Prediction: Console will print 35
// Output: Console printed 35

// #2
function a() {
    return 4;
}
console.log(a() + a())

// Prediction: Console will print 8
// Output: Console printed 8

// #3
function a(b) {
    return b;
}
console.log(a(2) + a(4));

//Prediction: Console will print 6
// Outcome: Console printed 6

// #4
function a(b) {
    console.log(b);
    return b*3;
}
console.log(a(3));

// Prediction: Console will print 3,9
// Outcome: Console printed 3,9

// #5
function a(b) {
    return b*4;
    console.log(b);
}
console.log(a(10));

// Prediction: Console will print 40
// Outcome: Console printed 40

// #6
function a(b) {
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// Prediction: Console will print 4
// Outcome: Console printed 4

// #7
function a(b,c) {
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// Prediction: Console will print 10,3,30
// Outcome: Console printed 10,3,30

// #8
function a(b) {
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

// Prediction: Console will print 3,4
// Outcome: Console printed 3,4

// #9
function a() {
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// Prediction: Console will print 2,5,8,11
// Outcome: Console printed 2,5,8,11

// #10
function a(b,c) {
    for(var i=b; i<c; i++) {
        console.log(i);
    }
    return b*c;
}
a(0,10);
console.log(a(0,10));

// Prediction: Console will print 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0
// Outcome: Console printed 0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0

// #11
function a() {
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(j);
        }
        console.log(i);
    }
}

// Prediction: Console will print nothing
// Outcome: Console printed nothing

// #12
functioncopy a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

// Prediction: Console will print nothing
// Outcome: Console printed nothing


// #13
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
console.log(z);

// Prediction: Console will print 15,10
// Outcome: Console printed 10

// #14
var z = 10;
function a() {
    var z = 15;
    console.log(z);
}
a();
console.log(z);

// Prediction: Console will print 15,10
// Outcome: Console printed 15,10

// #15
var z = 10;
function a() {
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

// Prediction: Console will print 15,15
// Outcome: Console printed 15,15