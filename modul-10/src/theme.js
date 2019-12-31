const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  input: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'),
  checkbox: document.querySelector('input[type="checkbox"]'),
};

const eDefoult = localStorage.getItem('ref.checkbox');

if (eDefoult === Theme.DARK) {
  ref.body.setAttribute("class", Theme.DARK);
  ref.checkbox.checked = true;
} else {
  ref.body.setAttribute("class", Theme.LIGHT);
  ref.checkbox.checked = false;
}
ref.input.addEventListener('click', changeTheme);

function changeTheme(e) {
  if (ref.body.classList.contains(Theme.LIGHT)) {
    ref.body.removeAttribute("class");
    ref.body.setAttribute("class", Theme.DARK);
    localStorage.setItem('ref.checkbox', Theme.DARK);
  } else {
    ref.body.removeAttribute("class");
    ref.body.setAttribute("class", Theme.LIGHT);
    localStorage.setItem('ref.checkbox', Theme.LIGHT);
  }
}
