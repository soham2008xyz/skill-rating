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
    $('#last-used-button').trigger('click');
});

$('#last-used-next').click(function (e) {
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

$('#last-used-prev').click(function (e) {
    e.stopPropagation();
    $('#rating-button').trigger('click');
});

$('#confirm-prev').click(function (e) {
    e.stopPropagation();
    $('#last-used-button').trigger('click');
});

/* Bootstrap select */

$('.selectpicker').selectpicker();

/* jQuery knob */

$(".knob").knob({
    /*change : function (value) {
                    //console.log("change : " + value);
                },
                release : function (value) {
                    console.log("release : " + value);
                },
                cancel : function () {
                    console.log("cancel : " + this.value);
                },*/
    draw: function () {

        // "tron" case
        if (this.$.data('skin') == 'tron') {

            var a = this.angle(this.cv) // Angle
                ,
                sa = this.startAngle // Previous start angle
                ,
                sat = this.startAngle // Start angle
                ,
                ea // Previous end angle
                , eat = sat + a // End angle
                ,
                r = true;

            this.g.lineWidth = this.lineWidth;

            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.value);
                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                this.g.beginPath();
                this.g.strokeStyle = this.previousColor;
                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                this.g.stroke();
            }

            this.g.beginPath();
            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
            this.g.stroke();

            this.g.lineWidth = 2;
            this.g.beginPath();
            this.g.strokeStyle = this.o.fgColor;
            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
            this.g.stroke();

            return false;
        }
    }
});
