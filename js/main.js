const $agent = document.querySelector('.agent');
const $agentList = document.querySelector('.row');

// function getAgents() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://valorant-api.com/v1/agents');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', () => {
//     const agentList = xhr.response.data;
//     console.log(agentList)
//     for (let i = 0; i < agentList.length; i++) {
//       if (agentList[i].isPlayableCharacter === true) {
//         const $name = document.createElement('ul');
//         $name.textContent = agentList[i].displayName;
//         $name.className = 'agent-name'
//         $agent.append($name);
//         const $agentImage = document.createElement('img');
//         $agentImage.setAttribute('src', agentList[i].displayIcon);
//         $name.append($agentImage);
//       }
//     }
//   })
//   xhr.send();
// }
// getAgents();

//   xhr.addEventListener('load', function () {
//     const pokemonList = xhr.response.results;
//     for (let i = 0; i < pokemonList.length; i++) {
//       const pokemonEntryID = i + 1;

//       const pokemonName = pokemonList[i].name.toUpperCase();
//       const $pokemonName = document.createElement('p');
//       $pokemonName.textContent = `${pokemonName} #${pokemonEntryID}`;

//       const $pokemonImage = document.createElement('img');
//       $pokemonImage.setAttribute('src', imageFolder + allPokemon[i]);
//       $pokemonImage.setAttribute('alt', 'pokemon');

//       const $pokemonHolder = document.createElement('div');
//       $pokemonHolder.className = 'pokemon-name';
//       $pokemonHolder.appendChild($pokemonName);

//       const $column = document.createElement('div');
//       $column.className = 'column-one-fifth' + ' ' + pokemonName;
//       $column.appendChild($pokemonImage);
//       $column.appendChild($pokemonHolder);

//       $row.appendChild($column);
//     }
//   });
//   xhr.send();
// }
