const hora = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const relogio = setInterval((time) => {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;


    hora.innerHTML = hr;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;

});