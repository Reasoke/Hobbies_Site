function loadFile(filePath, elementName) {
    var request = new XMLHttpRequest();
    request.open("GET", filePath, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200)
            document.getElementById(elementName).innerHTML = request.responseText;
    }
    request.send(null);
}

loadFile("/components/header.html", "header");
loadFile("/components/footer.html", "footer");