function SetNewTime(){
    const el = document.querySelector("#clock");
    if(el){
        const time = new Date();
        const timeStr = time.toLocaleTimeString();
        el.innerHTML = timeStr;
    }
    else{
        clearInterval(timer);
    }
}


const timer = setInterval(SetNewTime, 1000);