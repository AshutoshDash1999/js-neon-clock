var hour = document.querySelector("#hour");
var minute = document.querySelector("#minute");
var second = document.querySelector("#second");

function showTime(){
    var timeNow = new Date;
    var getHour = (timeNow.getHours())*30;
    var getMinute = (timeNow.getMinutes())*6;
    var getSecond = (timeNow.getSeconds());

    second.style.transform = `rotate(${getSecond*6}deg)`;
    minute.style.transform = `rotate(${getMinute}deg)`;
    hour.style.transform = `rotate(${getHour}deg)`;

    setTimeout(showTime, 100)
}

showTime()