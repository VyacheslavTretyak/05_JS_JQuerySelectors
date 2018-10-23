$('li:eq(0)').mouseover(function (event) {
    $('li:contains("Пользователь")').css('border', '3px dotted #ee7d7d');
});
$('li:eq(0)').mouseout(function (event) {
    $('li:contains("Пользователь")').css('border', 'none');
});
$('li:eq(1)').mouseover(function (event) {
    $(':empty').text("EMPTY");
});
$('li:eq(1)').mouseout(function (event) {
    $('li:contains("EMPTY")').text("");
});