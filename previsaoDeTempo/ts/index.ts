const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null =
  document.querySelector('#input-localizacao');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!input) return;

  const localizacao = input.value;
  if (localizacao.length < 3) {
    alert('O local precisa ter pelo menos 3 letras');
    return;
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=001accd817c12b168516c84a375ba156&lang=pt_br&units=metric`,
  );

  const dados = await response.json();
  console.log(dados);
  
});
