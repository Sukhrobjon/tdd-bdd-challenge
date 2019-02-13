const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
  const area = utils.area(5, 6);
  expect(area).to.be.a('Number');
  expect(area).to.be.equal(5*6)
});

it("should return the are of a circle of radius 5", function(){
  const areaCircle = utils.circleArea(5);
  expect(areaCircle).to.be.a('Number');
  expect(areaCircle).to.be.equal(Math.PI * 5 * 5)
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const Item = {name: "Car", price: "25"};
  expect(Item).to.be.a("Object");
  expect(Item.name).to.equal('Car');
  expect(Item.price).to.equal('25');
});

it("Should return an array containing all items in cart", function() {
  const Cart = [1, 2, 3]
  expect(Cart).to.be.a("Array");
  expect(Cart).to.have.lengthOf(3);
  expect(Cart).to.have.members([3, 2, 1])
});


it("Should add a new item to the shopping cart", function() {
  const Cart = [1, 2, 3]
  expect(Cart).to.be.a("Array");
  expect(Cart).to.have.lengthOf(Cart.length);
  oldLength = Cart.length
  Cart.push(4)
  expect(Cart).to.have.lengthOf(oldLength + 1);
  
});

it("Should return the number of items in the cart", function() {
  const Cart = [1, 2, 3]
  expect(Cart).to.be.a("Array");
  expect(Cart).to.have.lengthOf(Cart.length);
});

it("Should remove items from cart", function() {
  const Cart = [1, 2, 3, 4]
  expect(Cart).to.be.a("Array");
  expect(Cart).to.have.lengthOf(Cart.length);
  oldLength = Cart.length
  for(let i = 0; i < 2; i++){
    Cart.pop()
  }
  expect(Cart).to.have.lengthOf(oldLength - 2);
});

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should validate that an empty cart has 0 items");

it("Should return the total cost of all items in the cart");
