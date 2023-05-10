const items = document.getElementsByTagName("p");

for (const item of items) {
    var style = window.getComputedStyle(item, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style); 
    item.setAttribute("style", "font-size:" + (fontSize + 15) + 'px;');
}