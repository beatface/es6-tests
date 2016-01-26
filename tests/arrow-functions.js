var expect = require('chai').expect;

describe('arrow functions', function() {
  it('is shorter to write', function() {
    var fn = () => {
      return 'hello world';
    };
    expect(fn()).to.equal('hello world');
  });

  it('one parameter can be written without parens', function() {
    var fn = name => {
      return `hello ${name}`;
    }
    expect(fn("Emma")).to.equal('hello Emma');
  });

  it('binds "this" to the function', function() {
    this.testVar = "test!";
    var fn = () => {
      return this.testVar;
    }
    expect(fn()).to.equal('test!');
  });
});

describe('block scoping', function() {
  it('binds the let var to the block scope', function() {
    function testFn() {
      "use strict";
      let x = 31;
      if (true) {
        let x = 71;
        console.log(x);
      }
      return x;
    }
    expect(testFn()).to.equal(31);
  });

  it('creates a read-only const declaration', function() {
    const myVar = 10;
    myVar = 25;
    expect(myVar).to.equal(10);
  });
});

describe('destructuring', function() {
  it('runs a destructuring array statement', function() {
    "use strict";
    let x = [12, 24, 42];
    let [some, cool, stuff] = x;
    expect(some).to.equal(12);
    expect(cool).to.equal(24);
    expect(stuff * 2).to.equal(84);
  });

  it('runs a destructuring object statement', function() {
    "use strict";
    let y = {name: "Emma", last: "Beaton", age: 25};
    let {name, last, age} = y;
    expect(name).to.equal("Emma");

    let {name: first, last: surname, age: years} = y;
    expect(surname).to.equal("Beaton");
  });
});
