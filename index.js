
function changeClass(){
    if(window.location.href.includes("index.html")){
        document.getElementById("menu-home").classList.add("active")
    }
}
$.get("navbar.html", function (data) {
    $("#navbar").replaceWith(data);
});
$.get("footer.html", function (data) {
    $("#footer").replaceWith(data);
});