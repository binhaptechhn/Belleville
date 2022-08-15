(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 700,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(500).css({'overflow':'visible'});
  })
  // set and cache variables
		var w, container, carousel, item, radius, itemLength, rY, ticker, fps; 
		var mouseX = 0;
		var mouseY = 0;
		var mouseZ = 0;
		var addX = 0;
		
		
		// fps counter created by: https://gist.github.com/sharkbrainguy/1156092,
		// no need to create my own :)
		var fps_counter = {
			
			tick: function () 
			{
				// this has to clone the array every tick so that
				// separate instances won't share state 
				this.times = this.times.concat(+new Date());
				var seconds, times = this.times;
        
				if (times.length > this.span + 1) 
				{
					times.shift(); // ditch the oldest time
					seconds = (times[times.length - 1] - times[0]) / 1000;
					return Math.round(this.span / seconds);
				} 
				else return null;
			},
 
			times: [],
			span: 20
		};
		var counter = Object.create(fps_counter);
		
		
		
		function animateIn( $item, $block )
		{
			var $nrX = 360 * getRandomInt(2);
			var $nrY = 360 * getRandomInt(2);
				
			var $nx = -(2000) + getRandomInt( 4000 )
			var $ny = -(2000) + getRandomInt( 4000 )
			var $nz = -4000 +  getRandomInt( 4000 )
				
			var $s = 1.5 + (getRandomInt( 10 ) * .1)
			var $d = 1 - (getRandomInt( 8 ) * .1)
			
			TweenMax.set( $item, { autoAlpha:1, delay:$d } )	
			TweenMax.set( $block, { z:$nz, rotationY:$nrY, rotationX:$nrX, x:$nx, y:$ny, autoAlpha:0} )
			TweenMax.to( $block, $s, { delay:$d, rotationY:0, rotationX:0, z:0,  ease:Expo.easeInOut} )
			TweenMax.to( $block, $s-.5, { delay:$d, x:0, y:0, autoAlpha:1, ease:Expo.easeInOut} )
		}
		
		function onMouseMove(event)
		{
			mouseX = -(-(window.innerWidth * .5) + event.pageX) * .0025;
			mouseY = -(-(window.innerHeight * .5) + event.pageY ) * .01;
			mouseZ = -(radius) - (Math.abs(-(window.innerHeight * .5) + event.pageY ) - 200);
		}
		
		// loops and sets the carousel 3d properties
		function looper()
		{
			addX += mouseX
			TweenMax.to( carousel, 1, { rotationY:addX, rotationX:mouseY, ease:Quint.easeOut } )
			TweenMax.set( carousel, {z:mouseZ } )
			fps.text( 'Framerate: ' + counter.tick() + '/60 FPS' )	
		}
		
		function getRandomInt( $n )
		{
			return Math.floor((Math.random()*$n)+1);	
		}
        $('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 2; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});
jQuery(document).ready(function($) {
    "use strict";
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 3000,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});
var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
 
    document.getElementById("hvn").innerHTML = dateTime;
(function(){
 
  $('dd').filter(':nth-child(n+4)').addClass('hide');

  $('dl').on('click', 'dt', function() {
      $(this).next().slideToggle(200);
    });
  
 })();
 $(document).ready(function(){
	$("img").click(function(){
	var t = $(this).attr("src");
	$(".modal-body").html("<img src='"+t+"' class='modal-img'>");
	$("#myModal").modal();
  });
  
  $("video").click(function(){
	var v = $("video > source");
	var t = v.attr("src");
	$(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
	$("#myModal").modal();  
  });
  });

  function detail_1() {
    var id = document.getElementById("reseach_Northwest_Patents");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_2() {
    var id = document.getElementById("reseach_Northwest_Patents2");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_3() {
    var id = document.getElementById("reseach_Northwest_Patents3");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_4() {
    var id = document.getElementById("reseach_Northwest_Patents4");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_5() {
    var id = document.getElementById("reseach_Northwest_Patents5");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_6() {
    var id = document.getElementById("reseach_Northwest_Patents6");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_7() {
    var id = document.getElementById("reseach_Northwest_Patents7");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function detail_8() {
    var id = document.getElementById("reseach_Northwest_Patents8");
    var allclass = id.classList;
    for (i = 0; i < allclass.length; i++) {
        if (allclass[i].includes("hiddenContent")) {
            allclass.remove("hiddenContent");
            allclass.add("showContent");
        }else if(allclass[i].includes("showContent")){
            allclass.remove("showContent");
            allclass.add("hiddenContent");
        }
    }
};
function hide() {
    var hideContent = document.getElementById("toc_list");
    var contentChange = document.getElementById("button_hide")
    if (hideContent.style.display == "block") {
        hideContent.style.display = "none";
        contentChange.innerText = "[show]"
    } else {
        hideContent.style.display = "block";
        contentChange.innerText = "[hide]"
    }
}
$(document).ready(function() {

    var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');
      
    
    $("#search-text").keyup(function () {
       //$(this).addClass('hidden');
    
      var searchTerm = $("#search-text").val();
      var listItem = $('#list').children('li');
    
      
      var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
      
        //extends :contains to be case insensitive
    $.extend($.expr[':'], {
    'containsi': function(elem, i, match, array)
    {
      return (elem.textContent || elem.innerText || '').toLowerCase()
      .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
      
      
      $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
        $(this).addClass('hiding out').removeClass('in');
        setTimeout(function() {
            $('.out').addClass('hidden');
          }, 300);
      });
      
      $("#list li:containsi('" + searchSplit + "')").each(function(e) {
        $(this).removeClass('hidden out').addClass('in');
        setTimeout(function() {
            $('.in').removeClass('hiding');
          }, 1);
      });
      
    
        var jobCount = $('#list .in').length;
      $('.list-count').text(jobCount + ' items');
      
      //shows empty state text when no jobs found
      if(jobCount == '0') {
        $('#list').addClass('empty');
      }
      else {
        $('#list').removeClass('empty');
      }
      
    });

                      
  });
  var simpleValidation = function(){

    var validateForm = $('form.validate-form');
  
    // Gets all forms to Validate
    validateForm.each(function(){
      // Defining basic variables, bro
      var validateForm = $(this);
      var validate = {};
      var validateThis = $(this).find('.validate');
      var validatingLength = $(this).find('.validate').length;
      var submitBtn = $(this).find('.submit');
  
      // For Loop Getting Elements to Validate
      for(var i = 1; i <= validatingLength; i++){
        // Adding Inputs to object, false for default
        validate['input'+i] = false;
      }
  
      $('.validate').blur(function(){
        var index =  $(this).prevAll().length+1;
        var validateThisVal = $(this).val();
        var validateThisType = $(this).attr('type');
  
        // Checks if input type is email
        if(validateThisType === "email"){
  
          // Email regex
          var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          // Condition to see if Email exists
          if(!validateThisVal.match(re)){
            $(this).addClass('not-valid');
            $(this).removeClass('is-valid');
            return validate['input'+index] = false;
          } else{
            $(this).addClass('is-valid');
            $(this).removeClass('not-valid');
            return validate['input'+index] = true;
          }
        } else{
          // Makes sure input is filled out
          if(validateThisVal == ""){
            $(this).addClass('not-valid');
            $(this).removeClass('is-valid');
            return validate['input'+index] = false;
          } else{
            $(this).addClass('is-valid');
            $(this).removeClass('not-valid');
            return validate['input'+index] = true;
          }
        }
      });
  
  
      validateForm.submit(function(event){
        // Prevents Default
        event.preventDefault();
  
        // Logging form errors
        var falseCtn = 0;
        for(var i = 1; i <= validatingLength; i++){
          if(validate['input'+i] == false){
            falseCtn++;
          }
        }
  
        // Checking if any falses exist
        if(falseCtn > 0){
          $(this).unbind('submit').submit();
          $(this).click();
        } else{
        }
      });
  
    });
  
  };
  
  simpleValidation()
  function myFunction() {
    alert("Order Success!");
  }
// *search