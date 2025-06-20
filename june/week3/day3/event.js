console.log("event handling")
// 
let button=document.getElementById("btn")
console.log(button)

// button.onclick=()=>{
//     alert("button clicked")
//     button.style.background="red";
// }

// button.onkeyup=()=>{
//     console.log("key pressed")
// }

// button.addEventListener("click",()=>{
//     alert("button clicked")
// })

// button.removeEventListener("click",()=>{
//     console.log("remove clicked")
// })

// create a toggele button that changes the screen to dark mode when clicked and light mode when clicked again

let color="dark";
button.addEventListener("click",()=>{
    if(color==="light"){
        console.log(color)
        document.body.style.background="black"
        color="dark"


    }else{
      console.log(color)
        document.body.style.background="white"
        color="light"
  
    }
})