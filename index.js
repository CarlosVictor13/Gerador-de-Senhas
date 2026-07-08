const btnEl = document.querySelector(".btn");

const inputEl = document.getElementById("input");

const 

btnEl.addEventListener("click", ()=>{
    createPassword()
})

function createPassword() {
    const chars = "1234567890";
    const passwordLength = 8;
    let password = ""
    for (let index = 0; index < passwordLength; index++){
        const randomNum = Math.floor (Math.random() * chars.length);
password += chars.substring(randomNum, + 1);
    }
    inputEl.value = password;
}