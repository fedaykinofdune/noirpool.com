

/*! Fades out the whole page when clicking links */
$('a.fade').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('body').fadeOut(100, newpage);
});
function newpage() {
window.location = newLocation;
}


$(document).ready (function () {

  $("body").css("display", "none");
  $("body").fadeIn(400); // 2000 = 2 seconds, you could also specify 'slow', 'medium', or 'fast'
  
//  var stickyTop = $('.sticky').offset().top; // returns number
//  
//   $(window).scroll(function(){ // scroll event 
//  
//     var windowTop = $(window).scrollTop(); // returns number
//  
//     if (stickyTop < windowTop + 100) {
//       $('.sticky').css({ display: 'block' , position: 'fixed', top: 0, width: '100%', background: '#FFF'});
//  	   $('.sticky-logo').css({ display: 'block', });
//  	   
//  		
//     }
//     else {
//       $('.sticky').css({ position:'static' , background: 'white' , width: '100%' , });
//       $('.sticky-logo').css({ display: 'none' });      
//     }
//  
//   });
//   

});



/*! Reloads page on every visit */
function Reload() {
try {
var headElement = document.getElementsByTagName("head")[0];
if (headElement && headElement.innerHTML)
headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
}
catch (e) {}
}


/*! Reloads on every visit in mobile safari */
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
window.onpageshow = function(evt) {
if (evt.persisted) {
document.body.style.display = "none";
location.reload();
}
};
}