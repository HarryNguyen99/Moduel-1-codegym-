
    function tinhsongay() {
        let month = document.getElementById("thang").value;
        let m = parseInt(month);
        if (m >= 1 && m <= 12) {
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    document.getElementById("songay").innerHTML = "Tháng Có 31 Ngày";
                    break;
                case 2:
                    document.getElementById("songay").innerHTML = "Tháng 2 Có 28, 29 Ngày";
                default :
                    document.getElementById("songay").innerHTML = "Tháng Có 30 Ngày";
            }
        } else
            document.getElementById("songay").innerHTML = "Nhập Lại";

    };