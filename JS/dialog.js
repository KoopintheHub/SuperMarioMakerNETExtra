/* Dialog parameters:
dialogShow(dlgType, innerHTML)

dlgType = Type of dialog. possible types:
    0: OK
    1: YES  NO
    2: CUSTOM   1
    3. CUSTOM   2
*/

function dialogShow(dlgType, innerHTML,  button1Code, button2Code, button1Text, button2Text) {
    if (document.getElementById('dlgbox').style.display == "none") {
        tbDisable();
        toolbar();
        $('#darken').fadeIn();
        $('#dlgbox').fadeIn();
        if (dlgType == 0) var buttons = '<button id="dlgBtn" onclick="document.getElementById(\'dlgBtn\').disabled = true; exitDialog();" style="width: 100%; height: 40px; position: absolute; bottom: 0px; left: 0px; font-size: 24px">OK</button>';
        else if (dlgType == 1) var buttons = '<button id="dlgBtn" onclick="' + button1Code + '" style="width: 50%; height: 40px; position: absolute; bottom: 0px; left: 0px; font-size: 24px">YES</button><button id="dlgBtn2" onclick="document.getElementById(\'dlgBtn\').disabled = true; document.getElementById(\'dlgBtn2\').disabled = true; exitDialog();" style="width: 50%; height: 40px; position: absolute; bottom: 0px; left: 50%; font-size: 24px">NO</button>';
        else if (dlgType == 2) var buttons = '<button id="dlgBtn" onclick="' + button1Code + '" style="width: 100%; height: 40px; position: absolute; bottom: 0px; left: 0px; font-size: 24px">' + button1Text + '</button>';
        else if (dlgType == 3) var buttons = '<button id="dlgBtn" onclick="' + button1Code + '" style="width: 50%; height: 40px; position: absolute; bottom: 0px; left: 0px; font-size: 24px">' + button1Text + '</button><button id="dlgBtn2" onclick="' + button2Code + '" style="width: 50%; height: 40px; position: absolute; bottom: 0px; left: 50%; font-size: 24px">' + button2Text + '</button>';
        document.getElementById('dlgbox').innerHTML = '<div style="overflow: auto" id="innerdlg">' + innerHTML + '</div>' + buttons;
    }
}

function exitDialog() {
    if (document.getElementById('dlgbox').style.display != "none") {
        tbEnable();
        ok();
        $('#darken').fadeOut();
        $('#dlgbox').fadeOut();
    }
}


