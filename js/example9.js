function SetCalendar(){
    let html = "<table><thead><tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th></tr></thead><tdody>";
    for(let i =1; i<= 31; i++){
        html += "<th>"+i+"</th>";
        if(i%7 == 0){
            html += "</tr><tr>";
        }
    }
    html += "</tr></tdody></table>";

    const el = document.querySelector("#calendar");
    if (el) {
        el.innerHTML = html;
    }
}

SetCalendar();