$(function () {
    console.log(`doc ready`);
    function cal_watts() {
        var v = $('#volt-value').text();
        var ohm = $('#ohm-value').text();
        var w = (v * (v / ohm)).toFixed(2);
        $('#watts-value').text(w);
    }
    $(".volt").ionRangeSlider({
        skin: "big",
        type: "single",
        min: 3,
        max: 4.5,
        step: 0.01,
        grid: true,
        gird_num: 4,
        grid_margin: true,
        postfix: " V",
        onChange: function (data) {
            $('#volt-value').text(data.from);
            cal_watts();
        },
        onFinish: function (data) {
            cal_watts();
        }
    });
    $(".ohm").ionRangeSlider({
        skin: "big",
        type: "single",
        min: 0,
        max: 2,
        step: 0.01,
        grid: true,
        gird_num: 4,
        grid_margin: true,
        postfix: " &Omega;",
        onChange: function (data) {
            $('#ohm-value').text(data.from);
            cal_watts();
        },
        onFinish: function (data) {
            cal_watts();
        }
    });
});