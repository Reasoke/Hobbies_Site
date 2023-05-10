function SetFontSize(selector, size){
    const el = document.querySelector(selector);
    if(el){
        el.style.fontSize = size;
    }
}

SetFontSize("#fontSizeTest1", "smaller");
SetFontSize("#fontSizeTest2", "25px");
SetFontSize("#fontSizeTest3", "110%");
SetFontSize("#fontSizeTest4", "larger");
SetFontSize("#fontSizeTest5", "x-large");