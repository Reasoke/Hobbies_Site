function SetNewDogPosition(){
    const el = document.querySelector(".block-header_elem-icon_mod-layout");
    if(el){
        el.style.top = getRandomInt(0, window.innerHeight-128) + "px";
        el.style.left = getRandomInt(0, window.innerWidth-128)+ "px";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

setInterval(SetNewDogPosition, 1000);