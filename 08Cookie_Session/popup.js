function createCookie() {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    document.cookie = 'MainPopup=val; path=/; expires=' + date.toUTCString();

}

function getCookie() {
    var arr = document.cookie.split("; ");
    for (var i of arr) {
        if (i.split('=')[0] == 'MainPopup') return true;
    }
}