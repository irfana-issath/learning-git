// const arr=[1,2,3,4,5,6,7,8,9,10];

// for(let i=0; i<arr.length;i++){
//     console.log(i);
// }

// const even=(num)=>(num%2==0);

 
// console.log(even(10));

// let result= sum(10,20);
// console.log(result)

// const sumOfNum=(num1,num2)=> num1+num2;
    
// console.log(sumOfNum(200,300))


// const thisIs=()=>console.log("This is a function")
// const other=() =>{
//     thisIs();
// }

// other();

// ---------------callback method--------------------------------

// const justTry=()=>{
//     console.log("This is callback")
// }


// const display=(callback)=>{
//   console.log(callback)
//    console.log(justTry)

//    callback()
// }

// display(justTry)


// ---------------------------------------------------

const sumOfNNumbers=(num,callback)=>{
let sum=0;
for(let i=0;i<=num;i++){
    sum += i
    callback(sum,7,8)
}
return sum;
}

const displaySum=(sum,num1,num2)=>{
        console.log(sum,num1,num2);
}

console.log(sumOfNNumbers(10,displaySum))

// displaySum(sumOfNNumbers(10))



