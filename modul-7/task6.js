


const input = document.querySelector("#validation-input");
const letter = input.dataset.length;
input.addEventListener('blur', inputText);


function inputText(e){
    const inp = e.currentTarget;
    if( inp.value.length == letter){
        inp.style.borderColor= document.getElementById("validation-input").className = "valid";
    }else {
        inp.style.borderColor= document.getElementById("validation-input").className = "invalid";
    }

}





