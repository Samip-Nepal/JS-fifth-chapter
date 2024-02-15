//Pratice qn 1
function vowels(str){
count=0;
for(let val of str){
    if(val==="a"||val==="e"||val==="i"||val==="o"||val==="u")
    count=count+1;
    
}
console.log(count);
}
vowels("Nepal");







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