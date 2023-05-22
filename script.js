//your JS code here. If required.
var lname = document.getElementById("text");
lname.innerText = `You are using ${navigator.appName} version ${navigator.appVersion}`
document.body.append(lname);