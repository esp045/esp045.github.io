/*달력*/
function showCalendar(y, m) { 
    var text = '<table>\n<tr><td colspan=7 style="text-align:center">';
    text += '<span onclick="showCalendar('+(y-1)+','+m+')"> Y- </span>'; 
    text += '<span onclick="showCalendar('+(m==1?(y-1)+','+12:y+','+(m-1))+')"> M- </span>'; 
    text += '[' + y + '/' + ((m < 10) ? ('0' + m) : m) + ']'; 
    text += '<span onclick="showCalendar('+(m==12?(y+1)+','+1:y+','+(m+1))+')"> M+ </span>'; 
    text += '<span onclick="showCalendar('+(y+1)+','+m+')"> Y+ </span>'; 
    text += '</td>'; 

    var d1 = (y+(y-y%4)/4-(y-y%100)/100+(y-y%400)/400 
          +m*2+(m*5-m*5%9)/9-(m<3?y%4||y%100==0&&y%400?2:3:4))%7; 
    for (i = 0; i < 42; i++) { 
        if (i%7==0) text += '</tr>\n<tr>'; 
        if (i < d1 || i >= d1+(m*9-m*9%8)/8%2+(m==2?y%4||y%100==0&&y%400?28:29:30)) 
            text += '<td> </td>'; 
        else 
            text += '<td' + (i%7 ? '' : ' style="color:red;"') + '>' + (i+1-d1) + '</td>'; 
    } 
    document.getElementById('calendarDiv').innerHTML = text + '</tr>\n</table>'; 
} 

/*시계*/
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i}; // 숫자가 10보다 작을 경우 앞에 0을 붙여줌
    return i;
}
