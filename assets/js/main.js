var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    document.getElementById("demo").innerHTML = myArr.he;
  }
};
xmlhttp.open("GET", "https://www.sefaria.org/api/texts/Psalms_150", true);
xmlhttp.send();