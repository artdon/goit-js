




const ipt = document.querySelector('#name-input');
const namePush = document.getElementById('name-output');

ipt.addEventListener('input', inputText.bind(namePush));


function inputText(e) {
    const inp = e.currentTarget;
   this.textContent = inp.value !== "" ? inp.value : "незнакомец";
}
