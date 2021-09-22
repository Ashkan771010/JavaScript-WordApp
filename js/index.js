var input = document.querySelector('.txtInput');
var btn = document.querySelector('.convertBtn');
var show = document.querySelector('.show');


function convertToNumber(str) {
    str = str.toUpperCase();
    let out = 0,
    len = str.length;
    for (pos = 0; pos < len; pos++) {
    out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
}

function convert() {
    var value = input.value;
    // console.log(value);
    var word = value.split('');
    console.log(word);
    word.forEach((letter) => console.log(convertToNumber(letter)));
}
