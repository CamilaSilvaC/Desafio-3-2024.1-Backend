// Cores por tipo 
const coresPorTipo = {
  fire:     { bg: '#fd7d24', gradient: 'linear-gradient(160deg, #ffb347 0%, #fd7d24 50%, #c94b00 100%)' },
  water:    { bg: '#4592c4', gradient: 'linear-gradient(160deg, #7bbfe8 0%, #4592c4 50%, #1a6fa3 100%)' },
  grass:    { bg: '#78c850', gradient: 'linear-gradient(160deg, #a8e06a 0%, #78c850 50%, #5aab37 100%)' },
  electric: { bg: '#f8d030', gradient: 'linear-gradient(160deg, #ffe066 0%, #f8d030 50%, #c8a800 100%)' },
  psychic:  { bg: '#f85888', gradient: 'linear-gradient(160deg, #ffaac8 0%, #f85888 50%, #c4205e 100%)' },
  ice:      { bg: '#98d8d8', gradient: 'linear-gradient(160deg, #cdf0f0 0%, #98d8d8 50%, #60b8b8 100%)' },
  dragon:   { bg: '#7038f8', gradient: 'linear-gradient(160deg, #a876ff 0%, #7038f8 50%, #4400cc 100%)' },
  dark:     { bg: '#705848', gradient: 'linear-gradient(160deg, #9e8070 0%, #705848 50%, #3d2e1e 100%)' },
  fighting: { bg: '#c03028', gradient: 'linear-gradient(160deg, #e06858 0%, #c03028 50%, #881000 100%)' },
  poison:   { bg: '#a040a0', gradient: 'linear-gradient(160deg, #cc70cc 0%, #a040a0 50%, #6e1a6e 100%)' },
  ground:   { bg: '#e0c068', gradient: 'linear-gradient(160deg, #f0dca0 0%, #e0c068 50%, #b09028 100%)' },
  rock:     { bg: '#b8a038', gradient: 'linear-gradient(160deg, #d8c870 0%, #b8a038 50%, #806810 100%)' },
  bug:      { bg: '#a8b820', gradient: 'linear-gradient(160deg, #d0e050 0%, #a8b820 50%, #788000 100%)' },
  ghost:    { bg: '#705898', gradient: 'linear-gradient(160deg, #a888cc 0%, #705898 50%, #3e2860 100%)' },
  steel:    { bg: '#b8b8d0', gradient: 'linear-gradient(160deg, #dcdcec 0%, #b8b8d0 50%, #8888a8 100%)' },
  fairy:    { bg: '#ee99ac', gradient: 'linear-gradient(160deg, #ffccdd 0%, #ee99ac 50%, #cc5577 100%)' },
  flying:   { bg: '#a890f0', gradient: 'linear-gradient(160deg, #d0c0ff 0%, #a890f0 50%, #7060c0 100%)' },
  normal:   { bg: '#a8a878', gradient: 'linear-gradient(160deg, #cccca0 0%, #a8a878 50%, #787850 100%)' },
};

let listaPokemon = [];
let indexAtual = 0;

// Lista completa de pokémons 
async function carregarLista() {
  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1292');
  const dados = await resposta.json();
  listaPokemon = dados.results;
  exibirPokemon(indexAtual);
}

// Informações pokemon atual
async function exibirPokemon(index) {
  const nomePokemon = listaPokemon[index].name;

  const resposta = await fetch('https://pokeapi.co/api/v2/pokemon/' + nomePokemon);
  const dados = await resposta.json();

  const nome = dados.name;
  const numero = dados.id;
  const imagem = dados.sprites.front_default;
  const tipoPrincipal = dados.types[0].type.name;


  document.getElementById('pokemon-name').textContent = nome;
  document.getElementById('pokemon-number').textContent = '#' + String(numero).padStart(3, '0');



  const imgEl = document.getElementById('pokemon-image');
  imgEl.classList.add('loading');
  imgEl.src = imagem;
  imgEl.alt = nome;
  imgEl.onload = function() {
    imgEl.classList.remove('loading');
  };

 
  const cores = coresPorTipo[tipoPrincipal] || coresPorTipo['normal'];
  const cardInner = document.querySelector('.card-inner');
  cardInner.style.setProperty('--card-bg', cores.bg);
  cardInner.style.backgroundImage = cores.gradient;
}


function anterior() {
  if (indexAtual === 0) {
    indexAtual = listaPokemon.length - 1;
  } else {
    indexAtual = indexAtual - 1;
  }
  exibirPokemon(indexAtual);
}


function proximo() {
  if (indexAtual === listaPokemon.length - 1) {
    indexAtual = 0;
  } else {
    indexAtual = indexAtual + 1;
  }
  exibirPokemon(indexAtual);
}

carregarLista();