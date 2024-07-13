const duration=document.getElementById("watchduration");

const start=document.getElementById("start");
const stop=document.getElementById("stop");
const lap=document.getElementById("lap");
const reset=document.getElementById("reset");

const laps=document.getElementById("laps");

let hrs=0;
let min=0;
let sec=0;
let ms=0;

let timeinterval;


start.onclick=()=>{

    timeinterval=setInterval(()=>{

        ms++;

        if(ms==100){
            ms=0;
            sec++;
        }

        if(sec==60){
            sec=0;
            min++;
        }

        if(min==60){
            min=0;
            hrs++;
        }

        duration.innerHTML=`${zeropad(hrs)}:${zeropad(min)}:${zeropad(sec)}:${zeropad(ms)}`;
        
    },10);

    start.setAttribute("style","display:none");
    stop.setAttribute("style","display:block");
    stop.style.backgroundColor="red";
    laps.setAttribute("style","display:block")
    lap.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    lap.removeAttribute("disabled");
    
};

const zeropad=(num)=>{
    return String(num).padStart(2,"0");
}


stop.onclick=()=>{

    clearInterval(timeinterval);
    start.setAttribute("style","display:block");
    start.style.backgroundColor="rgb(10, 160, 143)";
    stop.setAttribute("style","display:none");
    start.innerHTML="resume";
    lap.setAttribute("style","display:none");
    reset.setAttribute("style","display:block");

}

let count=0;

lap.onclick=()=>{

    count++;
    let li=document.createElement("li");
    li.innerHTML=`${'#'+count}-${zeropad(hrs)}:${zeropad(min)}:${zeropad(sec)}:${zeropad(ms)}`;
    laps.appendChild(li);
    laps.scroll({top:laps.scrollHeight,behavior:"smooth"})
    
}

reset.onclick=()=>{
    hrs=min=sec=ms=0;
    laps.innerHTML="";
    clearInterval(timeinterval);
    start.setAttribute("style","display:block");
    reset.setAttribute("style","display:none");
    start.innerHTML="start";
    lap.setAttribute("style","display:block");
    duration.innerHTML="00:00:00:00";
    laps.setAttribute("style","display:none")
}


