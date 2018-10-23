$('li:eq(0)').mouseover(function (event) {
    $('ul li:first').css('border', '3px dotted #ee7d7d');
});
$('li:eq(0)').mouseout(function (event) {
    $('ul li:first').css('border', 'none');
});
$('li:eq(1)').mouseover(function (event) {
    $('ul li:last').css('border', '3px dotted #ffcb00');
});
$('li:eq(1)').mouseout(function (event) {
    $('ul li:last').css('border', 'none');
});
$('li:eq(2)').mouseover(function (event) {
    $('ul li:odd').css('border', '3px dotted #001020');
});
$('li:eq(2)').mouseout(function (event) {
    $('ul li:odd').css('border', 'none');
});
$('li:eq(3)').mouseover(function (event) {
    $('ul li:gt(1)').css({ 'border': '3px solid #ee7d7d', 'background': 'red'});
});
$('li:eq(3)').mouseout(function (event) {
    $('ul li:gt(1)').css({ 'border': 'none', 'background': 'none' });
});