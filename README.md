# Anotações

## Symbols e Iterators

**Symbol** é um tipo primitivo implementado a partir do ES6;

Symbols são usados para gerar identificadores;

Um symbol nunca é igual outro, é um identificador único;

Passar uma string para parâmetro de um symbol não altera o valor, apenas servirá para identificar o symbol;
```js
const uniqueID = Symbol();

const uniquiId2 = Symbol('Hello');
```

Um symbol pode ser usado para gerar propriedades privadas, ou quase.

Não chega de fato a ser uma propriedade privada, pois de fato pois existe métodos de acessar o valor de Symbol. Mas serve de alerta para os devs do projeto que aquela propriedade deve ser tratada como privada;
```js
const uniqueId = Symbol('Hello');
const obj = {
  [uniqueId]: 'Hello',
};

console.log(obj); // Não mostrará o item do objeto
```
Symbols possuem uma série de propriedades que são conhecidas como well knnown symbols;
  - .iterator
  - .split
  - .toPrimitive
  - .toStringTag  

Esses **well known symbols** podem ser usados para adicionar meta propriedades para objetos;
```js
const obj {
  [Symbol.iterator](){}
}
```

Arrays e strings já possuem a propriedade iterator;

Iterator é uma interface para consumir pass-a-passo uma lista, uma estrutura de dados
```js
const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```
Graças as well known symbols posso adicionar funcionalidades como o iterator para objetos;

## Generators

São funções com pausam que despausam e retornam valores através da interface de iterators;

```js
function* hello(){
  console.log('Hello');
  yield 1;
  console.log('From');
  const value = yield 2;
  console.log(value);
}
```
O asterisco após a palavra reservada **function** possibilita o usar o **yield**;

A palavra reservado **yield** pausa a função e executa o restante quando a função for invocada novamente ao passar **.next()**;

Eu posso passar um valor na chamada da função e recuperar pelo **yield**;

Usando generators torna-se mais simples ainda trabalhar com metadados e transforma um objeto em um objeto iterável;

## Call back e promises

Antes do  ES6 era extremamente verboso e de difícil manutenção lidar com callback functions;
```js
function doSomething(callback) {
  setTimeout(function() {
    // did something
    callback('First data');
  }, 1000);
}

function doOtherThing (callback) {
  setTimeout(function() {
    // did other thing
    callback('Second data');
  }, 1000);
}

function doAll() {
  try {
    doSomething(function(data) {
      var processedData = data.split('');
      try {
        doOtherThing(function(data2) {
          var processedData2 = data2.split('');

          try {
            setTimeout(function() {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            // handle error
          }
        });
      } catch(err) {
        // handle error
      }
    });
  } catch (err){
    // handle error
  }
}

doAll();
```

Primises tem 3 estados: **pending, fulfilled e rejected**;

- Pending: Está em execução
- Fulfilled: Quando terminou de executar
- rejected: Caso ocorra algum erro

```js
console.log(doSomethingPromise); // pending
```
Para executar uma promise usa-se a função **.then**;

```js
doSomethingPromise(console.log(data)); // some text
```

Para tratar o erro usa-se a função **.catch(() => {})**. Sendo assim o try catch não é necessário;

Promises podem ser encadeadas, bastar passar a segunda no .then da primeira e passar mais um .then  para a segunda;

Promises são executadas de forma sequência, mas pode-se chamar várias usando o médodo **Promise.all**;

```js
Promise.all([soSomethingPromise(), doOtherThingPromise()]).then(data => console.log(data));
```

Ao usar o Promise.all se houver alguma promise com erro não será executada nenhuma;

Uma outra alternativa para lidar com múltiplas promises é é usando o método **Promise.race**. Esse método irá executar a promise que resolver primeiro.

## Async await
É uma forma de criar promises de maneira mais simples, e de lidar com promises encadeadas de maneira simples e enxuta.

O **async** normalmente vem acompanhado do **await**, que serve para forçar a aguardar que a promise seja resolvida.

## EventEmitter
 *Funciona apenas no NodeJS*
Para usa o **EventEmitter** basta importar o módulo nativo do NodeJS **events**

```js
const EventEmitter = require('events')
const eventEmitter = EventEmitter()
```

O objeto instanciado tem, além de vários outros, os métodos **on** e **emit**

* emit -> É usado para "triggar" o evento.
* on -> É usado para criar uma função callback que será chamada quando o evento for "triggado"

```js
eventEmitter.on('start', () => {
  console.log('started')
})

eventEmitter.emit('start')
```

*É possível também passar dados como parâmetro do emit*
