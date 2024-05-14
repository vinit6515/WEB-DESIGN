var count1 = 0, count2 = 0;
var count3 = 0;
function add1() {
    count1 = count1 + 1;
    document.getElementById("disp-item1").innerHTML = "Quantity : ".concat(count1);
}
function add2() {
    count2 = count2 + 1;
    document.getElementById("disp-item2").innerHTML = "Quantity : ".concat(count2);
}
function add3() {
    count3 = count3 + 1;
    document.getElementById("disp-item3").innerHTML = "Quantity : ".concat(count3);
}
function remove1() {
    if (count1 == 1) {
        document.getElementById("disp-item1").innerHTML = null;
    }
    else {
        count1--;
        document.getElementById("disp-item1").innerHTML = "Quantity : ".concat(count1);
    }
}
