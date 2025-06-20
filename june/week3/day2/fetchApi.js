console.log("today fetch Api")
// call back hell 
function getData(userId,next){

    setTimeout(() => {
     console.log("user Id :",userId)
     next()

},3000)
}
// getData(1)
// getData(2)
// getData(3)

getData(1,()=>{
    getData(2, ()=> { getData(3, ()=> { getData(4)})})
});


// normal promises


// promises
function getData(userId){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user Id :",userId)
            resolve("resolve ho gaya")

        }, 3000)
    })
}

// how to handle a promises
// ans: then or catch block
getData(1).then(()=>
getData(1).then((res)=>{
    console.log("result :",res)
}).catch((err)=>{
    console.log("Error is :",err)

}))



// async await
// async keyword is used to create asynchronous




async function getData(){
let response= await fetch("https://jsonplaceholder.typicode.com/posts   ")
let data=await response.json()
console.log(data[0].title)
}
getData()

