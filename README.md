# Pokédex

Pokédex interativa que consome a [PokéAPI](https://pokeapi.co/) para exibir informações dos 1.292 Pokémons.

## Funcionalidades

- Exibe o nome e a imagem do Pokémon atual
- Navegação pelos botões **Anterior** e **Próximo**
- Ao chegar no primeiro Pokémon e clicar em Anterior, vai para o último — e vice-versa
- Card com cor dinâmica de acordo com o tipo do Pokémon

## Tecnologias

- HTML, CSS e JavaScript
- Fetch API
- [PokéAPI](https://pokeapi.co/)

## Como executar

Basta abrir o arquivo `index.html` no navegador. Nenhuma instalação necessária.

## API utilizada

| Endpoint | Descrição |
|---|---|
| `/pokemon/?offset=0&limit=1292` | Lista completa de Pokémons |
| `/pokemon/{nome}` | Dados individuais do Pokémon |
