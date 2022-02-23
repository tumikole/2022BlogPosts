// const chai = require('chai');
// const assert = chai.assert;

// suite('Unit Tests', function () {
//   suite('Basic Assertions', function () {
//     // #1
//     test('#isNull, #isNotNull', function () {
//       assert.isNull(null, 'This is an optional error description - e.g. null is null');
//       assert.isNotNull(1, '1 is not null');
//     });
//     // #2
//     test('#isDefined, #isUndefined', function () {
//       assert.isDefined(null, 'null is not undefined');
//       assert.isUndefined(undefined, 'undefined IS undefined');
//       assert.isDefined('hello', 'A string is not undefined');
//     });
//     // #3
//     test('#isOk, #isNotOk', function () {
//       assert.isNotOk(null, 'null is falsey');
//       assert.isOk("I'm truthy", 'A string is truthy');
//       assert.isOk(true, 'true is truthy');
//     });
//     // #4
//     test('#isTrue, #isNotTrue', function () {
//       assert.isTrue(true, 'true is true');
//       assert.isTrue(!!'double negation', 'Double negation of a truthy value is true');
//       assert.isNotTrue({ value: 'truthy' }, 'Objects are truthy, but are not boolean values');
//     });
//   });

//   // -----------------------------------------------------------------------------

//   suite('Equality', function () {
//     // #5
//     test('#equal, #notEqual', function () {
//       assert.equal(12, '12', 'Numbers are coerced into strings with ==');
//       assert.notEqual({ value: 1 }, { value: 1 }, '== compares object references');
//       assert.equal(6 * '2', '12');
//       assert.notEqual(6 + '2', '12');
//     });
//     // #6
//     test('#strictEqual, #notStrictEqual', function () {
//       assert.notStrictEqual(6, '6');
//       assert.strictEqual(6, 3 * 2);
//       assert.strictEqual(6 * '2', 12);
//       assert.notStrictEqual([1, 'a', {}], [1, 'a', {}]);
//     });
//     // #7
//     test('#deepEqual, #notDeepEqual', function () {
//       assert.deepEqual({ a: '1', b: 5 }, { b: 5, a: '1' }, "The order of keys doesn't matter");
//       assert.notDeepEqual({ a: [5, 6] }, { a: [6, 5] }, 'The order of array elements does matter');
//     });
//   });

//   // -----------------------------------------------------------------------------

//   function weirdNumbers(delta) {
//     return 1 + delta - Math.random();
//   }

//   suite('Comparisons', function () {
//     // #8
//     test('#isAbove, #isAtMost', function () {
//       assert.isAtMost('hello'.length, 5);
//       assert.isAbove(1, 0);
//       assert.isAbove(Math.PI, 3);
//       assert.isAtMost(1 - Math.random(), 1);
//     });
//     // #9
//     test('#isBelow, #isAtLeast', function () {
//       assert.isAtLeast('world'.length, 5);
//       assert.isAtLeast(2 * Math.random(), 0);
//       assert.isBelow(5 % 2, 2);
//       assert.isBelow(2 / 3, 1);
//     });
//     // #10
//     test('#approximately', function () {
//       assert.approximately(weirdNumbers(0.5), 1, 0.6);
//       assert.approximately(weirdNumbers(0.2), 2, 0.6);
//     });
//   });

//   // -----------------------------------------------------------------------------

//   const winterMonths = ['dec,', 'jan', 'feb', 'mar'];
//   const backendLanguages = ['php', 'python', 'javascript', 'ruby', 'asp'];
//   suite('Arrays', function () {
//     // #11
//     test('#isArray, #isNotArray', function () {
//       assert.isArray('isThisAnArray?'.split(''), 'String.prototype.split() returns an array');
//       assert.isNotArray([1, 2, 3].indexOf(2), 'indexOf returns a number');
//     });
//     // #12
//     test('Array #include, #notInclude', function () {
//       assert.notInclude(winterMonths, 'jul', "It's summer in july...");
//       assert.include(backendLanguages, 'javascript', 'JS is a backend language');
//     });
//   });

//   // -----------------------------------------------------------------------------

//   const formatPeople = function (name, age) {
//     return '# name: ' + name + ', age: ' + age + '\n';
//   };
//   suite('Strings', function () {
//     // #13
//     test('#isString, #isNotString', function () {
//       assert.isNotString(Math.sin(Math.PI / 4), 'A float is not a string');
//       assert.isString(process.env.PATH, 'An env variable is a string (or undefined)');
//       assert.isString(JSON.stringify({ type: 'object' }), 'JSON is a string');
//     });
//     // #14
//     test('String #include, #notInclude', function () {
//       assert.include('Arrow', 'row', "'Arrow' contains 'row'");
//       assert.notInclude('dart', 'queue', "But 'dart' doesn't contain 'queue'");
//     });
//     // #15
//     test('#match, #notMatch', function () {
//       const regex = /^#\sname\:\s[\w\s]+,\sage\:\s\d+\s?$/;
//       assert.match(formatPeople('John Doe', 35), regex);
//       assert.notMatch(formatPeople('Paul Smith III', 'twenty-four'), regex);
//     });
//   });

//   // -----------------------------------------------------------------------------

//   const Car = function () {
//     this.model = 'sedan';
//     this.engines = 1;
//     this.wheels = 4;
//   };

//   const Plane = function () {
//     this.model = '737';
//     this.engines = ['left', 'right'];
//     this.wheels = 6;
//     this.wings = 2;
//   };

//   const myCar = new Car();
//   const airlinePlane = new Plane();

//   suite('Objects', function () {
//     // #16
//     test('#property, #notProperty', function () {
//       assert.notProperty(myCar, 'wings', "Cars don't have wings");
//       assert.property(airlinePlane, 'engines', 'Planes have engines');
//       assert.property(myCar, 'wheels', 'Cars have wheels');
//     });
//     // #17
//     test('#typeOf, #notTypeOf', function () {
//       assert.typeOf(myCar, 'object');
//       assert.typeOf(myCar.model, 'string');
//       assert.notTypeOf(airlinePlane.wings, 'string');
//       assert.typeOf(airlinePlane.engines, 'array');
//       assert.typeOf(myCar.wheels, 'number');
//     });
//     // #18
//     test('#instanceOf, #notInstanceOf', function () {
//       assert.notInstanceOf(myCar, Plane);
//       assert.instanceOf(airlinePlane, Plane);
//       assert.instanceOf(airlinePlane, Object);
//       assert.notInstanceOf(myCar.wheels, String);
//     });
//   });

// });

// // -----------------------------------------------------------------------------

// const chai = require('chai');
// const assert = chai.assert;

// const server = require('../server');

// const chaiHttp = require('chai-http');
// chai.use(chaiHttp);

// suite('Functional Tests', function () {
//   this.timeout(5000);
//   suite('Integration tests with chai-http', function () {
//     // #1
//     test('Test GET /hello with no name', function (done) {
//       chai
//         .request(server)
//         .get('/hello')
//         .end(function (err, res) {
//           assert.equal(res.status, 200);
//           assert.equal(res.text, 'hello Guest');
//           done();
//         });
//     });
//     // #2
//     test('Test GET /?name=[Tumi] => "hello [Tumi]"', function (done) {
//       chai
//         .request(server)
//         .get('/hello?name=xy_z')
//         .end(function (err, res) {
//           assert.equal(res.status, 200);
//           assert.equal(res.text, 'hello xy_z');
//           done();
//         });
//     });
//     // #3
//     test('Send {surname: "Colombo"}', function (done) {
//       chai
//         .request(server)
//         .put('/travellers')
// .send({surname: "Colombo"})
//         .end(function (err, res) {
//           assert.equal(res.status, 200);
//                     assert.equal(res.type, "application/json");
//           assert.equal(res.body.name, "Cristoforo");
//           assert.equal(res.body.surname, "Colombo");


//           done();
//         });
//     });
//     // #4
//     test('Send {surname: "da Verrazzano"}', function (done) {
// chai
//       .request(server)
//       .put("/travellers")
//       .send({surname:"da Verrazzano"})
//       .end((err, res) => {
//         assert.equal(res.status, 200 , "my status")
//         assert.equal(res.type, "application/json", "json response")
//         assert.equal(res.body.name, "Giovanni", "body name response")
//         assert.equal(res.body.surname, "da Verrazzano", "body surname response")
//       })
      
//       done();
//     });
//   });
// });

// const Browser = require('zombie');
// Browser.site = 'https://boilerplate-mochachai.your-username.repl.co';

// suite('Functional Tests with Zombie.js', function () {
//   const browser = new Browser();
//   this.timeout(5000);
  
//   suiteSetup(function(done) {
//   return browser.visit('/', done());
// });
//   suite('Headless browser', function () {
//     test('should have a working "site" property', function() {
//       assert.isNotNull(browser.site);
//     });
//   });

//   suite('"Famous Italian Explorers" form', function () {
//     // #5
//  test('Submit the surname "Cristoforo" in the HTML form', function (done) {
//   browser.fill('surname', 'Colombo').then(() => {
//     browser.pressButton('submit', () => {
//       browser.assert.success();
//       browser.assert.text('span#name', 'Cristoforo');
//       browser.assert.text('span#surname', 'Colombo');
//       browser.assert.elements('span#dates', 1);
//       done();
//     });
//   });
// });
//     // #6
//     test('submit "surname" : "Vespucci" - write your e2e test...', function (done) {
//   browser.fill('surname', 'Vespucci').then(() => {
//     browser.asserts.isOk(res.status, 200)
//     browser.pressButton('submit', () => {
//       browser.assert.success();
//       browser.assert.text('span#name', 'Amerigo');
//       browser.assert.text('span#surname', 'Vespucci');
//       browser.assert.elements('span#dates', 1);
//       done();
//     });
//   });
//       done();
//     });
//   });
// });


// Advances node and express