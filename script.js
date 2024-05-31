let toggle = document.getElementById('theme_toggle');
let storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme)
    if (storedTheme === 'dark') {
        toggle.checked = true;
    }
    else {
        toggle.checked = false;
    }
}
toggle.addEventListener('click', function () {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let targetTheme = 'light';
    if (currentTheme === 'light') {
        targetTheme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
});
// theme switch

const infoPanel = document.getElementById('info-panel')
const loginPanel = document.getElementById('login-panel');
const signupPanel = document.getElementById('signup-panel');
const login2register = document.getElementById('login-to-register');
const register2login = document.getElementById('register-to-login');

login2register.addEventListener('click', event => {
    infoPanel.style.left = '65%';
    loginPanel.style.width = '35%';
    loginPanel.style.opacity = '0';
    signupPanel.style.width = '65%';
    signupPanel.style.opacity = '1';
});