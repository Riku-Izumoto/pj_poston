var slideConts = document.querySelectorAll('.slideConts');
var slideContsRect = [];
var slideContsTop = [];
var windowY = window.pageYOffset;
var windowH = window.innerHeight;
var remainder = 100;

for (var i = 0; i < slideConts.length; i++) {
  slideContsRect.push(slideConts[i].getBoundingClientRect());
}
for (var i = 0; i < slideContsRect.length; i++) {
  slideContsTop.push(slideContsRect[i].top + windowY);
}
window.addEventListener('resize', function () {
  windowH = window.innerHeight;
});
window.addEventListener('scroll', function () {
  windowY = window.pageYOffset;

  for (var i = 0; i < slideConts.length; i++) {
    if (windowY > slideContsTop[i] - windowH + remainder) {
      slideConts[i].classList.add('show');
    } else {
      slideConts[i].classList.remove('show');
    }
  }
});


$(window).on('load', function () {
  $(".block").addClass("active");
});
