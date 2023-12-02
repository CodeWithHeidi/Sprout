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
    
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
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


    // Countdown Timer
    function countDownTimer() {	
        var endTime = new Date("31 December 2023 10:00:00 GMT+00:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (days < "10") {
            days = "0" + days;
        }
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#cdt-days").html(days + "<span>-Days-</span>");
        $("#cdt-hours").html(hours + "<span>-Hours-</span>");
        $("#cdt-minutes").html(minutes + "<span>-Mins-</span>");
        $("#cdt-seconds").html(seconds + "<span>-Secs-</span>");

    }

    setInterval(function () {
        countDownTimer();
    }, 1000);


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    
})(jQuery);

window.onload = function () { 
    let slides =  
        document.getElementsByClassName('carousel-item'); 
  
    function addActive(slide) { 
        slide.classList.add('active'); 
    } 
  
    function removeActive(slide) { 
        slide.classList.remove('active'); 
    } 
  
    addActive(slides[0]); 
    setInterval(function () { 
        for (let i = 0; i < slides.length; i++) { 
            if (i + 1 == slides.length) { 
                addActive(slides[0]); 
                setTimeout(removeActive, 350, slides[i]); 
                break; 
            } 
            if (slides[i].classList.contains('active')) { 
                setTimeout(removeActive, 350, slides[i]); 
                addActive(slides[i + 1]); 
                break; 
            } 
        } 
    }, 1500); 
};
$(document).ready(function() {
    $('#thumbsUpButton').click(function() {
      $(this).toggleClass('btn-outline-primary btn-success thumbs');
    });
  });


// Reusable Color Menu Function
function generateColorMenu(containerId) {
    const colors = [
        { name: 'Black', color: '#000000' },
        { name: 'Blonde', color: '#e5e500' },
        { name: 'Brown', color: '#8B4513' },
        { name: 'Light Brown', color: '#D2B48C' },
        { name: 'Red', color: '#FF0000' },
        { name: 'Orange', color: '#FFA500' },
        { name: 'Yellow', color: '#FFFF00' },
        { name: 'Green', color: '#008000' },
        { name: 'Blue', color: '#0000FF' },
        { name: 'Purple', color: '#800080' },
    ];

    const container = document.getElementById(containerId);

    // Create a wrapper div with Bootstrap flex classes
    const wrapper = document.createElement('div');
    wrapper.classList.add('d-flex', 'justify-content-center', 'align-items-center');

    // Create the color menu button with dropdown
    const colorDropdown = document.createElement('div');
    colorDropdown.classList.add('dropdown');

    const colorButton = document.createElement('button');
    colorButton.classList.add('btn', 'btn-outline-primary', 'px-3', 'dropdown-toggle');
    colorButton.type = 'button';
    colorButton.setAttribute('data-bs-toggle', 'dropdown');
    colorButton.innerText = 'Color';

    const colorMenu = document.createElement('ul');
    colorMenu.classList.add('dropdown-menu');

    colors.forEach(color => {
        const colorItem = document.createElement('li');
        const colorLink = document.createElement('a');
        colorLink.classList.add('dropdown-item');
        colorLink.href = '#';

        // Add a colored icon to the left of the text
        const icon = document.createElement('span');
        icon.style.width = '12px';
        icon.style.height = '12px';
        icon.style.borderRadius = '50%';
        icon.style.display = 'inline-block';
        icon.style.marginRight = '8px';
        icon.style.backgroundColor = color.color;

        colorLink.appendChild(icon);
        colorLink.innerHTML += color.name;

        colorItem.appendChild(colorLink);
        colorMenu.appendChild(colorItem);
    });

    colorDropdown.appendChild(colorButton);
    colorDropdown.appendChild(colorMenu);

    // Append the color menu with dropdown to the wrapper
    wrapper.appendChild(colorDropdown);

    // Append the wrapper to the container
    container.appendChild(wrapper);
}

// Append the color menu with dropdown to the containers with unique IDs
generateColorMenu('colorMenuContainer1');
generateColorMenu('colorMenuContainer2');
generateColorMenu('colorMenuContainer3');
generateColorMenu('colorMenuContainer4');
generateColorMenu('colorMenuContainer5');
generateColorMenu('colorMenuContainer6');
generateColorMenu('colorMenuContainer7');
generateColorMenu('colorMenuContainer8');
generateColorMenu('colorMenuContainer9');
generateColorMenu('colorMenuContainer10');
generateColorMenu('colorMenuContainer11');
generateColorMenu('colorMenuContainer12');