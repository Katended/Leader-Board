import './style.css';
import { getData } from './modules/get.js';
import populate from './modules/populate.js';
import postData from './modules/post.js';

const dataContainer = document.querySelector('.scoresList');
const refreshBtn = document.querySelector('.refreshBtn');
const form = document.querySelector('.form');
const notification = document.getElementById('notification');

refreshBtn.addEventListener('click', async () => {
  let { result } = await getData();
  result = (result === undefined) ? [] : result;

  if (result.length === 0) {
    notification.innerHTML = 'There are no results to display.';
    notification.classList.toggle('visible');
  } else {
    populate(result, dataContainer);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.name.value;
  const score = e.target.score.value;
  if (!name.trim() || !score) return;
  postData({
    user: name,
    score,
  });
  form.reset();
});
const clickEvent = new Event('click');
refreshBtn.dispatchEvent(clickEvent);