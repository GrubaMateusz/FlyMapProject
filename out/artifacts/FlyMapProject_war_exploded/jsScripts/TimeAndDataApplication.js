function leadingZero(i) {
    return (i < 10)? '0'+i : i;
}

function TimeAndDataApp() {
    const currentDate = new Date();
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const textDate = leadingZero(currentDate.getDate()) + "." + leadingZero((currentDate.getMonth()+1)) + "." + currentDate.getFullYear() + " - " + days[currentDate.getDay()];
    const textTime = leadingZero(currentDate.getHours()) + ":" + leadingZero(currentDate.getMinutes()) + ":" + leadingZero(currentDate.getSeconds());
    document.querySelector('#timeAplication').innerHTML = textTime;
    document.querySelector('#dataAplication').innerHTML = textDate;


    setTimeout(function() {
        TimeAndDataApp()
    }, 1000);
}