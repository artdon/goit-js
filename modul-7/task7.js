


const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input',inputValue)

function inputValue(e) {
    const inp = e.currentTarget;
    text.style.fontSize = inp.value +"px";
}