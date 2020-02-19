let year = parseInt(prompt("Enter a year"));

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " is a leap year");
        } else {
            alert(year + " is NOT a leap year");
        }
    } else {
        alert(year + " is a leap year");
    }
} else {
    alert(year + " is NOT a leap year");
}


/*
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}*/


/*let isLeaYear = false;
let isDivisibleBy4 = year % 4 ==0;
if (isDivisibleBy4) {
    let isDvisibleBy100 = year % 100 == 0;
    if (isDvisibleBy100) {
        let isDvisibleBy400 = year % 400 == 0;
        if (isDvisibleBy400) {
            isLeaYear = true;
        }
    } else {
        isLeaYear = true;
    }
}
if (isLeaYear){
    alert(year + "is a leap year");
} else {
    alert(year + "is NOT a leap year");
}*/