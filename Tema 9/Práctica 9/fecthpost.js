// const numero1 = document.getElementById("val1");
// console.log(numero1.value);

// const data = { val1: numero1, val2: numero2 };
// const dataJson = JSON.stringify(data);

// const options = { method: "POST", body: dataJson };

// fetch("ServidorPOST", options).then((response) => console.log(response));

// const options = {
//   method: "POST",
//   body: dataJson,
//   headers: {
//     token: token,
//   },
// };

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(formulario);
  let formData = new FormData(formulario);

  const token = formData.get("token");
  const numero1 = formData.get("val1");
  const numero2 = formData.get("val2");

  const data = { val1: numero1, val2: numero2 };
  const dataJson = JSON.stringify(data);

  const options = {
    method: "POST",
    body: formData,
    headers: {
      token: 123,
    },
  };

  fetch("ServidorPOST.php", options).then((response) =>
    console.log(response.json())
  );
});
