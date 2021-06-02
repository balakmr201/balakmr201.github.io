
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
window.onload = function() {
    var elements = document.getElementsByClassName('typewriter');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-technology');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
}
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
//
var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewriter > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);

  function openMenu(x){
    x.classList.toggle("change");
    var menu = document.getElementById("menuIconList")
    if(menu.style.display == "")
    menu.style.display = "flex"
    else
    menu.style.display = ""
  }