var button = document.getElementById('button');
button.addEventListener("click", function () {
    alert("The button is pressed.");
});
var card = document.getElementById('card');
card.addEventListener("mouseover", function () {
    var element = document.getElementById("Action");
    element.style.visibility = "visible";
});
card.addEventListener("mouseout", function () {
    var element = document.getElementById("Action");
    element.style.visibility = "hidden";
});
