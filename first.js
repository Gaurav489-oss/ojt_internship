// fullName="gaurav";
// fullname="kanu";
// console.log(fullName);
// console.log(fullname);

// let age=19;

// console.log(age);
 
// const student={
//     fullName:"gaurav kesharwani",
//     age:20,
//     cgpa: 9.3,
//     isPass:true
// };
// student["age"] = student["age"] + 1;
// student["cgpa"] = student["cgpa"] + 1;
// console.log(student.age);
// console.log(student.cgpa);

// const pen={
//     title:"parker jotter standard CT Ball Pen",
//     rating: 4.5,
//     price: 300,
//     offer: 5,
// };

// console.log(pen.rating);
// console.log(pen.price);
// console.log(pen.title);

// const profile={
//     Name: "gaurav.ke",
//     post: 80,
//     followers: 1500,
//     following: 260,
//     study: "b.tech(cse)",
// };
// console.log(profile.Name);
// console.log(profile.post);
// console.log(profile.followers);
// console.log(profile.following);
// console.log(profile.study);


//arithmatic operators
// let a=3;
// let b=6;
// console.log("a+b=",a+b);
// console.log("a-b=",a-b);
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);

//unary operator


// let a=5;
// let b=2;
// a-=4;

// console.log("a=",a, "&b=",b);

// console.log("a++ = ",a++);
// console.log("a=",a);
// console.log("a!=b",a!=b);
// console.log("5>==5",a >== b);

//Logical operator

// let a=6;
// let b=5;

// let cond1 =a>=b;
// let cond2 = a===5;
// console.log("cond1 && cond2 =",cond1 && cond2);
// console.log("cond1 || cond2", cond1 || cond2);
// console.log("!(6 < 5) =", !(a < b));

// let age = 16;

// if(age>==18){
//     console.log("vote")
// }
// else{
    
//         console.log("you can not vote");
    
// }
// let mode ="light"
// let color;

// if(mode === "dark"){
//     color = "black";
// }
// else{
//      color = "white";
// }
// console.log(color);


// if(age>==18){
// console.log("you can vote");
// }
// if (age < 18){
//     console.log("you can not vote");
// }

//odd or even 

// let num = 11;

// if(num%2===0){
// console.log(num ,"even");
// }
//     else
//     {
//         console.log(num,"odd");
//     }

//syntax ->= rules
// let mode = "dark";
// let color;

// if(mode === "dark")
// {
//     color = "black"
// }
// else if (mode ==="blue"){
//     color = "blue";

// }
// else if(mode === "pink"){
//     color= "pink";

// }
// else
// {
//     color="white";
// }
// console.log(color);
// if(mode === "dark"){
//      console.log(mode);
// }

//condition statement


// let age = 20;

// let result = age >== 18 ? "adult" : "not adult";
// console.log(result)

  // let num=prompt("enter a number");
  // if(num%5===0){
  //   console.log(num,"is a multiple of 5");
  // }
  // else
  // {
  //   console.log(num,"is not a multiple of 5");
  // }


//practice q2

//  let score = prompt("enter your score(0-100):")
//  let grade;
//  if(score>==90 && score <=100)
//  {
//    grade = "A";
//    }
//  else if (score >== 70 && score <= 89)
//  {
//    grade="B";
//  }
//  else if (score >== 60 && score <= 79)
//  {
//    grade="C";
//  }
// else if (score >== 50 && score <= 69)
//  {
//    grade= "D";
//  }
//  else if(score >== 0 && score <= 49)
//  {
//  grade ="F";
//  }
//  console.log("according to your scores, your grade was :",grade);


//loops  prints 1 to 5
// for(let count=2; count<=100; count++)
// {
//   console.log("apna college");
// }
// console.log("loop has ended");



//calculate sum of 1 to 5

// let sum =0;
// let n = 100;
// for(let i=1; i<=n; i++)
// {
//   sum= sum +i;
// }
// console.log("sum=",sum);

// for(let i=1; i>==0; i++)
// {
//   console.log("i=",i);
// }

// let i=1;
// do
// {
//   console.log("i=",i);
//   i++
// }
// while(i<=10)

  //for - of loop
// let str = "Apnacollege";
// let size = 0;
//   for(let val of str){ //iterator->=characters
//     console.log("val=",val);
//     size++;
//   }

// console.log("string size=", size);//10

//for in loop

// let student={
//   name:"Gaurav",
//   age:19,
//   cgpa: 7.5,
//   isPass:true
// };
// for(let key in student){
//   console.log("key=",key,student[key]);
// }

// for(let num=0; num<=100;num++){
//   if(num%2 !==0){
//     console.log("num=",num);
//   }
// }

//practice Q2

// let gameNum = 30;

// let userNum  = prompt("guess the game number:");

//   while(userNum != gameNum){
// userNum = prompt("you entered wrong number.guess again:");
// }
// console.log("congratulation,you entered the right number");

// let str="gaurav kesharwani";
// let str2="apna college";
// console.log(str[8]);

// //Template Literals
// let sentence =`This is a template literal`;
// console.log(sentence);

// let str1 ="gaurav";
// let str2 ="kesharwani";
// let res = "gaurav"+123;
// console.log(res);

// let str= "hello";
// console.log(str.replace("lo","p"));    //str.replace value


//str charAt
// let str = "Ilovejs";
// str = str.replace("I","S");
// console.log(str());

//practice Q3

// let fullName=prompt("enter your full name without  space ");
// let username ="@"+fullName + fullName.length;

// console.log(username);

// array

// let  marks =[97,78,89,56,76];
// console.log(marks); 
// console.log(marks.length); 
 
//string is immutable this is not change  
//array is mutable this is change 

// let cities=["Gujarat", "punjab", "banglore","mumbai","kolkata","Goa"];
// for(let city of cities){
//   console.log(city.toUpperCase());   
//   }


//   let marks =[89,34,56,67,78,85];
//   let sum = 0;
//   for(let val of marks){

//     sum +=val;
//   }
//   let avg = sum/marks.length;
//    console.log(`avg marks of the class =${avg}`);

  //  let items=[689,800,200,300];

  //  let i =0;
  //  for(let val of items)
  //  {
  
  //   let offer = val/10;
  //   items[i] = items[i] - offer;
  //   console.log(`value after offer = ${items[i]}`);
  //   i++;
     
  //  }


  // for(let i=0;i<items.length; i++)
  // {
  //   let offer = items[i]/10;
  //   items[i] -= offer;
  // }
  // console.log(items);
  // let a=3;

  //how to logic sort

// alert("hello world")

//  console.log (10>=>=5);
//   console.log(10<<10);
 

// var a= prompt("enter a number");

// if(a>=0 && a<=10){
//   console.log("table of 0-10 ");
// }
// else if(a>=10 && a<=20){
//   console.log("table of 10-20");
// }
// else if (a>=20 && a<=30){
//   console.log("table of 20-30");
// }
// else if (a>=30 && a<=40){
//   console.log("table of 30-40");
// }
// else if (a>=40 && a<=50){
//   console.log("table of 40-50");
// }
// else if (a>=50 && a<=100){
//   console.log("table of 50-100");
// }



























