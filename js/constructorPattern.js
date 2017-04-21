
//********* Constructor Pattern ***********//

function Car1( model, year, miles ) {

	this.model = model;
	this.year = year;
	this.miles = miles;

	this.toString = function() {
		return this.model + " has done " + this.miles + " miles ";
	};
}

// Usages:

// We can create new instances of the car
var civic1 = new Car1( "Honda Civic", 2009, 20000 );
var mondeo1 = new Car1( "Ford Mondeo", 2010, 5000 );

console.log( civic1.toString() );
console.log( mondeo1.toString() );


//********* Constructors With Prototypes *************/


function Car2( model, year, miles ) {
  	this.model = model;
  	this.year = year;
  	this.miles = miles;
}

// Note here that we are using Object.prototype.newMethod rather th
// Object.prototype so as to avoid redefining the prototype object

Car2.prototype.toString = function () {
 	return this.model + " has done " + this.miles + " miles";
};

 // Usage:
var civic2 = new Car2( "Honda Civic", 2009, 20000 );
var mondeo2 = new Car2( "Ford Mondeo", 2010, 5000 );

console.log( civic2.toString() );
console.log( mondeo2.toString() );