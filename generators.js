function* hello() {
  console.log('Hello');
  yield 1;
  console.log('From');
  const value = yield 2;
  console.log(value);
}

const it  = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

//-------------Iterator com generator--------------------

const obj = {
  values: [1, 2, 3, 4],
  *[Symbol.iterator]() {
    for (var i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  }
};

for (let value of obj ) {
  console.log(value);
}
