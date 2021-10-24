/**
 *  object = a container for properties/methods
 * 
 *  property = values/varaibles that describew what an object has
 *  methods = functiuons that describe what an object can do
 */

var human = {

    firstName: "Rick",
    age: 65,

    eat : function(){
        console.log(this.firstName + " is eating.");
    },

    drink : function(){
        console.log(this.firstName + ' is drinking.');
    },

    sleep : function(){
        console.log(this.firstName + ' is sleeping.');
    }
};

var human;
// dot notation
console.log(human.firstName); 
human.drink();
human.sleep();
// bracket notation
human['name']
