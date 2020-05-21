const replaceall = (str, rep1, rep2) => {
    return str.split(rep1).join(rep2)
};
let v; let k = window.location.href.includes("?");
let data;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    data = myObj;
  }
};
if (k) {
    v = window.location.href.split("?v=")[1];
    v = "https://xkcd.com/"+v+"/info.0.json";
} else {
    v = "https://xkcd.com/info.0.json";
}
xmlhttp.open("GET", v, true);
xmlhttp.send();
console.log(data);
if (data) {
    if (k) {
        document.getElementById("comicno").innerHTML = "Current comic: " + data.num;
    } else {
        document.getElementById("comicno").innerHTML = "Latest comic: " + data.num;
    }
}