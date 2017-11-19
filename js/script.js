// GOOGLE MAP
function initMap() {
  var position = {lat: 48.8797, lng: 2.309};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: position
  });
  var marker = new google.maps.Marker({
    position: position,
    map: map
  });
}


// MULTISLIDER
$('#slider').multislider({
  interval: false,
  slideAll:true
});


// HEADER ANIMATION ON SCROLL
window.onscroll = function headerAnim() {
  if (document.body.scrollTop > 10) {
    console.log(document.documentElement.scrollTop); 
    document.getElementById('header').style.backgroundColor = "#30415D";
    document.getElementById('header').style.opacity = .89; 
  } else {
    if (document.body.clientWidth > 875) {
      document.getElementById('header').style.backgroundColor = "transparent";
    }
  }
}

// SMOOTHSCROLL
$(document).ready(function () {
  $(document).on("scroll", activeLink);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
    menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", activeLink);
    });
  });
});

// ACTIVE NAV LINK
function activeLink(event){
  var scrollPos = $(document).scrollTop();
  $('#nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 150 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#nav ul li a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}


// RESPONSIVE FILMS SECTION
$(window).resize(function() {
  if (document.documentElement.clientWidth < 750) {
    document.querySelector('#MS-content').classList.remove('MS-content'); 
  } else if (!document.querySelector('#MS-content').classList.contains('MS-content')) {
    document.querySelector('#MS-content').classList.add('MS-content');
  }
});

// RESPONSIVE NAV 

$(window).resize(function() {
  if (document.documentElement.clientWidth > 875) {
    document.querySelector('#responsiveNav').classList.add('hidden');
    document.querySelector('#responsiveNav').classList.remove('responsiveNav'); 
  }
}); 

function responsiveNav() {
  var nav = document.querySelector('#responsiveNav'); 
  if (nav.classList.contains('hidden')) {
    nav.classList.remove('hidden');
    nav.classList.add('responsiveNav'); 
  } else {
    nav.classList.add('hidden'); 
    nav.classList.remove('responsiveNav'); 
  }
}

