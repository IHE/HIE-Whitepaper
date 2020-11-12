buildSections();
$(document).foundation();

// Generic AJAX GET client, handles variable number of arguments. 
// All arguments are then passed to the call-back function, 
// with the addition of the HTTP response body (passed as 
// the first argument to the call-back function.
var HttpClient = function() {
    var args = Array.prototype.slice.call(arguments);
    this.get = function(url, callback) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                args.unshift(httpRequest.responseText);
                callback.apply(null, args);
            }
        }

        httpRequest.open("GET", url, true);
        httpRequest.send(null);
    }
}

//Toggler functions
$('[data-toggler]').on('on.zf.toggler', function() {
    //var prefix = this.id.substr(0, this.id.lastIndexOf("-"));
    //$('#' + prefix + '-more').html('Read more<i class="fi fi-arrows-expand" aria-hidden="true"></i>');
    console.log('Toggler is On - ' + prefix);

});

$('[data-toggler]').on('off.zf.toggler', function() {
    //var prefix = this.id.substr(0, this.id.lastIndexOf("-"));
    //$('#' + prefix + '-more').html('Read less<i class="fi fi-arrows-compress" aria-hidden="true"></i>');
    console.log('Toggler is Off - ' + prefix);
});

$('.iframe-toggle').click(function( event ){
    console.log('Toggle clicked');
    $('#audit-5.1.1').foundation('toggle');
    event.preventDefault();
});

//execute body element functions
/*for (i = 0; i < hr_functions.length; i++) {
    hr_functions[i]();
}*/


//Back to top
$(function() {

    $(document).on('scroll', function() {

        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });

    $('.scroll-top-wrapper').on('click', scrollToTop);
});

function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({ scrollTop: offsetTop }, 500, 'linear');
}

function buildSections() {
    var element = $("main");
    var top = "";
    top = element.find("h1");
    var children = "h2";
    if (top['length'] == 0) {
        top = element.find("h2");
        children = "h3";
    }
    console.log('Top is ' + top.attr('id'));

    /* smallMenu = $(document.createElement("li"));
    smallMenu.addClass("has-submenu is-dropdown-submenu-parent");
    smallMenuList = $(document.createElement("ul"));
    smallMenuList.addClass("submenu menu vertical is-dropdown-submenu");
    smallMenuList.attr("data-submenu","true"); */
    menuItems = $(document.createElement("ul"));
    menuItems.addClass("vertical menu");

    $('#section-menu').append("<a href='#" + top.attr('id') + "'>"+ top.text() + "</a>\n");
    //smallMenu.append("<a href='#" + top.attr('id') + "'>Sections</a>\n");
    
    //menuItems.attr("id","responsive-menu");
    //$('#section-menu').append("<ul id='menu-tems' class='vertical menu'></ul>\n");
    var subsections = element.find(children);
    subsections.each(function() {
        menuItems.append("<li><a href='#" + $(this).attr('id') + "'>" + $(this).text() + "</a></li>\n");
        $('#tf-small-menu').append("<li><a href='#" + $(this).attr('id') + "'>" + $(this).text() + "</a></li>\n");
    });
    $('#section-menu').append(menuItems);
    //smallMenu.append(smallMenuList);
    //$('#tf-small-menu').append(smallMenu);
    
}