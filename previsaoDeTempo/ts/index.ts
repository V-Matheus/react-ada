const form = document.querySelector('#search-form > form');
const input: HTMLInputElement | null =
  document.querySelector('#input-localizacao');

const sectionTempoInfo = document.querySelector('#tempo-info');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  if (!input || !sectionTempoInfo) return;

  const localizacao = input.value;
  if (localizacao.length < 3) {
    alert('O local precisa ter pelo menos 3 letras');
    return;
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=001accd817c12b168516c84a375ba156&lang=pt_br&units=metric`,
  );

  const dados = await response.json();

  const infos = {
    temperatura: Math.round(dados.main.temp),
    local: dados.name,
    icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
  };

  sectionTempoInfo.innerHTML = `
  
<div class="tempo-dados">
<h2>${infos.local}</h2>
<span>${infos.temperatura}º C</span>
</div>

<img src="${infos.icone}">
  `;
});
