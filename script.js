var blockDay = document.getElementById('day');
var blockHours = document.getElementById('hours');
var blockMinutes = document.getElementById('minutes');
var blockSeconds = document.getElementById('seconds');

function mostraHora(){
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var seconds = data.getSeconds();

    if (hours < 10){
        hours = '0' + hours;
    }
    if (minutes < 10){
        minutes = '0' + minutes;
    }
    if (seconds < 10){
        seconds = '0' + seconds;
    }

    blockHours.innerHTML = hours;
    blockMinutes.innerHTML = minutes;
    blockSeconds.innerHTML = seconds;
}

function diaSemana(){
    var data = new Date();
    var diaSem = data.getDay();

    if (diaSem == 0){
        blockDay.classList.add("weekend");
    }
    if (diaSem == 6){
        blockDay.classList.add("weekend");
    }

    
    switch(diaSem){
        case 0:
            diaSem = 'SUN';
            break;
        case 1:
            diaSem = 'MON';
            break;
        case 2:
            diaSem = 'TUE';
            break;
        case 3:
            diaSem = 'WED';
            break;
        case 4:
            diaSem = 'THU';
            break;
        case 5:
            diaSem = 'FRI';
            break;
        case 6:
            diaSem = 'SAT';
            break;
    }

    blockDay.innerHTML = diaSem;
}

setInterval('mostraHora()', 1000);
diaSemana();