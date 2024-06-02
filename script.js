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
const splashH1 = document.querySelector('.splash-screen h1');
const splashH4 = document.querySelector('.splash-screen h4');
const forgotPass = document.getElementById('forgot-password');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

login2register.addEventListener('click', event => {
    infoPanel.style.left = '65%';
    loginPanel.style.width = '35%';
    loginPanel.style.animation = 'fade-out 0.2s ease-in-out 0s forwards';
    signupPanel.style.width = '65%';
    signupPanel.style.animation = 'fade-in 0.3s ease-in-out 1.1s forwards';
    splashH1.style.animation = 'text-bounce 1s ease-in-out';
    splashH4.style.animation = 'text-bounce 1s ease-in-out';
    let timeout1 = setTimeout(() => {
        splashH1.innerHTML = 'Hello, Friend!';
        splashH4.innerHTML = 'Register a new account';
        clearTimeout(timeout1);
    }, 500);
    let timeout2 = setTimeout(() => {
        splashH1.style.animation = '';
        splashH4.style.animation = '';
        clearTimeout(timeout2);
    }, 1000);
});

register2login.addEventListener('click', event => {
    infoPanel.style.left = '0';
    loginPanel.style.width = '65%';
    loginPanel.style.animation = 'fade-in 0.3s ease-in-out 1.1s forwards';
    signupPanel.style.width = '35%';
    signupPanel.style.animation = 'fade-out 0.2s ease-in-out 0s forwards';
    splashH1.style.animation = 'text-bounce 1s ease-in-out';
    splashH4.style.animation = 'text-bounce 1s ease-in-out';
    let timeout1 = setTimeout(() => {
        splashH1.innerHTML = 'Welcome Back!';
        splashH4.innerHTML = 'Enter your account details';
        clearTimeout(timeout1);
    }, 500);
    let timeout2 = setTimeout(() => {
        splashH1.style.animation = '';
        splashH4.style.animation = '';
        clearTimeout(timeout2);
    }, 1000);
});

loginPanel.style.animation = 'fade-in 0.3s ease-in-out 0s forwards';

forgotPass.addEventListener('click', event => {
    backdrop.style.pointerEvents = 'auto';
    backdrop.style.opacity = '1';
    modal.style.transform = 'translate(-50%, -50%)';
});

backdrop.addEventListener('click', event => {
    backdrop.style.pointerEvents = 'none';
    backdrop.style.opacity = '0';
    modal.style.transform = 'translate(-50%, 100%)';
});