var min = 1440, sec = 0, dse = 0;
var tmp = (min * 60 + sec) * 10 + dse;

var chrono = setInterval(function () {
     min = Math.floor(tmp / 600);
     sec = Math.floor((tmp - min * 600) / 10);
     dse = tmp - ((min * 60) + sec) * 10;
     tmp--;
     $('.timer').text(min + ':' + sec + ':' + dse);
}, 100);