let age = document.getElementById("userAge");
const range = document.getElementById("range")
range.addEventListener("input", (event)=> {
    age.innerHTML = event.target.value;
})