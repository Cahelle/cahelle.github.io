let contentNumber = 1;

function previousContent() {
    contentNumber--;
    getContent();
}

function nextContent() {
    contentNumber++;
    getContent();
}

function getContent() {
    switch (contentNumber) {
        case 0:
            document.getElementById("content-0").style.display = "block";
            document.getElementById("content-1").style.display = "none";
            document.getElementById("content-2").style.display = "none";
            document.getElementById('upnav-icon').style.visibility = "hidden";
            document.getElementById('upnav-text').style.visibility = "hidden";
            document.getElementById('downnav-icon').style.visibility = "visible";
            document.getElementById('downnav-text').style.visibility = "visible";
            break;

        case 1:
            document.getElementById("content-0").style.display = "none";
            document.getElementById("content-1").style.display = "block";
            document.getElementById("content-2").style.display = "none";
            document.getElementById('upnav-icon').style.visibility = "visible";
            document.getElementById('upnav-text').style.visibility = "visible";
            document.getElementById('downnav-icon').style.visibility = "visible";
            document.getElementById('downnav-text').style.visibility = "visible";
            break;

        case 2:
            document.getElementById("content-0").style.display = "none";
            document.getElementById("content-1").style.display = "none";
            document.getElementById("content-2").style.display = "block";
            document.getElementById('upnav-icon').style.visibility = "visible";
            document.getElementById('upnav-text').style.visibility = "visible";
            document.getElementById('downnav-icon').style.visibility = "hidden";
            document.getElementById('downnav-text').style.visibility = "hidden";
            break;

        default:
            break;
    }
}