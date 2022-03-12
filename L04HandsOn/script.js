
class Employee {
    constructor(name, salary, hireDate) {
      this.name = name;
      this.salary = salary;
      this.hireDate = hireDate;
    }
    getName() {
      console.log(this.name.toUpperCase());
    }
    getSalary() {
      console.log(this.salary);
    }
    getHireDate() {
      console.log(this.hireDate);
    }

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob){
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
        
        descriptionOfJob() {
            console.log(this.name + " " + this.hireDate + " " + this.salary + " " + descriptionOfJob)
        }
    }
class Designer extends Employee {
    constructor (name, salary, hireDate, experience){
        super(name, salary, hireDate);
        this.experience = experience;

        experience() {
            console.log(this.name + " " + this.hireDate + " " + this.salary + " " + this.experience)
        }
    }

}
class SalesAssociate extends Employee {
    constructor (name, salary, hireDate, degreeCompleted) {
        super(name, salary, hireDate); 
        this.degrees = degreeCompleted;

        degrees(){
            console.log (this.name + " " + this.hireDate + " " + this.salary + " " + this.degrees)
        
        }

    }
let stacie = new Manager("Stacie" +" was hired on  " + "3/19/80" +" and earns" + 100,000,  "Stacie works as a Manager");
let rachel = new Designer("Rachel" +"was hired on " + "3/10/82 " +" and earns " + 82,000 + " Rachel also has " + 5 + + "years of experience");
let nikala = new SalesAssociate("Nikala" +" was hired on " + "11/26/85" +" " + " and earns" + 50,000 + 
" and she has Bachelors degree")

stacie.manager()
rachel.Designer()
nikala.SalesAssociate()