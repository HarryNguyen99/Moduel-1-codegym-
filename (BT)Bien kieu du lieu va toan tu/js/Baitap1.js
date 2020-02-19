function tinh() {
    let v = document.getElementById("vatly");
    let h = document.getElementById("hoahoc");
    let s = document.getElementById("sinhhoc");
    let td = parseInt(v.value) + parseInt(h.value) + parseInt(s.value);
    let tb = (parseInt(v.value) + parseInt(h.value) + parseInt(s.value)) / 3;
    document.getElementById("ktd").innerHTML = td;
    document.getElementById("ktb").innerHTML = tb;
}