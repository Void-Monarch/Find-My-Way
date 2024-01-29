import { anime, interact_pulse } from './AnimeScript';
import {
  revealEnterOffice,
  reveal_img_career,
  reveal_interact_img,
} from './revealFuction';
import { sideItemIn, itemSwell } from './sideBarAnime';
import { login, logout } from './login';

try {
  revealEnterOffice();
  reveal_img_career();
  reveal_interact_img();
} catch (e) {
  console.log('Not at Overview page');
}

// LOGIN
const loginForm = document.querySelector('#form--login');

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);
