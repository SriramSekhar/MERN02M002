//this is function declaration
function print(){
    console.log("this is my function")
}

//this is function calling or invocation
//print()
console.log(print)

//exprerssion function
let printQlith=function(){
    console.log("this is my expression function")
}

printQlith()
//console.log(printQlith)

// function with parameter
let add=function(a,b){
    return a+b;
}

let sum=add(10,20);
console.log(sum)
//console.log(add)

let sub=()=>{
    console.log("this is arrow function")
}
sub()
// console.log(sub)


//higher order function
function hof(a,b,task){
   return task(a,b)
}

let addNum=hof(10,20,(x,y)=>{
    return x+y
})
console.log(addNum)


// create a function using the function keyword that takes a string as an argument and return the number of vowels in the string
// let newString=prompt("enter some string :")
// function checkVowel(str){

//     let newStr=str.toLowerCase();
    
//     let count=0
    // using for loop by simple checking
//     for(let e of newStr){

//         if(e=== "a"|| e=== "e" || e==="i" || e==="o" || e==="u"){
//             count++
//         }
// }

// using includes method
// for(let e of newStr){
//     if("aeiou".includes(e)){
//         count++
//     }
// }
// return count
// }
// console.log("No of vowels is :", checkVowel(newString))


let arr=[1,2,3,4,5,6,7,8]
let count=0
arr.forEach((v,idx)=>{
if(v%2==0){
    count++
}
})
console.log(count)

// forEach
let strArr=["pagal","dasu","bakadi","choro","biswajit","soumya"]
let countStartwiths=0
strArr.forEach((v)=>{
    if(v.startsWith("s")){
        countStartwiths++
    }
})
console.log( "ans is :",countStartwiths)

// map
let numArr=[1,2,3,4,5]
let modifiedArr=numArr.map((v)=>{
    return v+1
})
console.log(modifiedArr)

// filter
let filterData=numArr.filter((v)=>{
    return v%2===0
})
console.log(filterData)

// this is reduced method
let sumOfNumber=numArr.reduce((accu,curr)=>{
    return accu+curr
},0)
// console.log("sum is:" , sumOfnumber)


let sumNum=0
for(let e of numArr){
    sumNum+=e;
}
console.log(sumNum)

// Q: we are given array of marks of students. filter out of the marks of students that scored 50+

let stMark=[60,50,40,30,80,90]
let afterFilter=stMark.filter((e)=>{
    return e>=50
})
console.log(afterFilter)

// /Question 2
let n=prompt("enter a number");

let from1ToN=[]
for(let i=1;i<n;i++){
    from1ToN.push(i)
    console.log(from1ToN)

    let sumFrom1ToN=from1ToN.reduce((accu,curr)=>{
        return accu+curr
    })
     let mulFrom1ToN=from1ToN.reduce((accu,curr)=>{
        return accu*curr

})
console.log("Summation is :",sumFrom1ToN)
console.log("multiplication is :",mulFrom1ToN)
}