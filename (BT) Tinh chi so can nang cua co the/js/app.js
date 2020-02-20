function tinhBmi() {
    let  nang = document.getElementById("cannang").value;
    let cao = document.getElementById("chieucao").value;
    let bmi = nang / (cao * cao);

    if (bmi < 18)
        document.getElementById("chiso").innerHTML = bmi + "  Underweight" ;
    else if (bmi < 25.0)
        document.getElementById("chiso").innerHTML = bmi + "  Normal" ;
    else if (bmi < 30.0)
        document.getElementById("chiso").innerHTML = bmi + "  Overweight" ;
    else
        document.getElementById("chiso").innerHTML = bmi + "  Obese";

}