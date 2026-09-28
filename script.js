const testEmployees = [
    {
        id: 101,
        firstName: "Elena",
        lastName: "Martinez",
        weekOneHours: 38,
        weekTwoHours: 41,
        hourlyRate: 22.75
    },
    {
        id: 102,
        firstName: "Darius",
        lastName: "Johnson",
        weekOneHours: 34,
        weekTwoHours: 37,
        hourlyRate: 19.80
    },
    {
        id: 103,
        firstName: "Priya",
        lastName: "Shah",
        weekOneHours: 40,
        weekTwoHours: 40,
        hourlyRate: 27.25
    },
    {
        id: 104,
        firstName: "Caleb",
        lastName: "Thompson",
        weekOneHours: 29,
        weekTwoHours: 35,
        hourlyRate: 18.60
    },
    {
        id: 105,
        firstName: "Isabella",
        lastName: "Garcia",
        weekOneHours: 43,
        weekTwoHours: 38,
        hourlyRate: 24.40
    },
    {
        id: 106,
        firstName: "Ethan",
        lastName: "Nguyen",
        weekOneHours: 36,
        weekTwoHours: 32,
        hourlyRate: 21.15
    },
    {
        id: 107,
        firstName: "Jasmine",
        lastName: "Walker",
        weekOneHours: 40,
        weekTwoHours: 39,
        hourlyRate: 20.50
    },
    {
        id: 108,
        firstName: "Mateo",
        lastName: "Rivera",
        weekOneHours: 27,
        weekTwoHours: 31,
        hourlyRate: 23.85
    },
    {
        id: 109,
        firstName: "Grace",
        lastName: "Kim",
        weekOneHours: 35,
        weekTwoHours: 42,
        hourlyRate: 26.10
    },
    {
        id: 110,
        firstName: "Malik",
        lastName: "Carter",
        weekOneHours: 40,
        weekTwoHours: 33,
        hourlyRate: 17.95
    },
    {
        id: 111,
        firstName: "Natalie",
        lastName: "Bennett",
        weekOneHours: 31,
        weekTwoHours: 36,
        hourlyRate: 25.30
    },
    {
        id: 112,
        firstName: "Lucas",
        lastName: "Anderson",
        weekOneHours: 44,
        weekTwoHours: 40,
        hourlyRate: 28.75
    },
    {
        id: 113,
        firstName: "Zoe",
        lastName: "Collins",
        weekOneHours: 33,
        weekTwoHours: 29,
        hourlyRate: 20.25
    },
    {
        id: 114,
        firstName: "Andre",
        lastName: "Mitchell",
        weekOneHours: 39,
        weekTwoHours: 37,
        hourlyRate: 23.50
    },
    {
        id: 115,
        firstName: "Hannah",
        lastName: "Foster",
        weekOneHours: 41,
        weekTwoHours: 34,
        hourlyRate: 21.60
    }
];

let totalPayroll = 0


function calculatePayroll(employee){

    totalWeekOne = employee.hourlyRate * employee.weekOneHours;
    totalWeekTwo = employee.hourlyRate * employee.weekTwoHours;

    totalCheck = totalWeekOne + totalWeekTwo;

    stateTax = totalCheck * 0.035;
    fedTax = totalCheck * 0.10;
    socialSec = totalCheck * 0.062;

    totalDeductions = stateTax + fedTax + socialSec;

    netPay = totalCheck - totalDeductions

    console.log(employee.firstName + " " + employee.lastName + " | Gross pay: $" + totalCheck.toFixed(2) + " |  Net Pay: $" + netPay.toFixed(2))

    return totalPayroll += netPay
    
}

for(let i=0; i<testEmployees.length; i++){
    employee = testEmployees[i]
    calculatePayroll(employee);

    if(i===testEmployees.length - 1){
        console.log(`TOTAL PAYROLL PAYOUT: $${totalPayroll.toFixed(2)}`)
    }
}
