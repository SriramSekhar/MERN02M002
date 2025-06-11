// console.log("Hello Array")
// let a=20
// console.log("the value is :",a)
// console.log("the value of a is :${a + 2}")

// const obj={
//     name:"xyz"
// }
// console.log(obj.name)
// obj.name="y"
// console.log(obj.name)

let str="welcome "
console.log(str[1])
str[0]="D"
console.log(str)

console.log(str.length)

console.log(str.toUpperCase())
console.log(str.toLowerCase())

const newstr=str.toLowerCase()
console.log(newstr)

console.log(str.trim().length)
console.log(str.length)

console.log("After trim:",str.trim().length)
console.log("here trim not applicable",str.length)

console.log(str.charAt(0))
console.log(str.concat("Qlith").concat("Innovation"))

const newString=str.replace("w","D")
console.log(newString)

// console.log(str.slice(0,str.length))
// console.log(str.slice(2,str.length))
// console.log(str.slice(-2,str.length))
// console.log(str.slice(-4))

// let userName= prompt("enter your name")
// console.log("".concat("@").concat(userName).concat(userName.length))

// console.log(str.substring(-2))

// ARRAY.....

let starr=["babul","pagal","sagar","rama","hari"]
console.log(starr[0])
for(let e of starr){
    console.log(e)
}

let numArr=[2,3,4,6,7]
let sum=0
for(let e of numArr){
    sum=sum+e
}
console.log(sum/( numArr.length))

let arr2=[1,2,3,4,5]
let arr3=[6,7,8]
arr2.push(6,"sss",true)
console.log(arr2)

arr2.pop()
console.log(arr2)

console.log(arr2.toString())

console.log(arr2.concat(arr3))
arr2.unshift(0)
console.log(arr2)
arr2.shift()
console.log(arr2)

console.log(arr2.slice(4))

console.log(arr2.slice(-2))

arr2.pop()
console.log(arr2)
arr2.splice(1,2,10)
console.log(arr2)

arr2.splice(4,1)
console.log(arr2)

console.log(arr2.includes(10))
console.log(arr2.includes(9))



let comarr=["Bloomberg","Michrosoft","Uber","Google","IBM","NETFLIX"]
comarr.shift()
console.log(comarr)
comarr.splice(1,1,"Ola")
console.log(comarr)
comarr.push("Amazon")
console.log(comarr)

