const arr=[1,2,3,4,5,6,7,8,9,10];

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










             //     first task

// --------------------1--------------------------------------------

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

// const stingarray=["raju baby","radha kutti","beem kuttan","bolu sweety","gudiya","chidiya","chotu vava","chamki","motu","patlu"];

// const removedChar= stingarray.filter((element)=>{
//    return !element.includes("r")
// })

// console.log(removedChar)
// ---------------------------------------------------------------------------------

// ------------------------14--------------------------------------------

// const stingarray=["raju baby","radha kutti","beem kuttan","bolu sweety","gudiya","chidiya","chotu vava","chamki","motu","patlu"];

// const replaceByLength= stingarray.map((element)=>{
//         return element.length
// })

// console.log(replaceByLength)
// ---------------------------------------------------------------------------------

                //    secont task  

// const employees = [
//     { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
//     { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
//     { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
//     { name: "David", age: 50, salary: 90000, department: "Management" },
//     { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
//     { name: "Frank", age: 40, salary: 75000, department: "Finance" },
//     { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
//     { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
//     { name: "Isaac", age: 38, salary: 68000, department: "HR" },
//     { name: "Jack", age: 42, salary: 72000, department: "Finance" },
//     { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
//     { name: "Leo", age: 33, salary: 58000, department: "HR" },
//     { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
//     { name: "Nina", age: 31, salary: 69000, department: "Finance" },
//     { name: "Oliver", age: 36, salary: 73000, department: "Management" }
// ];

// ---------------------1------------------------------------------------------

// const namesUpercase= employees.map((emp)=>{
//        return emp.name.toUpperCase()
// })
// console.log(namesUpercase)
// ----------------------------------------------------------------------------

// ---------------------2------------------------------------------------------------

// const earnMoreThan=employees.filter((emp)=>{
//      return emp.salary>60000
// })

// console.log(earnMoreThan)
// ------------------------------------------------------------------

// ----------------------3------------------------------------------

// const totalSalary=employees.reduce((total,emp)=>{
//     return total+emp.salary
// },0)
 
// console.log(totalSalary)
// ---------------------------------------------------------------------

// -----------------------4----------------------------------------------

// const marketingdep=employees.filter((emp)=>{
//     return emp.department=="Marketing"
// })
// console.log(marketingdep)

// const averageOfSalary=marketingdep.reduce((total,emp)=>{
//     return total+emp.salary
// },0)
 
// console.log(averageOfSalary/marketingdep.length)
// ------------------------------------------------------------------------

// -----------------------5----------------------------------------------

// const employeesNames= employees.map((emp)=>{
//        return emp.name
// })
// console.log(employeesNames)
// ------------------------------------------------------------------------

// ------------------------6------------------------------------------------

// const increase5Yr=employees.map((emp)=>{
//         return emp.age + 5
// })
// console.log(increase5Yr)
// -------------------------------------------------------------------

// ------------------------7--------------------------------------------

// const departmentAndSalary=employees.map((emp)=>{
//       return {department:emp.department, salary:emp.salary}
// })
// console.log(departmentAndSalary)
// --------------------------------------------------------------------

// -------------------------8-------------------------------------------

// const olderThan35= employees.filter((emp)=>{
//     return emp.age>35
// })
// console.log(olderThan35)
// ----------------------------------------------------------------------

// ------------------------9---------------------------------------------

// const engineers= employees.filter((emp)=>{
//        return emp.department=="Engineering"
// })
// console.log(engineers)
// -----------------------------------------------------------------------

// ------------------------11----------------------------------------------

// const  totalEmployees= employees.reduce((emp)=>{
//     return emp+1
// },0)
// console.log(totalEmployees)
// -------------------------------------------------------------------------

// -------------------------12-----------------------------------------------

// const earnMoreThan=employees.filter((emp)=>{
//      return emp.salary>70000
// })
// console.log(earnMoreThan)

// const namesOnly=earnMoreThan.map((emp)=>{
//     return emp.name
// })
// console.log(namesOnly)
// --------------------------------------------------------------------------

// ------------------------13-----------------------------------------

// const youngerThan30= employees.filter((emp)=>{
//      return emp.age<30
// })
// console.log(youngerThan30)

// const nameDepartment=youngerThan30.map((emp)=>{
//     return {name:emp.name,department:emp.department}
// })
// console.log(nameDepartment)
// ---------------------------------------------------------

// --------------------14-----------------------------------

// const financeDep=employees.filter((emp)=>{
//     return emp.department=="Finance"
// })
// console.log(financeDep)

// const salaryOfFin=financeDep.reduce((total,emp)=>{
//     return total+emp.salary
// },0)
// console.log(salaryOfFin)
// ------------------------------------------------------------------------

// ----------------------15------------------------------------------------

// const engineers= employees.filter((emp)=>{
//        return emp.department=="Engineering"
// })
// console.log(engineers)

// const sumOfAge=engineers.reduce((totalage,emp)=>{
//     return totalage+emp.age
// },0)
// console.log(sumOfAge/engineers.length)
// ------------------------------------------------------------------------

// ---------------------16------------------------------------------------

// const marketingHr= employees.filter((emp)=>{
//        return emp.department=="Marketing" || emp.department=="HR"
// })
// console.log(marketingHr)

// const namesOnly= marketingHr.map((emp)=>{
//        return emp.name
// })
// console.log(namesOnly)
// ---------------------------------------------------------------------------------

// ----------------------17-------------------------------------------------------
// not finished
// const withOutManagement= employees.filter((emp)=>{
//        return !emp.includes("Management")
// })
// console.log(withOutManagement)
// ---------------------------------------------------------------------------------

// ------------------------18-------------------------------------------------------------

// const sumOfAge=employees.reduce((totalage,emp)=>{
//     return totalage+emp.age
// },0)
// console.log(sumOfAge)
// ---------------------------------------------------------------------------------------------

// --------------------------19---------------------------------------------------------------------

// const salaryBetween=employees.filter((emp)=>{
//     return emp.salary>60000 && emp.salary<80000
// })
// console.log(salaryBetween)

// const namesOnly= salaryBetween.map((emp)=>{
//        return emp.name
// })
// console.log(namesOnly)
// -------------------------------------------------------------------------------

// --------------------------20-----------------------------------------------------

// const marketingdep=employees.filter((emp)=>{
//     return emp.department=="Marketing"
// })
// console.log(marketingdep)

// const averageOfSalary=marketingdep.reduce((total,emp)=>{
//     return total+emp.salary
// },0)
 
// console.log(averageOfSalary/marketingdep.length)

// const moreThanAverage=averageOfSalary/marketingdep.length

// const averageThan=employees.filter((emp)=>{
//     return emp.salary>moreThanAverage
// })
// console.log(averageThan)








