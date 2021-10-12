const toggler = document.querySelector('.menu__toggler');
const menu = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
})

$(window).scroll(function () {
  if ($(window).scrollTop() > 20) {
    $('#CvBtn1').addClass('none');
    $('#CvBtn2').removeClass('none');
  } else {
    $('#CvBtn1').removeClass('none');
    $('#CvBtn2').addClass('none');
  }
});
