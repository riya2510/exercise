//singleton pattern
class Developer {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
}

class Designer {

    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getName() {
        return this.name;
    }
    getSalary() {
        return this.salary;
    }
}
class Organization {
    constructor(){
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    getTotalSalaries() {
        let totalSalary = 0;

        this.employees.forEach(employee => {
            totalSalary += employee.getSalary();
        })

        return totalSalary;
    }
}
let priya = new Developer('priya', 15000);
let darshita = new Designer('darshita', 12500);

const organization = new Organization();
organization.addEmployee(priya);
organization.addEmployee(darshita);

console.log("Total salaries of all employees: " , organization.getTotalSalaries());