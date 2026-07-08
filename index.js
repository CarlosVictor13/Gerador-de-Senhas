const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    if (inputEl.value) { 
        copyPassword();
        
        alertContainerEl.innerText = "Senha copiada com sucesso!";
        alertContainerEl.classList.add("active");
        
        setTimeout(() => {
            alertContainerEl.classList.remove("active");
        }, 2000);
    }
});

function createPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%&*";
    const passwordLength = 12;
    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum]; 
    }

    inputEl.value = password; 
}

function copyPassword() {
    inputEl.select(); // Seleciona o texto do input
    inputEl.setSelectionRange(0, 9999); // Garante a seleção em dispositivos móveis
    navigator.clipboard.writeText(inputEl.value); // Copia para a área de transferência
}

