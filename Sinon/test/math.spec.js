const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

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

  it('Comparing two objects', function() {
    const obj = {
      name: 'Israel Afonso'
    }

    const obj2 = {
      name: 'Israel Afonso'
    }

    expect(obj).to.deep.equal(obj2) // To compare obnject values you need to use deep property
  })
  
  it.only('Calls a req with sum and index values', function() {
    const req = {}
    const res = {
      load: sinon.spy()
    }
    const math = new Math()

    math.printSum(req, res, 5, 5)

    expect(res.load.calledOnce).to.be.true
  })
})