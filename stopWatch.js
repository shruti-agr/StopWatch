window.addEventListener('load' , init);
//alert("SDf");
var oStart = document.getElementById('start');
var oStop = document.getElementById('stop');
var oReset = document.getElementById('reset');
var Interval;
var sec = document.getElementById('sec');
var milsec = document.getElementById('milsec');
var t1 = 00, t2 = 00;
function init()
{
    oStart.addEventListener('click' , startTimer);
    oStop.addEventListener('click' , stopTimer);
    oReset.addEventListener('click' , resetTimer);
    
}

function startTimer(){
    clearInterval(Interval);
    Interval = setInterval(start , 10);
}

function stopTimer(){
    clearInterval(Interval);
}

function resetTimer(){
    clearInterval(Interval);
    sec.innerHTML = "00";
    milsec.innerHTML = "00";
}

function start(){
    
    t2++;
    if(t2 < 9){
        milsec.innerHTML =  t2;
    }
    if(t2>9){
        milsec.innerHTML = t2;
    }

    if(t2>99){
        t1++;
        sec.innerHTML = "0" + t1;
        t2 = 0;
        milsec.innerHTML = "0" + 0;
    }

    if(t1>9){
        sec.innerHTML= t1;
    }
}
