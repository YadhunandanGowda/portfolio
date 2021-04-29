
document.addEventListener("DOMContentLoaded", function(event) {
//    document.querySelectorAll("section.common-height").forEach(function(x,i) {
//        console.log(x.style.height)
//        x.style.height = (window.outerHeight - 180)+ "px";
//    });
   
   AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});
    // document.querySelectorAll("section.common-height").style.height = event.
});

function toggleTheme($this) {
    if(!$this.checked){
        document.querySelectorAll("body")[0].classList.toggle("dayMode");
    }else {
        document.querySelectorAll("body")[0].classList.toggle("dayMode");
    }
}