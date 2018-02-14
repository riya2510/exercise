//simple inheritance
console.log("SIMPLE INHERITANCE");
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

//multilevel inheritance
console.log("MULTILEVEL INHERITANCE");
class Company {
    constructor(companyName) {
        this.companyName = companyName;
    }
    getCompanyName() {
        return this.companyName;
    }
}
class Model extends Company {
    constructor(companyName,modelName) {
        super(companyName);
        this.modelName = modelName;
    }
    getModeName() {
        return this.modelName;
    }
}
class carPrice extends Model {
    constructor(companyName,modelName,price) {
        super(companyName,modelName);
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
let price = new carPrice('Honda','City','8.5 lakh');
console.log("price of "+price.getCompanyName()+" "+price.getModeName()+" is "+price.getPrice());

//Hierarchical inheritance
console.log("HIERARCHICAL INHERITANCE");
class Person {
    constructor(name,age,gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    displayPersonData(){
        console.log("name is : "+this.name);
        console.log("age is : "+this.age);
        console.log("gender is : "+this.gender);
    }
}
class Student extends Person {
    constructor(name,age,gender,institute,level) {
        super(name,age,gender);
        this.institute = institute;
        this.level = level;
    }
    displayData(){
        console.log("institute name is : "+this.institute);
        console.log("level is : "+this.level);
    }
}
class Employee extends Person {
    constructor(name,age,gender,company,salary){
        super(name,age,gender);
        this.company = company;
        this.salary = salary;
        
    }
    displayData() {
        console.log("company name is : "+this.company);
        console.log("salary is : "+this.salary);
    }

}
let riya = new Student('Riya',20,'Female','LJ','Bechlelor');
let john = new Employee('John',23,'Male','abc company',20000);
riya.displayPersonData();
riya.displayData();
john.displayPersonData();
john.displayData();