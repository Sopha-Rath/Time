var timer = ()  => {
    let time = new Date();
    let hours = (time.getHours() % 12).toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds
    }
    let result = document.querySelector('h1');
    if (time.getHours() < 12) {
        result.textContent = hours + " : " + minutes + " : " + seconds + " AM";
    }else {
        result.textContent = hours + " : " + minutes + " : " + seconds + " PM";
    }
    if (time.getHours() === 12) {
        result.textContent = time.getHours() + " : " + minutes + " : " + seconds + " PM";
    }
}
setInterval(timer,1000);