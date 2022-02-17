const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12345);
  }, 1000);
});

const simpleFunc = async () => {
  const data = await asyncTimer();
  console.log(data);
  const dataPokemon =  await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(resStream  => {
    resStream.json()
  });
  return dataPokemon;
};

simpleFunc().then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
});
