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

Usando generators torna-se mais simples ainda trabalhar com metadados e transforma um objeto em um objeto iterável
