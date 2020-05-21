const replaceall = (str, rep1, rep2) => {
    return str.split(rep1).join(rep2)
};
let v; let k = window.location.href.includes("?");
let data;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: 'numeric'}) 
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(new Date(data.year, data.month, data.day))
    if (k) {
        document.getElementById("comicno").innerHTML = "Current comic: " + data.num + ", " + data.safe_title + "<br>Published on " + `${day} ${month} ${year}` + "<br>Link: <a href='https://xkcd.com/" + window.location.href.split("?v=")[1] + "'>xkcd</a>"
    } else {
        document.getElementById("comicno").innerHTML = "Latest comic: " + data.num + ", " + data.safe_title + "<br>Published on " + `${day} ${month} ${year}` + "<br>Link: <a href='https://xkcd.com'>xkcd</a>";
    }
  } else {
    document.getElementById("comicno").innerHTML = "Comic could not be fetched."
  }
};
if (k) {
    v = window.location.href.split("?v=")[1];
    v = "https://cors-anywhere.herokuapp.com/https://xkcd.com/"+v+"/info.0.json";
} else {
    v = "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json";
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