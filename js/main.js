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
        var endTime = new Date("31 December 2023 11:59:59 GMT-18:00");
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
    $('.thumbsUpButton').click(function() {
        $(this).toggleClass('btn-outline-primary btn-fill-primary btn-primary thumbs');
    });
});
$(document).ready(function() {
    $('.thumbsUpButton').click(function() {

        const likeCountElement = $(this).closest('.blog-item').find('.like-count');
        const likeCount = parseInt(likeCountElement.text());
        const updatedLikeCount = $(this).hasClass('btn-fill-primary') ? likeCount + 1 : likeCount - 1;
        likeCountElement.text(updatedLikeCount );
    });
});
setTimeout(function () {
    document.querySelector('.panda').classList.add('animate-panda');
}, 1000);
const cart = [];

function addToCart(productID, color, imageSrc) {
    const existingProduct = cart.find(item => item.productID === productID && item.color === color);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ productID, color, quantity: 1, imageSrc });
    }

    updateCartDisplay();
}

function removeFromCart(productID, color) {
    const index = cart.findIndex(item => item.productID === productID && item.color === color);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.color}" style="width: 50px; height: 50px;">
                <p>Product ID: ${item.productID}, Color: ${item.color}, Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart('${item.productID}', '${item.color}')">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
}

// Example: Adding items to the cart (you can call these functions based on user actions)
addToCart('product1', 'Black', 'img/products/straight/blackstraight.png');
addToCart('product2', 'Blonde', 'img/products/straight/blondestraight.png');
addToCart('product1', 'Brown', 'img/products/straight/brownstraight.png'); // Updating quantity for an existing product

// Update the cart display initially
updateCartDisplay();
