$('li:eq(0)').mouseover(function (event) {
    $('h3, span').css('border', '3px dotted #ee7d7d');
});
$('li:eq(0)').mouseout(function (event) {
    $('h3, span').css('border', 'none');
});
$('li:eq(1)').mouseover(function (event) {
    $('.container span').css('border', '3px dotted #ffcb00');
});
$('li:eq(1)').mouseout(function (event) {
    $('.container span').css('border', 'none');
});
$('li:eq(2)').mouseover(function (event) {
    $('#con span').css('border', '3px dotted #001020');
});
$('li:eq(2)').mouseout(function (event) {
    $('#con span').css('border', 'none');
});
$('li:eq(3)').mouseover(function (event) {
    $('h3 ~ div').css('border', '3px solid #ee7d7d');
});
$('li:eq(3)').mouseout(function (event) {
    $('h3 ~ div').css('border', 'none');
});
$('li:eq(4)').mouseover(function (event) {
    $('h3 + div').css('border', '3px solid #ffcb00');
});
$('li:eq(4)').mouseout(function (event) {
    $('h3 + div').css('border', 'none');
});