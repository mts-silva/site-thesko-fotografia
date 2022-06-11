var _count = 1;

var next_btn_ani = [{ transform: 'translateX(150%)'},{ transform: 'translateX(0%)'}];
var prev_btn_ani = [{ transform: 'translateX(-150%)'},{ transform: 'translateX(0%)'}];

var btn_ani_timing = {duration: 400, iterations: 1, easing: 'ease-in-out'};

setInterval (btn_next,8500);

function btn_next() {
    _count++;

    if(_count > 5) {_count = 1;};

    document.getElementById("album"+_count).checked = true;
    document.getElementById("card"+_count).animate( next_btn_ani, btn_ani_timing);
    console.log(_count);
}

function btn_prev() {
    _count--;

    if(_count < 1) { _count = 5;}

    document.getElementById("album"+_count).checked = true;
    document.getElementById("card"+_count).animate( prev_btn_ani, btn_ani_timing);
    console.log(_count);
}