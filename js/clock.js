function clock()
{
    let twoDigit = function(num){
        let digit
        if( num < 10 ){
            digit = "0" + num;
        }else{
            digit = num;
        }
        return digit;
    }
    let weeks = new Array("日","月","火","水","木","金","土");

    let now = new Date();

    let year = now.getFullYear();
    let month = twoDigit(now.getMonth() + 1)
    let day = twoDigit(now.getDate());
    let week = weeks[now.getDay()];
    let hour = twoDigit(now.getHours());
    let minute = twoDigit(now.getMinutes());
    let second = twoDigit(now.getSeconds());


document.getElementById("clock_date").textContent =  "今日は" + year + "年" + month + "月" + day + "日(" + week + ")です";
document.getElementById("clock_time").textContent = hour + ":" + minute + ":" + second;

}
setInterval(clock, 1000);