$('li:eq(0)').mouseover(function (event) {
    $('.form-control').css('border', '3px dotted #0780db');
});
$('li:eq(0)').mouseout(function (event) {
    $('.form-control').css('border', 'none');
});
$('li:eq(1)').mouseover(function (event) {
    $('button').css({ 'border': '2px solid #ff5040', 'background': '#fdff0d',});
});
$('li:eq(1)').mouseout(function (event) {
    $('button').css({ 'border': 'none', 'background': 'none' });
});
$('li:eq(2)').mouseover(function (event) {
    $('input[type="radio"][name="gender"]').css({ 'background': '#bb5040' });
});
$('li:eq(2)').mouseout(function (event) {
    $('input[type="radio"][name="gender"]').css({ 'background': 'none'});
});