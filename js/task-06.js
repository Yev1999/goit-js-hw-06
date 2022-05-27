const input = document.querySelector('input');
const dataLength = input.dataset.length;

input.addEventListener("blur", (event) => {
    const value = event.currentTarget.value;
    if (value.length == dataLength) {
        // console.log(true);
        input.classList.remove("invalid");
        input.classList.add("valid");

    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
        // console.log(false);
    }

    // console.log(value.length);
})