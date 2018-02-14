//using super keyword
class employee {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
class employeeSalary extends employee {
    constructor(name,age,salary) {
        super(name,age);
        
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
let priya = new employeeSalary('Priya',23,15000);
console.log("name is : "+ priya.getName());
console.log("age is : "+priya.getAge());
console.log("salary is : "+priya.getSalary());