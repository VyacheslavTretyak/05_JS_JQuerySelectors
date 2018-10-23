$('#dropdownMenuButton, .dropdown-menu').mouseover(function () {
    $('.dropdown-menu').css('display', 'block');
});
$('#dropdownMenuButton, .dropdown-menu').mouseout(function () {
    $('.dropdown-menu').css('display', 'none');
});

$('li').dblclick(function () {    
 
    if ($(this).hasClass('active')) {
        $(this).removeClass();
    } else {
        $(this).addClass('active');
    }
});
