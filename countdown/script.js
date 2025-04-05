const days = document.querySelector('.container > .day > h1');
const hours = document.querySelector('.container > .hour > h1');
const minutes = document.querySelector('.container > .minute > h1');
const seconds = document.querySelector('.container > .second > h1');

let daysLeft = 0.1;

let totalSeconds = Math.floor(daysLeft * 24 * 60 * 60);

function countDown() {
    let timer = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(timer);
            days.innerHTML = "00";
            hours.innerHTML = "00";
            minutes.innerHTML = "00";
            seconds.innerHTML = "00";
            window.location.assign("../carousel/index.html");
            return;
        }

        let d = Math.floor(totalSeconds / (60 * 60 * 24));
        let h = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        let m = Math.floor((totalSeconds % (60 * 60)) / 60);
        let s = totalSeconds % 60;


        
        if(d < 10){
            days.innerHTML = `0${d}`;
        }else{
            days.innerHTML = d;
        }
        if(m < 10){
            minutes.innerHTML = `0${m}`;
        }else{
            minutes.innerHTML = m;
        }
        if(h < 10){
            hours.innerHTML = `0${h}`;
        }else{
            hours.innerHTML = h;
        }
        if(s < 10){
            seconds.innerHTML = `0${s}`;
        }else{
            seconds.innerHTML = s;
        }

        totalSeconds--;
    }, 1000);
}

countDown();
