//1.JavaScript Program to Check Whether an Alphabet is Vowel or Consonant
function vowel(x) {
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u' || x == 'A' || x == 'E' || x == 'I' || x == 'O' || x == 'U')
        console.log(x + " is a Vowel");
    else
        console.log(x + " is a Consonant");
}
//2.JavaScript Program to Find GCD of two Numbers
function gcd(a, b) {
    var g;
    for (var i = 1; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            g = i;
        }
    }
    console.log(" GCD of " + a + "&" + b + "is " + g);
}
// 3.JavaScript Program to Display Prime Numbers Between Two Intervals
function prime(a, b) {
    for (var i = a; i <= b; i++) {
        var flag = 0;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
// 4.JavaScript Program to Convert Binary Number to Decimal and vice-versa
// function binaryTodecimal(a:number){
//     var decimal:number;
//     decimal= parseInt(a, 2);
//     console.log("The decimal of " +a+" is " +decimal);
// }
// binaryTodecimal('1011');
// binaryTodecimal('1100');
// function decimalTobinary(a:number){
//     var bin = 0;
//     var rem:number; 
//     var i = 1;
//     while (a != 0) {
//         rem = a % 2;
//         a = parseInt(a/2);
//         bin = bin + rem * i;
//         i = i * 10;
//     }
//     console.log('Binary is: '+ bin);
// }
//5.JavaScript Program to Display Fibonacci Series
function fibonacci(a) {
    var x = 0, y = 1, z;
    console.log("Fibonacci series:");
    for (var i = 0; i < a; i++) {
        console.log(x);
        z = x + y;
        x = y;
        y = z;
    }
}
// 6.JavaScript Program to Find the Largest Among Three Numbers
function largest(a, b, c) {
    var large;
    if (a >= b && a >= c) {
        large = a;
    }
    else if (b >= a && b >= c) {
        large = b;
    }
    else {
        large = c;
    }
    console.log("The largest number is " + large);
}
// 7.JavaScript Program to Generate Multiplication Table
function table(a) {
    for (var i = 1; i <= 10; i++) {
        var result = i * a;
        console.log(a + ' * ' + i + ' = ' + result);
    }
}
vowel('y');
vowel('a');
gcd(8, 12);
gcd(25, 70);
prime(4, 25);
// binaryTodecimal('1011');
// binaryTodecimal('1100');
// decimalTobinary(21);
fibonacci(6);
largest(54, 76, 2);
table(3);
