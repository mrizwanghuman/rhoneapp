
$(".honesty, .reliability, .integrity").hide();
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar-default').addClass('navbar-fixed-top');
    } else {
        $('.navbar-default').removeClass('navbar-fixed-top');
    }
});

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.reliability').show(1000).slideDown();
        $('.integrity').show(2000).slideDown();
        $('.honesty').show(3000).slideDown();
    } else {
        $('.reliability ').hide();
        $('.integrity').hide();
        $('.honesty').hide();
    }
});
$("#description").click(function(){

$(".description2").toggle("slow");
});
$("#embassadors").click(function(){

$(".imagess").toggle("slow");
});