//que-1
// var i
// for(i=1;i<=10;i++){
//     console.log(i);
// }



// que-2


// var a=parseInt(prompt(("enter the num a:")));
// var b=parseInt(prompt(("enter the num b:")));

// var c=parseInt(a+b);
// console.log(c);
 
// que-3

// var i;
// var mul=1;
// var a=5;

// for(i=1;i<=10;i++){
//   mul= 5*i;  
 
//    console.log(a +"* "+i+"= "+mul);
//     }


// que-4
// var n =prompt("enter the the num")

// var f = 1;
// for (var i = 1; i <= 5; i++) {
//   f *= i;
//   console.log(f);
// }



//que-5

// var i;
// var n=12;
// for (i=n;i<=n;i++){

//  if(i%2==0){
//     console.log( i+" "+"even")
//  }
//  else{
//     console.log(i+ " " +"odd");
//  }

// }


// que-6

// let j
// let i
// var sequence=""
// var second=""
//     for(j=5 ; j>=0 ; j--){
//         sequence +=j+""
//          }
//     console.log(sequence);

//         for(i=0 ; i<=5 ; i++){
            
//             second+=i+""        }


//             console.log(second)
            
            


// que-7
 
// var sequence=""
// for(i=1;i<=5;i++){
//     sequence+=""+"*"+" ";
   
//     console.log(sequence);
// }

// or  
// var i,j
// for(i=1;i<=4;i++){
//     for(j=1;j<=i;j++){
//       document.write("*");
//     }
// document.write("<br>");
// }



// for (var i = 5; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }


//que-8

// var name=354646;
// var count=0;

// if(name<0)
//     {
//     console.log("negative");  
// }
// while(name>0){
    
//     name=parseInt(name/10);
//     count++;
   
    
// }

// console.log(count);


//9


let n = prompt("Enter a Number");

let count = 0;

let j ;

for(j=1; j<=n; j++)
{
    if(n%j==0)
    {
        count++;
    }
}
if(count<=2)
{
    console.log("Prime number",n);
}
else
{
    console.log("Composite number",n);
}
