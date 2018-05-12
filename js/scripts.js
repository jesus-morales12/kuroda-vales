// $(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 630) {
//             $('#programa').addClass('--active')
//         }
//         if ($(this).scrollTop() < 630) {
//             $('#programa').removeClass('--active')
//         }
//         if ($(this).scrollTop() > 1375) {
//             $('#programa').removeClass('--active')
//             $('#requisitos').addClass('--active')
//         }
//         if ($(this).scrollTop() < 1375) {
//             $('#requisitos').removeClass('--active')
//         }
//         if ($(this).scrollTop() > 2120) {
//             $('#requisitos').removeClass('--active')
//             $('#contacto').addClass('--active')
//         }
//         if ($(this).scrollTop() < 2120) {
//             $('#contacto').removeClass('--active')
//         }
//     });
// });

$(window).on('scroll', function () {
    if ($(this).scrollTop() >= $('#programa').position().top) {
        $('#navbar-programa').addClass('--active')
    }
    if ($(this).scrollTop() <= $('#programa').position().top) {
        $('#navbar-programa').removeClass('--active')
    }
    if ($(this).scrollTop() >= $('#requisitos').position().top) {
        $('#navbar-programa').removeClass('--active')
        $('#navbar-requisitos').addClass('--active')
    }
    if ($(this).scrollTop() <= $('#requisitos').position().top) {
        $('#navbar-requisitos').removeClass('--active')
    }
})