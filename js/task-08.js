const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const pass = formData.get("password");
    

    if ((email === "") || (pass === "")) {
        alert("Всі поля повинні бути заповнені");
    } else {
        const elements = loginForm.elements;
        const formDataObj = {};
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].nodeName === "INPUT") {
                const key = elements[i].getAttribute("name")
                formDataObj[key] = elements[i].value;
            }
        }
        console.log(formDataObj);
        loginForm.reset();
    }

})

