


let inputs=document.querySelectorAll("input")
console.log(inputs)

let btn=document.querySelector("button")
console.log(btn)

btn.addEventListener('click',()=>{
console.log(inputs[0].value)
console.log(inputs[1].value)

let userObj={
    fullName:inputs[0].value,
    age:inputs[1].value,
}
localStorage.setItem("user",JSON.stringify(userObj))

})
let form=document.querySelector("form")
form.addEventListener("login",(e)=>{
    e.preventDefault();
})

document.getElementById("login-Form").addEventListener("login", function(event) {
  event.preventDefault(); 
  
  document.getElementById("message").textContent = "Logging successful!";
  document.getElementById("message").style.color = "green";
});