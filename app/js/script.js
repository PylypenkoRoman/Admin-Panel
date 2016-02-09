$(document).ready(function(){
    $(".nav__btn").click(function(){
        $(this).toggleClass("active");
        $(".nav, .sidebar").toggleClass("collapsed");
    });
    $(".reasons__item").click(function(){
        $(this).toggleClass("checked");
        $(this).find(".reasons__check-icon i").toggleClass("icon-checked").toggleClass("icon-not-checked");
    });
    $('#input-file').on('change', function (event, files, label) {
        var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
        $('#attach-photo__text').text(file_name);
    });
    $(".switcher").click(function(){
        $(this).toggleClass("on").toggleClass("off");
    });
});