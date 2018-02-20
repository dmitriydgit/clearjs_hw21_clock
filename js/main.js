"use strict";

(function(){

    const todayDateBlock = document.querySelector("#today-date"),
        clockBlock = document.querySelector("#clock"),
        daysLeftBlock = document.querySelector("#days-left"),
        weekdays = ["","понедельник","вторник","среда","четверг", "пятница", "суббота", "воскресение"],
        months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];

    let p = (data, block) => {
        block.innerHTML = data;
    }

    let init = () => {
        let date = new Date(),
        hours = date.getHours().length < 10 ? "0" + date.getHours() : date.getHours(),
        minutes = date.getMinutes().length < 10 ? "0" + date.getMinutes() + "": date.getMinutes(),
        seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() + "": date.getSeconds(),
        todayDate = `Сегодня  ${weekdays[date.getDay()]},  ${date.getDate()} ${months[date.getMonth()]}`,
        currentTime = `Текущее время: ${hours}:${minutes}:${seconds}`,
        nextYear = Date.parse('2019-01-01T00:00:00')/(1000*60*60*24),
        currentYear = Date.parse(date)/(1000*60*60*24),
        daysLeft = `До 2019 года осталось ${Math.floor(nextYear - currentYear)} дней.`;

        p(todayDate, todayDateBlock);
        p(currentTime, clockBlock);
        p(daysLeft, daysLeftBlock);
    }

     setInterval(init,500);
})();