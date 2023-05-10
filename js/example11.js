function SetNewTimer(){
    const el = document.querySelector("#timer");
    if(currentTime == 0){
      window.close();
    }
    else{
        el.innerHTML = "До закрытия страицы отслось " + currentTime + " sec";
        currentTime --;
    }
        
}
let currentTime = 10;
const timer = setInterval(SetNewTimer, 1000);