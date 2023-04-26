

let payRate = 17.30
let hoursWorked = 45;
let regularPay;
let overtimePay;
let grosspay;
let filingStatus;
let netPay;

if (hoursWorked <= 40) {
    regularPay = payRate * hoursWorked;
    overtimePay = 0
}
    else { 
        regularPay = payRate * 40
        overtimePay = payRate * 1.5 * (hoursWorked - 40);
    }

    grosspay = regularPay + overtimePay;

// gross pay * 12
if (filingStatus = single) {

}



console.log("You worked " + hoursWorked + " hours this period.");
console.log("Because you earn $"+ payRate +" per hour, your gross pay is $"+ grosspay);
console.log("Your filing status is " );
console.log("Your tax withholdings this period is $");
console.log("Your net pay is $" );
