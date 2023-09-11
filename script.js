
var date = new Date();

const daysOfTheWeek = [
     'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


// var currentDate = '';
var currentDay, currentTime, 
currentTimezone, currentDate, currentMonth,
currentYear;

var hour, minutes, seconds, milli;

class myProfile{
    getCurrentDate(){
        currentDay = date.getDay();
        currentDate = date.getDate();
        currentMonth = date.getMonth();
        currentYear = date.getFullYear();
    }

    getTime(){
        hour = date.getUTCHours();
        minutes = date.getUTCMinutes();
        seconds = date.getSeconds();

    }
}


setInterval(()=>{
    date = new Date();
    let details = new myProfile;
    details.getCurrentDate();
    details.getTime()
    document.getElementById("date").innerText = `${daysOfTheWeek[currentDay-1]} ${currentDate} ${months[currentMonth-1]}, ${currentYear}.`;
    document.getElementById("time").innerText = `    ${`${hour}`.length > 1 ? `${hour}` : `0${hour}`} : ${`${minutes}`.length > 1 ? `${minutes}` : `0${minutes}`} ${hour < 12 ? "AM" : 'PM'} `
}, 100);