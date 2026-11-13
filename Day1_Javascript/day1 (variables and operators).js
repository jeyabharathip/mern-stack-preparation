// 1. Declare your name, age and city and display them.
let name = "Jeya Bharathi P";
let age = 20;
let city ="Karungal";
console.log("Name :"+name+"\nAge :"+age+"\nCity :"+city);



// 2. Add three numbers.
let a = 3+4+5;
console.log(a);

// 3. Find the area of a rectangle.
let l=15;
let b=10;
console.log("Area :"+ l*b);
// 4. Calculate the average of five subjects.
let s1=90;
let s2=50;
let s3=70;
let s4=90;
let s5=100;
console.log("Average : "+ (s1+s2+s3+s4+s5)/5);

// 5. Convert Celsius to Fahrenheit.
let c=28;
let f = ((9/5)*c)+32;
console.log("Celsius to Fahrenheit"+f);
// 6. Find the remainder of two numbers.
let num1=8;
let num2=7;
console.log(num1%num2);
// 7. Swap two numbers using a temporary variable.
let n1=1;
let n2 =2;
console.log("Before swapping num 1 :"+n1+"num2 :"+ n2);
let temp =n1;
n1=n2;
n2=temp;
console.log("After swapping num 1 :"+n1+"num2 :"+ n2);
// 8. Check whether a person is eligible to vote.
let age1=18;
if(age1>=18){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
}
// 9. Check whether two values are strictly equal.
console.log("5"===5)
// 10. Create a student object containing name, age, department and college.
let student1 ={
    name:"Jeya BHarathi",
    dept:"CSE",
    age:20,
    college:"SXCCE"
}
console.log(student1.name);
// Formula for Celsius to Fahrenheit:
// \[
// F = \frac{9}{5}C + 32
// \]
