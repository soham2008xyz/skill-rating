/* Tooltips on tab headings */

$(function () {
    $('a[title]').tooltip();
});

/* Tab pane navigation */

$('#user-type-next').click(function (e) {
    e.stopPropagation();
    $('#skill-type-button').trigger('click');
});

$('#skill-type-next').click(function (e) {
    e.stopPropagation();
    $('#rating-button').trigger('click');
});

$('#rating-next').click(function (e) {
    e.stopPropagation();
    $('#confirm-button').trigger('click');
});

$('#skill-type-prev').click(function (e) {
    e.stopPropagation();
    $('#user-type-button').trigger('click');
});

$('#rating-prev').click(function (e) {
    e.stopPropagation();
    $('#skill-type-button').trigger('click');
});

$('#confirm-prev').click(function (e) {
    e.stopPropagation();
    $('#rating-button').trigger('click');
});

/* Bootstrap select */

$('.selectpicker').selectpicker();
