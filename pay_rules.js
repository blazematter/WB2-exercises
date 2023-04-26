

let payRate = 17.30
let hoursWorked = 45;
let regularPay;
let overtimePay;
let grosspay;

if (hoursWorked <= 40) {
    regularPay = payRate * hoursWorked;
    overtimePay = 0
}
    else { 
        regularPay = payRate * 40
        overtimePay = payRate * 1.5 * (hoursWorked - 40);
    }

    grosspay = regularPay + overtimePay;

console.log(grosspay);

// 17.30 * 45 = 778.5 