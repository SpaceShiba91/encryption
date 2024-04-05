function fibonacci(num) {
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

function button() {
    var num = document.getElementById('input').value;
    if (fibonacci(num)) {
        document.getElementById('text').innerHTML += num;
    }
}