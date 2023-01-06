const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const specialDate = document.getElementById("datePicker");
specialDate.addEventListener('input', () => {
    document.getElementById("cdContainer").classList.remove('hidden');
    setInterval(countdown, 1000)
    const specialMonth = specialDate.value.split('-');
    setBG(specialMonth[1]);

})

function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}
let newDate = new Date();
setBG(newDate.toISOString().split('-')[1]);
newDate = addDays(newDate, 1);

datePicker.min = newDate.toISOString().split("T")[0];

function countdown() {
    const special = new Date(specialDate.value);
    special.setHours(0);
    const currentDate = new Date();
    const totalSeconds = (special - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

function setBG(month) {
    switch (month) {
        case "03":
        case "04":
        case "05":
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1577862236121-c237c73ef4ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
            break;
        case "06":
        case "07":
        case "08":
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80')"
            break;
        case "09":
        case "10":
        case "11":
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1572896487174-665ab9be3506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80')"
            break;
        default:
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1518983835933-984f33c641e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80')"
            break;
    }
}