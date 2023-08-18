

setInterval(function() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var minuteHandle = document.getElementById("min");
    var secondHandle = document.getElementById("sec");
    var hourHandle = document.getElementById("hour");
    hourHandle.style.transform = `rotate(${-90+hour/24*360}deg)`;
    minuteHandle.style.transform= `rotate(${-90+minute/60*360}deg)`;
    secondHandle.style.transform= `rotate(${-90+second/60*360}deg)`;
    console.log(hour, minute, second);
}, 1000)
