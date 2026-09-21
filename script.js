const practiceEmployees = [
    {
        id: 1,
        firstName: "Maya",
        lastName: "Rodriguez",
        weekOneHours: 40,
        weekTwoHours: 36,
        hourlyRate: 18.50
    },
    {
        id: 2,
        firstName: "Jordan",
        lastName: "Lee",
        weekOneHours: 32,
        weekTwoHours: 38,
        hourlyRate: 21.25
    },
    {
        id: 3,
        firstName: "Sofia",
        lastName: "Patel",
        weekOneHours: 40,
        weekTwoHours: 40,
        hourlyRate: 17.75
    },
    {
        id: 4,
        firstName: "Marcus",
        lastName: "Chen",
        weekOneHours: 25,
        weekTwoHours: 31,
        hourlyRate: 24.00
    },
    {
        id: 5,
        firstName: "Aaliyah",
        lastName: "Brooks",
        weekOneHours: 42,
        weekTwoHours: 39,
        hourlyRate: 19.50
    },
    {
        id: 6,
        firstName: "Noah",
        lastName: "Williams",
        weekOneHours: 37,
        weekTwoHours: 35,
        hourlyRate: 22.00
    }
];

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
    
}

for(i=0; i<practiceEmployees.length; i++){
    employee = practiceEmployees[i]
    calculatePayroll(employee);
}
