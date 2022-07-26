const toggle = document.querySelector('.toggle');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const times = document.querySelector('.time');
const date = document.querySelector('.date')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle.addEventListener('click', function(e){
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    html.classList.contains('dark')? e.target.innerHTML = 'Light Mode' : e.target.innerHTML = 'Dark Mode';
});

setTime();

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const dates = time.getDate();
    const hours = time.getHours();
    const hoursFormated = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    second.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    hour.style.transform = `translate(-50%, -100%) rotate(${scale(hoursFormated, 0, 11, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    times.innerHTML = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`
    date.innerHTML  = `${days[day]}, ${months[month]} <span class="circle">${dates}</span>`

}

setInterval(setTime, 1000);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}