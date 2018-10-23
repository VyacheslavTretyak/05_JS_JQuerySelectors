$('li:eq(0)').mouseover(function (event) {
    $('[href]').css('border', '3px dotted #ee7d7d');
});
$('li:eq(0)').mouseout(function (event) {
    $('[href]').css('border', 'none');
});
$('li:eq(1)').mouseover(function (event) {
    $('[href = "https://www.google.com.ua/"]').css('border', '3px dotted #ffcb00');
});
$('li:eq(1)').mouseout(function (event) {
    $('[href = "https://www.google.com.ua/"]').css('border', 'none');
});
$('li:eq(2)').mouseover(function (event) {
    $('[src ^= "img"]').css('border', '3px dotted #001020');
});
$('li:eq(2)').mouseout(function (event) {
    $('[src ^= "img"]').css('border', 'none');
});
$('li:eq(3)').mouseover(function (event) {
    $('[src $= ".png"]').css('border', '3px solid #ee7d7d');
});
$('li:eq(3)').mouseout(function (event) {
    $('[src $= ".png"]').css('border', 'none');
});
$('li:eq(4)').mouseover(function (event) {
    $('[src][title]').css('border', '3px solid #ffcb00');
});
$('li:eq(4)').mouseout(function (event) {
    $('[src][title]').css('border', 'none');
});