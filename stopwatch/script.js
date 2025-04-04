//variabel buat nampung DOM yang dibutuhkan
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const timeDisp = document.querySelector('.time');

//deklarasi variabel yang dibutuhkan 
let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = null;//timer buat nampung setInterval()

//tambahkan event listener untuk startBtn yang udah diambil menurut ID di atas
startBtn.addEventListener('click', () => {
    if(timer != null){//kalau timer sudah mulai maka tidak terjadi apa-apa
        return;
    }

    timer = setInterval(() => {//setInterval untuk melooping tiap detik kalau disini tiap 11 detik
        miliseconds += 11;//ditambah tiap 11 detik karena nyettingnya memang tiap 11 detik

        if(miliseconds >= 1000){//kalau lebih dari 1000 ms maka 1 detik 1 detik = 1000ms
            miliseconds = 0;
            seconds += 1;
        }

        if(seconds === 60){//1 menit 60 s
            seconds = 0;
            minutes += 1;
        }

        if(minutes === 60){//60 m 1 jam
            minutes = 0;
            hours += 1;
        }

        let [ms, s, m, h] = ['', '', '', ''];//deklarasi variabel buat nanti display tiap 11 detik(tergantung setInterval)
        if(miliseconds < 10){//kalau kurang dari 10 karena 3 digit 0 nya dua
            ms = `00${miliseconds}`;
        }else if(miliseconds < 100){//0 nya satu didepan karena perlu 3 digit
            ms = `0${miliseconds}`;
        }else {
            ms = miliseconds;//sama aja gak perlu tambah 0 karena hanya sampai 3 digit
        }
        if(seconds < 10){//sama kayak milisecond konsepnya cuma sampai 2 digit aja
            s = `0${seconds}`;
        }else{
            s = seconds;
        }
        if(minutes < 10){//sama kayak second
            m = `0${minutes}`;
        }else{
            m = minutes;
        }
        if(hours < 10){//sama kayak minute dan second
            h = `0${hours}`;
        }else{
            h = hours;
        }
        timeDisp.innerHTML = `${h}:${m}:${s}:${ms}`;//di display sesuai format

    }, 11);//looping tiap 11 detik
})

resetBtn.addEventListener('click', () => {
    clearInterval(timer);//clear interval
    timer = null;//dikembalikan ke null biar waktu di start bisa mulai lagi ada conditionalnya diatas
    timeDisp.innerHTML = `00:00:00:000`;//di balikkan sesuai format
    [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0];//di reset waktunya
})

pauseBtn.addEventListener('click', () => {//sama kayak reset cuma tidak perlu dikembalikan karena cuma pause
    clearInterval(timer);
    timer = null;
})

