

let counterValue = {value:0};

const decrementbutton = document.querySelector('button[data-action="decrement"]')
const incrementbutton = document.querySelector('button[data-action="increment"]')
const elem =document.querySelector('#value');

decrementbutton.addEventListener("click",decrementbtn.bind(elem, counterValue));
incrementbutton.addEventListener("click",incrementbtn.bind(elem, counterValue));

function decrementbtn(counterValue,e) {
    const element =e.currentTarget;
    counterValue.value--;
    this.textContent = counterValue.value;
}
    
function incrementbtn(counterValue,e) {
    const element =e.currentTarget;
    counterValue.value++;
    this.textContent = counterValue.value;
}
    