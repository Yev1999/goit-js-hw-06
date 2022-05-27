
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

incrementBtn.addEventListener("click", inc);
decrementBtn.addEventListener("click", dec);

let counterValue = 0; 

const currentRes = document.querySelector('#value');

function inc() {
    counterValue += 1;
    currentRes.innerText = `${counterValue}`;
};


function dec() {
        counterValue -= 1;
        currentRes.innerText = `${counterValue}`;
    };