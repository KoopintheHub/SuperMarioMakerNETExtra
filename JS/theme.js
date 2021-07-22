var currectThemeId = -1;
var savedCookieTheme;

function restoreToOriginalTheme() {
    currectThemeId = -1;
    document.getElementById('themePage').innerHTML = "body { background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 5%, rgba(255, 167, 0, 1) 100%); } #dlgbox { background: radial-gradient(circle, rgb(250, 255, 201) 10%, rgb(255, 207, 119) 40%, rgb(255, 182, 46) 90%); border: 3px solid #52490b; } button { background: radial-gradient(circle, rgb(250, 255, 201) 30%, rgba(255, 167, 0, 1) 100%); border: 1px solid black; color: black; }.titleBtn { box-shadow: 3px 3px 8px black; -moz-box-shadow: 3px 3px 8px black; -webkit-box-shadow: 3px 3px 8px black; -khtml-box-shadow: 3px 3px 8px black; }button:hover { background: radial-gradient(circle, rgb(201, 255, 252) 30%, rgb(0, 217, 255) 100%); border: 1px solid blue; color: blue; }.titleBtn:hover { box-shadow: 3px 3px 8px cyan; -moz-box-shadow: 3px 3px 8px cyan; -webkit-box-shadow: 3px 3px 8px cyan; -khtml-box-shadow: 3px 3px 8px cyan; }.titleBtn:active { box-shadow: 0px 0px 0px rgb(90, 90, 90); -moz-box-shadow: 0px 0px 0px rgb(90, 90, 90); -webkit-box-shadow: 0px 0px 0px rgb(90, 90, 90); -khtml-box-shadow: 0px 0px 0px rgb(90, 90, 90); }button:active { background: radial-gradient(circle, rgb(255, 255, 255) 30%, rgb(182, 182, 182) 100%); border: 1px solid white; color: #5a5a5a; }";
    saveThemeToCookies();
}

function loadThemeCookie() {
    savedCookieTheme = $.cookie("CookieTheme");
    if (savedCookieTheme = -1) restoreToOriginalTheme(); else changeTheme(savedCookieTheme);
}

function changeTheme(themeid) {
    currectThemeId = themeid;
    if (themeid == 0) document.getElementById('themePage').innerHTML = "body { background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 5%, rgb(255, 0, 0) 100%); } #dlgbox { background: radial-gradient(circle, rgb(255, 201, 201) 10%, rgb(255, 119, 119) 40%, rgb(255, 46, 46) 90%); border: 3px solid #520b0b; } button { background: radial-gradient(circle, rgb(255, 201, 201) 30%, rgb(255, 0, 0) 100%); border: 1px solid black; color: black; }.titleBtn { box-shadow: 3px 3px 8px black; -moz-box-shadow: 3px 3px 8px black; -webkit-box-shadow: 3px 3px 8px black; -khtml-box-shadow: 3px 3px 8px black; }button:hover { background: radial-gradient(circle, rgb(201, 255, 252) 30%, rgb(0, 217, 255) 100%); border: 1px solid blue; color: blue; }.titleBtn:hover { box-shadow: 3px 3px 8px cyan; -moz-box-shadow: 3px 3px 8px cyan; -webkit-box-shadow: 3px 3px 8px cyan; -khtml-box-shadow: 3px 3px 8px cyan; }.titleBtn:active { box-shadow: 0px 0px 0px rgb(90, 90, 90); -moz-box-shadow: 0px 0px 0px rgb(90, 90, 90); -webkit-box-shadow: 0px 0px 0px rgb(90, 90, 90); -khtml-box-shadow: 0px 0px 0px rgb(90, 90, 90); }button:active { background: radial-gradient(circle, rgb(255, 255, 255) 30%, rgb(182, 182, 182) 100%); border: 1px solid white; color: #5a5a5a; }";
    if (themeid == 1) document.getElementById('themePage').innerHTML = "body { background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 5%, rgb(0, 119, 255) 100%); } #dlgbox { background: radial-gradient(circle, rgb(201, 235, 255) 10%, rgb(119, 178, 255) 40%, rgb(46, 143, 255) 90%); border: 3px solid rgb(11, 50, 82); } button { background: radial-gradient(circle, rgb(201, 220, 255) 30%, rgb(0, 132, 255) 100%); border: 1px solid black; color: black; }.titleBtn { box-shadow: 3px 3px 8px black; -moz-box-shadow: 3px 3px 8px black; -webkit-box-shadow: 3px 3px 8px black; -khtml-box-shadow: 3px 3px 8px black; }button:hover { background: radial-gradient(circle, rgb(201, 255, 252) 30%, rgb(0, 217, 255) 100%); border: 1px solid blue; color: blue; }.titleBtn:hover { box-shadow: 3px 3px 8px cyan; -moz-box-shadow: 3px 3px 8px cyan; -webkit-box-shadow: 3px 3px 8px cyan; -khtml-box-shadow: 3px 3px 8px cyan; }.titleBtn:active { box-shadow: 0px 0px 0px rgb(90, 90, 90); -moz-box-shadow: 0px 0px 0px rgb(90, 90, 90); -webkit-box-shadow: 0px 0px 0px rgb(90, 90, 90); -khtml-box-shadow: 0px 0px 0px rgb(90, 90, 90); }button:active { background: radial-gradient(circle, rgb(255, 255, 255) 30%, rgb(182, 182, 182) 100%); border: 1px solid white; color: #5a5a5a; }";
    saveThemeToCookies();
}

function saveThemeToCookies() {
    $.cookie("CookieTheme", currectThemeId);
}


