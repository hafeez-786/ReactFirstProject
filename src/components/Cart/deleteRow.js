function deleteRow() {
  var x = document.getElementById("entireRow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}