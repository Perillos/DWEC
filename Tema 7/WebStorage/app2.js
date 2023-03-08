console.log("app2.js");

localStorage.setItem("pato", "aparato");

const aparato = localStorage.getItem("pato");

console.log(aparato);

const guardarCoche = () => {
  const matricula = document.getElementById("matricula").value;
  const color = document.getElementById("color").value;
  const data = { matricula: matricula, color: color };

  localStorage.setItem("cochee", data);

  console.log(localStorage.getItem("cochee"));
};

const marvel = {
  spiderman: "Peter Parker",
  ironman: "Tony Stark",
  hulk: "Bruce Banner",
  thor: "Thor Odinson",
};
marvel.json

localStorage.setItem("marlev", marvel);

console.log(localStorage.getItem("marvel"));
