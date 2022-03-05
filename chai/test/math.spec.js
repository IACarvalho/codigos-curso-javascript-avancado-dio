const Math = require('../src/math.js')
const expect = require('chai').expect

describe('Math class', function() {
  it('Sum two numbers', function(done) {
    const math = new Math()
    this.timeout(3000);

    math.sum(5, 5, (value) => {
      expect(value).to.equal(10)
      done()
    })
  })

  it('Object has name property equal to Israel Afonso', function(){

    const obj = {
      name: 'Israel Afonso'
    }

    expect(obj).to.have.property('name').equal('Israel Afonso')
  })

  it.only('Comparing two objects', function() {
    const obj = {
      name: 'Israel Afonso'
    }

    const obj2 = {
      name: 'Israel Afonso'
    }

    expect(obj).to.deep.equal(obj2) // To compare obnject values you need to use deep property
  }) 
})