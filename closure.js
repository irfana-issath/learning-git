

// const mother=()=>{
//     let count =0;
//     const child=()=>{
//         count++
//         return count;
//     }
//     return child
// }

// const func= mother()

// console.log(func())
// console.log(func())
// console.log(func())

// -------------------------------------------------------

// const counter=()=>{
//     let value=0;
//     const increment=()=>{
//         value++
//         return value;
//     }

//     const reset=()=>{
//         value = 0;
//         return value;
//     }

//     const decrement=()=>{
//         value--
//         return value;
//     }

//     return { increment,reset,decrement }

// }
// const resFunc= counter()

// console.log(resFunc.increment())
// console.log(resFunc.increment())
// console.log(resFunc.increment())
// console.log(resFunc.increment())
// console.log(resFunc.increment())
// console.log(resFunc.increment())
// console.log(resFunc.reset())
// console.log(resFunc.decrement())
// console.log(resFunc.decrement())
// console.log(resFunc.decrement())
// console.log(resFunc.decrement())
// console.log(resFunc.decrement())
// console.log(resFunc.decrement())
// console.log(resFunc.reset())
// --------------------------------------------------------------------------


// ----------------------1-----------------------------------

// const createCounter=()=>{
//     let count = 0;
//     const child=()=>{
//         count ++
//         return count
//     }
//     return child
// }

// const counter =createCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())

// -----------------------------------------------------

// --------------------2-----------------------------------

// const createGreeting=()=>{
//             let greeting= "hello"
//             const addNames=(name)=>{
//                 return greeting+name
//             }
//             return addNames
// }

// const greet=createGreeting();

// console.log(greet(" john"))
// console.log(greet(" jane"))

// ------------------------------------------------------------------------

// ------------------------3----------------------------------------

// const createMultiplier=()=>{
//     const multiplication=(num)=>{
//             const result=num*5
//             return result
//     }
//     return multiplication
// }

// const multiplyBy5=createMultiplier()

// console.log(multiplyBy5(5))

// ------------------------------------------------------------

// ---------------------4---------------------------------------
    // const creatTotal=()=>{
    //     let value=0
    //     const add=(num)=>{
    //          value=value+num
    //          return value
    //     }
    //     const getTotal=()=>{
    //         return value
    //     }
    //     return { add,getTotal}

    // }

    // const total=creatTotal()

    // console.log(total.add(5))
    // console.log(total.add(3))
    // console.log(total.getTotal())
    
// ---------------------------------------------------------------

// ---------------------5-----------------------------------------
            // const createNameFormatter=()=>{
            //     let namePlace=""
            //     const setFormat=(name)=>{
            //             namePlace=name
                        
            //     }
            // }  
// -------------------------------------------------------------------

// ---------------------6-----------------------------------------
        //     const createCalculator=()=>{
        //         let res
        //          const add=(num)=>{
        //           res=10+num
        //           return res
        //          }
        //          const subtract=(num)=>{
        //              totalRes=res
        //            let result=totalRes-num
        //             return result
        //          }
        //          return {add,subtract}
        //     }
        //     const calc=createCalculator()
        //  console.log(calc.add(5))
        //  console.log(calc.subtract(3))

// -------------------------------------------------------------------

// ---------------------7-----------------------------------------
            const createList=()=>{
                const add=()=>{

                }
                const getItems=()=>{

                }
                return {add,getItems}
            }

            
// -------------------------------------------------------------------

// ---------------------8-----------------------------------------

// -------------------------------------------------------------------





