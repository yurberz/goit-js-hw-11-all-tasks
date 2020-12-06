const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

const targetDate = new Date("Dec 28, 2020");
const pad = (value) => {
  return String(value).padStart(2, "0");
};

const countDown = () => {
  const time = targetDate - Date.now();

  refs.days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
  refs.hours.textContent = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  refs.mins.textContent = pad(
    Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  );
  refs.secs.textContent = pad(Math.floor((time % (1000 * 60)) / 1000));
};

setInterval(countDown, 1000);
