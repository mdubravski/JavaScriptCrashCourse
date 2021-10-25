/**
 * 
 * super = Reference to the parent class (super class).
 *         Very similar to "this" keyword.
 *         Can use a super classes: constructor, methods.
 * 
 */

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    welcome(){
        console.log('Hello',this.name);
        console.log('You are', this.age,'Years Old');
    }
}

class Student extends Person{
    constructor(name,age,gpa){
        super(name,age);
        this.gpa = gpa;
    }

    hello(){
        super.welcome();
        console.log('Your GPA is',this.gpa);
    }
}

class Teacher extends Person{
    constructor(name,age,classSize){
        super(name,age);
        this.classSize = classSize;
    }

    hello(){
        super.welcome();
        console.log('Your class size is',this.classSize);
    }
}

let s = new Student('Mike',22,3.1);
let t = new Teacher('Professor', 58, 30);
console.log(s,t);
s.hello();
t.hello();