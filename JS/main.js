function init() {
    /*if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) body.innerHTML = "<center><h1>Damn</h1>\n<p>You're running this on phone. This is not phone compatible :(</p></center>"; else {
        // planning for other init code...
    };*/
    document.addEventListener('contextmenu', event => event.preventDefault());

    $('img').on('dragstart', function(event) { 
        event.preventDefault(); 
    });

    console.log("You can do some debug stuff to the proto :D");

    if (getCookie("theme")) loadThemeCookie();
}

const sleepm = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const sleep = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

function ok() {
    var snd = new Audio('./SND/ok.wav');
    snd.play();
}

function toolbar() {
    var snd = new Audio('./SND/toolbar.wav');
    snd.play();
}

async function switchTitleMenu(menu) {
    if (menu < 0 || menu > 2) {
        console.error('bad menu type.');
        return;
    }else {
        $('#buttonlist').fadeOut();
        $('#buttonlist2').fadeOut();
        $('#buttonlist3').fadeOut();
        await sleep(1);
        if (menu == 0) $('#buttonlist').fadeIn();
        if (menu == 1) $('#buttonlist2').fadeIn();
        if (menu == 2) $('#buttonlist3').fadeIn();
        tbEnable();
    }
}

function tbDisable() {
    document.getElementById('titleBtn1').disabled = true;
    document.getElementById('titleBtn2').disabled = true;
    document.getElementById('titleBtn3').disabled = true;
    document.getElementById('titleBtn4').disabled = true;
    document.getElementById('titleBtn5').disabled = true;
    document.getElementById('titleBtn6').disabled = true;
    document.getElementById('titleBtn7').disabled = true;
    document.getElementById('titleBtn8').disabled = true;
    document.getElementById('titleBtn9').disabled = true;
    document.getElementById('titleBtn10').disabled = true;
    document.getElementById('titleBtn11').disabled = true;
    document.getElementById('titleBtn12').disabled = true;
}

function tbEnable() {
    document.getElementById('titleBtn1').disabled = false;
    document.getElementById('titleBtn2').disabled = false;
    document.getElementById('titleBtn3').disabled = false;
    document.getElementById('titleBtn4').disabled = false;
    document.getElementById('titleBtn5').disabled = false;
    document.getElementById('titleBtn6').disabled = false;
    document.getElementById('titleBtn7').disabled = false;
    document.getElementById('titleBtn8').disabled = false;
    document.getElementById('titleBtn9').disabled = false;
    document.getElementById('titleBtn10').disabled = false;
    document.getElementById('titleBtn11').disabled = false;
    document.getElementById('titleBtn12').disabled = false;
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
         while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


