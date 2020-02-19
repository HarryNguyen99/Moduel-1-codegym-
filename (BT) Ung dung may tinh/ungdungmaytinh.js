

function cong() {
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;
    let d = parseInt(a);
    let e = parseInt(b);
    let c = null;
    c = d + e
    document.getElementById("ketqua").innerHTML = "Ket Qua: " + c;
}

function tru() {
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;
    let d = parseInt(a);
    let e = parseInt(b);
    let c = null;
    c = d - e
    document.getElementById("ketqua").innerHTML = "Ket Qua: " + c;
}

function nhan() {
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;
    let d = parseInt(a);
    let e = parseInt(b);
    let c = null;
    c = d * e
    document.getElementById("ketqua").innerHTML = "Ket Qua: " + c;
}

function chia() {
    let a = document.getElementById("s1").value;
    let b = document.getElementById("s2").value;
    let d = parseInt(a);
    let e = parseInt(b);
    let c = null;
    c = d / e
    document.getElementById("ketqua").innerHTML = "Ket Qua: " + c;
}