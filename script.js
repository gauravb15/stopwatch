let timer = false;
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}
function reset(){
    timer = false;
    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}
function stopwatch(){
    if(timer == true){
        count = count + 1;

        if(count == 100){
            sec = sec + 1;
            count = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
        }
        if(min == 60){
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        let hrStr = hr;
        let minStr = min;
        let secStr = sec;
        let countStr = count;

        if(hrStr<10){
            hrStr = "0" + hrStr;
        }
        if(minStr<10){
            minStr = "0" + minStr;
        }
        if(secStr<10){
            secStr = "0" + secStr;
        }
        if(countStr<10){
            countStr = "0" + countStr;
        }

        document.getElementById("hr").innerHTML = hrStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("sec").innerHTML = secStr;
        document.getElementById("count").innerHTML = countStr;
        setTimeout("stopwatch()",10);
    }
    
    
   
    
}