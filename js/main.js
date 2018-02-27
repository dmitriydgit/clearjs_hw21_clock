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
        hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() + "": date.getMinutes(),
        seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() + "": date.getSeconds(),
        todayDate = `Сегодня  ${weekdays[date.getDay()]},  ${date.getDate()} ${months[date.getMonth()]}`,
        currentTime = `Текущее время: ${hours}:${minutes}:${seconds}`,
        nextYear = Date.parse('2019-01-01T00:00:00')/(1000*60*60*24),
        currentYear = Date.parse(date)/(1000*60*60*24),
        daysLeft = Math.floor(nextYear - currentYear); 
        //daysLeft = 101;
        
        let changeDaysWord = (daysLeft) => {
              var daysLeft = Math.abs(daysLeft);
              var word = "дней",
                day = "осталось";
          
              if(((daysLeft === 2) || (daysLeft % 10 === 2) || (daysLeft === 3) || (daysLeft % 10 === 3)  || (daysLeft === 4) || (daysLeft % 10 === 4))){
                  word = "дня";
              } 
              if(daysLeft === 1 || daysLeft % 10 === 1){
                word = "день";
                day =  "остался";
              }
              if((daysLeft === 11) || (daysLeft === 12) || (daysLeft === 13) || (daysLeft === 14) || (daysLeft % 100 === 11) || (daysLeft % 100 === 12) || (daysLeft % 100 === 13) | (daysLeft % 100 === 14) ){
                word = "дней";
              }
              if(daysLeft === 0 ){
                return `С Новым годом!!!`;
              }

              return `До 2019 года ${day} ${daysLeft} ${word}.`;
        }
        
        p(todayDate, todayDateBlock);
        p(currentTime, clockBlock);
        p(changeDaysWord(daysLeft), daysLeftBlock);
    }

     setInterval(init,500);
})();
