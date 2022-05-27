const fonSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fonSizeControl.addEventListener("input", (event) => {
    const value = event.currentTarget.value;
    text.style.fontSize = value + 'px';
})