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


$('#slider').multislider({
    interval: false,
    slideAll:true
});

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById('header').style.backgroundColor = "#30415D";
    document.getElementById('header').style.opacity = .89; 
  } else {
    document.getElementById('header').style.backgroundColor = "transparent";
  }
}

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
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
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    console.log('scrollPos' + scrollPos); 
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        console.log(refElement.position().top); 
        if (refElement.position().top - 150 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}