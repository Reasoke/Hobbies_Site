function DeleteParagraph(){
    const items = document.getElementsByTagName("p");

    if(items.length != 0){
        items[0].remove();
    }
    else{
        clearInterval(timer);
    }
}

const timer = setInterval(DeleteParagraph, 1000);