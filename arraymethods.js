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

// const sumOfNNumbers=(num,callback)=>{
// let sum=0;
// for(let i=0;i<=num;i++){
//     sum += i
//     callback(sum,7,8)
// }
// return sum;
// }

// const displaySum=(sum,num1,num2)=>{
//         console.log(sum,num1,num2);
// }

// console.log(sumOfNNumbers(10,displaySum))

// displaySum(sumOfNNumbers(10))

// ---------------------------------------------------

// ------------forEach---------------------------
// let arr=["raju","radha","beem","bolu","gudiya","chidiya","chotu","chamki","motu","patlu"];

// arr.forEach((element,intex)=>{
//     console.log(element,intex);
// })

// --------------------------------------------------

// --------------filter------------------------

// const arr=[1,2,3,4,5,6,7,8,9,10];

// const anOtherArray= arr.filter((element)=>   element % 2==0)

// console.log(anOtherArray)

// ------------------------------------------------------------

// ---------------map------------------------------

// const arr=[1,2,3,4,5,6,7,8,9,10];

// const mappedArray=arr.map((element)=>{
//     if(element%2==0){
//         return element*10
//     }
//     return element
// })

// console.log(mappedArray)












// --------------------1------------------------

// const arr=[1,2,3,4,5,6,7,8,9,10];

// const mappedArray= arr.map((element)=>{
//     return element+element;
// })

// console.log(mappedArray)

// -------------------------------------------------

// ----------------------2---------------------------

// const evenPrint= arr.filter((element)=> element%2==0)

// console.log(evenPrint)
// -------------------------------------------------------

// -----------------------3------------------------------

// const stingarr=["raju","radha","beem","bolu","gudiya","chidiya","chotu","chamki","motu","patlu"];

// const newUpperCase= stingarr.map((element)=>{
//      return element.toUpperCase()
// })

// console.log(newUpperCase)
// ----------------------------------------------------------

// -----------------------4----------------------------------

// const stingarray=["raju baby","radha kutti","beem kuttan","bolu sweety","gudiya","chidiya","chotu vava","chamki","motu","patlu"];

// const longer= stingarray.filter((element)=> {
    
//     return element.length <6 
// })

// console.log(longer)
// ----------------------------------------------------------------------

// ------------------------5-----------------------------------

// const arr=[1,2,3,4,5,6,7,8,9,10];

// const squared= arr.map((element)=> element*2)

// console.log(squared)
// ------------------------------------------------------------

// ----------------------6--------------------------------

// const arr=[10,200,30,400,50,600,70,800,90,100];

// const lessThan= arr.filter((element)=>{
//     return element<100
// })
// console.log(lessThan)

// const incriment= lessThan.map((element)=>{
//         return element+10
// })
// console.log(incriment)
// ---------------------------------------------------------------

// -----------------------7----------------------------------

// const arr=[1,2,3,4,5,6,7,8,9,10];

// const odd= arr.filter((element)=> element %2==1)

// console.log(odd)

// const doubled= odd.map((element)=> element+element)
// console.log(doubled)
// --------------------------------------------------------

// ----------------------8--------------------------------

// const stingarr=["raju","radha","beem","bolu","gudiya","chidiya","chotu","chamki","motu","patlu"];

// const capitalize= stingarr.map((element)=>{
//       return element.replace(element[0],element[0].toUpperCase())
// })
// console.log(capitalize)
// ------------------------------------------------------------------------------

// -----------------------9------------------------------

// const arr=[-1,2,-3,4,-5,6,-7,8,-9,10];

// const nonNegative= arr.filter((element)=>{
//     return element >0
// })
// console.log(nonNegative)
// -----------------------------------------------------------

// -------------------------10------------------------------

// const arr=[1,2,3,4,5,6,7,8,9,10];

// const cubed= arr.map((element)=> element*3)

// console.log(cubed)
// --------------------------------------------------------

// -------------------------11--------------------------------

// const stingarray=["raju baby","radha kutti","beem kuttan","bolu sweety","gudiya","chidiya","chotu vava","chamki","motu","patlu"];

// const rStings= stingarray.filter((element)=>{
//     return element.includes("r")
// })
// console.log(rStings)
// -----------------------------------------------------------------------

// -------------------------12---------------------------------------------

// const arr=[1,20,30,4,5,6,3,8,2,1];

// const lessThan5= arr.filter((element)=>element<5)
// console.log(lessThan5)

// const multipliedBy3= lessThan5.map((element)=> element*3) 
// console.log(multipliedBy3)
// --------------------------------------------------------------------

// -------------------------13--------------------------------------------

const stingarray=["raju baby","radha kutti","beem kuttan","bolu sweety","gudiya","chidiya","chotu vava","chamki","motu","patlu"];

const removedChar= stingarray.filter((element)=>{
    return element["r"].
})