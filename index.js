const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () =>{
    coprPassword();
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
        alertContainerEl.classList.add("active");
    }, 2000)
});

function createPassword() {
    const chars = "1234567890";
    const passwordLength = 8;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        
        
        password += chars[randomNum]; 
    }

    inputEl.value = password; 
    alertContainerEl.innerText = password + "copied"
}

function copyPassword(){
    inputEl.ariaSelected();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}
