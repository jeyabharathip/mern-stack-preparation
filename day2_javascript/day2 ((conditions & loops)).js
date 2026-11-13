// 1	Check positive, negative or zero	if-else
let n=1;
if(n>0){
    console.log("Positive number");
}else if(n<0){
    console.log("Negative Number");
}else{
    console.log("Zero");
}

// 2	Check even or odd	if-else
if(n%2===0){
    console.log("Even number");
}else{
    console.log("Odd number");
}
// 3	Find largest of two numbers	if-else
let a=1;
let b=3;
let c=5;
if(a>b){
    console.log("Greatest Number"+a);
}else{
    console.log("Greatest Number"+b);
}
// 4	Find largest of three numbers	else-if
if(a>b && a>c){
    console.log("Greatest Number"+a);
}else if(b>a && b>c){
    console.log("Greatest Number"+b);
}else{
    console.log("Greatest Number"+c);
}
// 5	Check leap year	Conditions
let year =2000;
if((year %4===0 && year%100!==0)||(year %400 ===0)){
    console.log("Leap Year");
}else{
    console.log("Not a Leap Year");
}

// 6	Calculate grade from marks	else-if
let marks =90;
if(marks>90){
    console.log("O Grade");
}else if(marks<=90 && marks >80){
    console.log("A Grade");
}else if(marks<=80 && marks >70){
    console.log("B+ Grade");
}else if(marks<=70 && marks >60){
    console.log("B Grade");
}else if(marks<=60 && marks >50){
    console.log("C Grade");
}else{
    console.log("Fail");
}
// 7	Display weekday using switch	switch
let day= 1;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Sunday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
        break;
}
// 8	Print 1 to 100	for loop
for(let i=1;i<=100;i++){
    console.log(i)
}
// 9	Print even numbers from 1 to 50	for loop
for(let i=1;i<=50;i++){
    if(i%2===0){
        console.log(i)
    }
}
// 10	Print multiplication table	for loop
for(let i=1;i<=10;i++){
    console.log(i+ " x 2 = "+2*i);
}
// 11	Calculate sum of first N numbers	for loop
let num=10;
let sum=0;
for(let i=1;i<=num;i++){
    sum+=i;
}
console.log(sum)
// 12	Find factorial of a number	for loop
let fact=1;
for(let i=1;i<=num;i++){
    fact*=i;
}
console.log(fact)
// 13	Reverse a number	while loop
let n1=34;
let rev=0;
while(n1 !=0){
    let temp=n1%10;
    rev=(rev*10)+temp;
    n1=Math.floor(n1/10);
}
console.log(rev);
// 14	Count digits in a number	while loop
let n2=90
let d=0;
while(n2 !=0){
    d++;
    n2=Math.floor(n2/10);
}
console.log(d);
// 15	Check whether a number is palindrome	while loop;
let n3=343;
let r=0;
let m=n3;
while(m !=0){
    let temp=m%10;
    r=(r*10)+temp;
    m=Math.floor(m/10);
}
if(n3===r){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome")
}
// Check whether a number is positive, negative or zero.
let n5=11;
if(n5>0){
    console.log("Positive number");
}else if(n5<0){
    console.log("Negative Number");
}else{
    console.log("Zero");
}
// Print the multiplication table of 7.
for(let i=1;i<=10;i++){
    console.log(i+ " x 7 = "+7*i);
}

// Find the factorial of 5.
let f=1;
for(let i=1;i<=5;i++){
    f*=i;
}
console.log(f)
// Challenge 1: Prime number

// Input: 7


// Expected output: Prime Number
// for(let i = 2; i * i <= num; i++){
//     if(num % i === 0){
//         isPrime = false;
//         break;
//     }
// }

let isPrime = true;

if(num <= 1){
    isPrime = false;
}else{
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}

// Challenge 2: Fibonacci series

// Input: 10
let inn = 10;

let first = 0;
let second = 1;

for(let i = 0; i < inn; i++){
    console.log(first);

    let next = first + second;
    first = second;
    second = next;
}
// Expected output:
// 0 1 1 2 3 5 8 13 21 34


// Challenge 3: Armstrong number

// Input: 153
let am = 153;
let fin=am;
let ams=0;
while(am!=0){
    let temp =am%10;
    ams+= (temp*temp*temp);
    am=Math.floor(am/10);
} 
if(fin===ams){
    console.log("Amstrong Number");
}else{
    console.log("Not a amstrong number");
}

// Expected output: Armstrong Number

// Hint: \(1^3 + 5^3 + 3^3 = 153\).

// let num = 9474;
// let original = num;

// let digits = String(num).length;
// let sum = 0;

// while(num > 0){
//     let digit = num % 10;
//     sum += digit ** digits;
//     num = Math.floor(num / 10);
// }

// if(sum === original){
//     console.log("Armstrong Number");
// }else{
//     console.log("Not an Armstrong Number");
// }
// Challenge 4: Perfect Number

// Input: 28

// Expected output: Perfect Number

// Hint: Add all proper divisors.
// \[
// 1+2+4+7+14=28
// \]
let per=28;
let s=0;
for(let i=1;i<per;i++){
    if(per%i==0){
        s+=i;
    }
}
if(per===s){
    console.log("Perfect Number");

}else{
    console.log("Not a Perfect Number");
}
// Challenge 5: Palindrome number

// Input: 121
let pal=121;
let re=0;
let m1=pal;
while(m1 !=0){
    let temp=m1%10;
    re=(re*10)+temp;
    m1=Math.floor(m1/10);
}
if(pal===re){
    console.log("Palindrome");
}else{
    console.log("Not a Palindrome")
}

// Expected output: Palindrome Number

// Hint: Reverse the number and compare it with the original.