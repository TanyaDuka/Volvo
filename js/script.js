$(function () {
    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        min: 2800,
        max: 100000,
        from: 1250,
        max_postfix: "+",
        postfix: "SEK",
        grid: true,
        onStart: function (data) {
            $("#calcResult").text(Math.round((data.from * 4)) + 'SEK');
        },
        onChange: function (data) {
            $("#calcResult").text(Math.round((data.from * 4)) + 'SEK');
        },
    });
});
$('#currentYear').html(new Date().getFullYear());
const scrollToForm = () => {
    document.querySelector('#registration').scrollIntoView({ behavior: "smooth" });
}

$(".com__wrapper").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
});