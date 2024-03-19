// Fetch api

// then e catch
fetch('https://viacep.com.br/ws/01001000/json/')
  .then((response) => {
    response.json().then((dados) => console.log(dados));
  })
  .catch((err) => {
    console.log(err);
  });