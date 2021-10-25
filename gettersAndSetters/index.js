/**
 * 
 * Why use getters and setters?
 *  a way to get/set properties of an object
 *  secures better data quality
 *  does extra things behind the scenes
 * 
 */

class User{
    constructor(first,last){
        this.first=first;
        this.last=last;
    }

    set first(value){
        this.firstname = value;
    }

    set last(value){
        this.lastname = value;
    }

    get fullname(){
        return this.firstname + " " + this.lastname;
    }
}

let u = new User("Michael", "Dubravski");
console.log(u.fullname);
u.first = "Peter"
console.log(u.firstname);