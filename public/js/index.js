import { anime, interact_pulse } from './AnimeScript';
import { stickNav } from './stickyNav';
import {
  revealEnterOffice,
  reveal_img_career,
  reveal_interact_img,
} from './revealFuction';
import { sideItemIn, itemSwell } from './sideBarAnime';
import { login, logout, signup } from './login';

// All imported fuction exec //
stickNav();

try {
  revealEnterOffice();
  reveal_img_career();
  reveal_interact_img();
} catch (e) {
  console.log('Nothing to see here');
}

// LOGIN
const loginForm = document.querySelector('#form--login');
const signForm = document.querySelector('#form--signup');
const logOutBtn = document.querySelector('#logOutBtn');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (signForm)
  signForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, gender, email, password, passwordConfirm);
  });
