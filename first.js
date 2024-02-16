let arr=[5,6,7,8,9];
let output=arr.reduce((res,curr)=>{
    return res>curr? res:curr;
})
console.log(output);

// let output=arr.reduce((res,curr)=>{
//     return res*curr;
// })
// console.log(output);

//filter method
// let a=[4,5,6,7];
// let name=a.filter((val)=>{
//     return val%2===0;
// })
// console.log(name);
// let a=[4,5,6,7];
// let name=a.map((val)=>{
//     return val*5;
// })
// console.log(name);

//Pratice qn 2
// let arr=[2,3,4,5];
// arr.forEach((val)=>
// {
//     console.log(`The square of each numberis=${val*val}`);

// })
//for each loop {array}
// let arr=["Samip","Nepal"];
// arr.forEach((val,idx,arr)=> {
//     console.log(val.toUpperCase(),idx,arr);
// });// Use for doing tasks for each array.

//Pratice qn 1
// let vowels=(str)=>{
// count=0;
// for(let val of str){
//     if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u")
//     count=count+1;
    
// }
// console.log(count);
// }
// vowels("Nepal");
//arrow function
//  const arrow=(a,b)=>{//with arrow function
//     console.log(a+b);
//  }
//  arrow(2,3);
//  let arrows=function(a,b){// without arrow function
//     console.log(a+b);
//  }
//  arrows(2,3);

// function name(){
//     console.log("Samip Nepal");
// }
// name();
// name();
// name();
//  function sum(m,n) {
//   let  s=m+n;
//     return s;
//  }
// let s=sum(2,3);
// console.log(s);