/*

Class - Blueprint for creating objects with shared properties and methods.

// ES6- ECMA SCRIPT 6 - 2015

ClassName should be similar to the file name and should be in PascalCase. Ex: EmployeeClass.

Class is a collection of properties(variables) and methods(functions) that are used to create objects. 

Access modifier: It is a permission to access the properties and methods of a class. 

let i = 4367
function name(params:type) {}

i = 4567

name(){}

//Syntax:

class ClassName{

    // properties and methods

    key:datatype
    private key1 : datatype
    readonly key2:datatype
    static key3:datatype

    constructor - It is a special method that is used to initialize the properties of the class. It is called when an object is created. It has the same name as the class and does not have a return type.

    constructor(key:datatype,key1:datatype,key2:datatype){
      
    }
}

How to create an object for a class

let class = new ClassName(arg1, arg2, arg3)
let class1 = new ClassName(arg1, arg2, arg3)



// Public - It can be accessed from anywhere. It is the default access modifier.

// Private - It can be accessed only within the class. It cannot be accessed from outside the class. It cannot be accessed by the child class.

// Protected - It can be accessed within the class and by the child class. It cannot be accessed from outside the class.

Readonly - It can be assigned a value only once. It cannot be changed after it is assigned. It can be accessed from anywhere.

Static - It can be accessed without creating an instance of the class. It is shared by all the instances of the class. It can be accessed using the class name.






*/

// import export

export class Employees{
    empid:number
    empName:string
    private empSalary:string
    protected empcity:string
    readonly offer:number
    static companyName:string = "Microsoft"

    constructor(id:number, name:string, sal:string, city:string, offer:number){
        // this keyword - It refers to the current object. It is used to access the properties and methods of the current object.

        this.empid = id // emp1.empid = 101
        this.empName = name //emp1.empName = "John"
        this.empSalary = sal // emp1.empSalary = "50000"
        this.empcity = city // emp1.empcity = "New York"
        this.offer = offer // emp1.offer = 10000
    }

    employeeInformation(){
        console.log("Employee ID: ", this.empid);
        console.log("Employee Name: ", this.empName);
        console.log("Employee Salary: ", this.empSalary);
        console.log("Employee City: ", this.empcity);
        console.log("Employee Offer: ", this.offer);
        console.log("Company Name: ", Employees.companyName);
    }

    // static method - It can be accessed without creating an instance of the class. It is shared by all the instances of the class. It can be accessed using the class name. Inside static method we cannot use "this" keyword to access the properties and methods of the class. We can only access the static properties and methods of the class using the class name.


    static companyInformation(){
        console.log("Company Name: ", Employees.companyName); 
    }

}


const emp = new Employees(101, "John", "50000", "New York", 10000)
console.log(emp.empName);
emp.empName = "Jyoti"
console.log(Employees.companyName);
emp.employeeInformation()
Employees.companyInformation()
// emp.empSalary
// emp.offer = 15000


const emp1 = new Employees(102, "Rahul", "500000", "Delhi", 200000)
console.log(emp1.empName);
console.log(Employees.companyName);
emp1.employeeInformation()
Employees.companyInformation()








/*

1. nodejs - npm
2. Editor - Visual Studio Code
3. Typescript - npm install -g typescript
4. tsx - typescript executor - tsx filename.ts
5. playwright installation - npm init playwright





*/