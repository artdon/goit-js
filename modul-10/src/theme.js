const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const ref = {
  input: document.querySelector('#theme-switch-control'),
  body: document.querySelector('body'),
  checkbox: document.querySelector('input[type="checkbox"]'),
};

const themeDefoult = localStorage.getItem('Theme');

if (themeDefoult === 'DARK') {
  ref.body.classList.add('dark-theme');
  ref.checkbox.checked = true;
} else {
  ref.body.classList.add('light-theme');
  ref.checkbox.checked = false;
}
ref.input.addEventListener('click', changeTheme);

function changeTheme(e) {
  if (ref.body.classList.contains('light-theme')) {
    ref.body.classList.remove('light-theme');
    ref.body.classList.add('dark-theme');
    localStorage.setItem('Theme', 'DARK');
  } else {
    ref.body.classList.remove('dark-theme');
    ref.body.classList.add('light-theme');
    localStorage.setItem('Theme', 'LIGHT');
  }
}
