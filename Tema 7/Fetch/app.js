console.log("Hola mundo");

const url = "https://jsonplaceholder.typicode.com/albums";

const url2 = "https://dummyjson.com/users";

const url3 = "https://jsonplaceholder.typicode.com/photos";

function fetcht() {
  return fetch(url)
    .then((response) => response.json())
    .then((jsonData) => jsonData)
    .catch((error) => console.error(error))
    .finally(() => console.log("Finalizado"));
}
// Puedes acceder a la variable 'data' aquí fuera de la función Fetch

async function start() {
  let data = await fetcht();
  return data;
}

console.log(start());
