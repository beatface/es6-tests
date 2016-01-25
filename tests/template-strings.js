var expect = require('chai').expect;

describe('template strings', function() {
  it('should be a string', function(){
    var string = `abc`;
    expect(string).to.be.a('string');
  });

  it('can evaluate variables', function() {
    var bar = "baz";
    var string = `foo${bar}`;

    expect(string).to.equal('foobaz');
  });

  it('can excecute a function', function() {
    var string = `the date is: ${new Date()}`;
    var date = new Date();
    expect(string).to.equal('the date is: ' + date);
  });

  it('can evaulate an expression', function() {
    var string = `num is ${1+1}`;
    expect(string).to.equal('num is 2');
  });

  it('can evaluate multi-line strings', function() {
    var string = `hello
world`;
    expect(string).to.equal('hello\nworld');
  });
})
