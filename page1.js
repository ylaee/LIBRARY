const generator = document.querySelector(".generator")
userinput = generator.querySelector(".form input"),
button = generator.querySelector(".form button"),
img = generator.querySelector(".QR-Code img");

button.addEventListener("click", () => {
    let textbox = userinput.value;
    if(!textbox) return;
    button.innerText = "Processing info..."
<<<<<<< Updated upstream
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=walang_api_kaya_isang_qrcode_lang_nalabas_HAHAHHAHA';
=======
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=pakitanggal ng PR2 sa subjects pls';
>>>>>>> Stashed changes
    img.addEventListener("load", () => {
        generator.classList.add("active");
        button.innerText = "Submit"
    });
});

userinput.addEventListener("keyup", () => {

    if(!userinput.value){
        generator.classList.remove("active");
    }
});








