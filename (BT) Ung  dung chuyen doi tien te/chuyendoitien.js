function chuyentien() {
    let a = document.getElementById("tien").value;
    let s1 = document.getElementById("currency1").value;
    let s2 = document.getElementById("currency2").value;
    let b = null;

    if (s1 === "VN" && s2 === "USD") {
        b = a / 23000;
    } else if (s1 === "USD" && s2 === "VN") {
        b = a * 23000;
    } else
        b = a;
    document.getElementById("ketqua").innerHTML = "Ket Qua: " + b;
}