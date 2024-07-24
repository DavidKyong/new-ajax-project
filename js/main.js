const $logo = document.querySelector('.valorant-logo');
const $learnButton = document.querySelector('.learn-button');
const $agentButton = document.querySelector('.agent-button');
const $mapButton = document.querySelector('.maps-button');
const $firstBox = document.querySelector('.first-box');
const $secondBox = document.querySelector('.second-box');
const $thirdBox = document.querySelector('.third-box');
const $agentPage = document.querySelector('.agent-page');
const $agentList = document.querySelector('.agent-list');
const $mapPage = document.querySelector('.map-page');
const $learnPage = document.querySelector('.learn-page');

$logo.addEventListener('click', () => {
  $firstBox.className =
    'first-box row margin-left-1 margin-right-1 margin-top-2';
  $secondBox.className = 'second-box background-red white-font row';
  $thirdBox.className =
    'third-box row margin-top-4 margin-left-1 margin-right-1 margin-bottom-3';
  $learnPage.className = 'learn-page margin-right-1 margin-left-1 hidden';
  $agentPage.className = 'agent-page row hidden';
  $mapPage.className = 'map-page margin-left-1 margin-right-1 hidden';
});

// $agentButton.addEventListener('click', () => {
//   agentPage();
//   callAgents();
// });

$learnButton.addEventListener('click', () => {
  learnPage();
});

$mapButton.addEventListener('click', () => {
  callMaps();
  mapPage();
});

function learnPage() {
  $firstBox.className = 'hidden';
  $secondBox.className = 'hidden';
  $thirdBox.className = 'hidden';
  $learnPage.className = 'learn-page margin-right-1 margin-left-1';
  $agentPage.className = 'hidden';
  $mapPage.className = 'hidden';
}

function agentPage() {
  $firstBox.className = 'hidden';
  $secondBox.className = 'hidden';
  $thirdBox.className = 'hidden';
  $learnPage.className = 'hidden';
  $agentPage.className = 'agent-page';
  $mapPage.className = 'hidden';
}

function mapPage() {
  $firstBox.className = 'hidden';
  $secondBox.className = 'hidden';
  $thirdBox.className = 'hidden';
  $learnPage.className = 'hidden';
  $agentPage.className = 'hidden';
  $mapPage.className = 'map-page margin-right-1 margin-left-1';
}

function callMaps() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/maps');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    console.log(xhr.response.data);
    // looping through the pulled request to append
    // each map into the DOM.
    const mapData = xhr.response.data;
    for (let i = 0; i < mapData.length; i++) {
      // appending the title
      const $mapWrapper = document.createElement('div');
      $mapWrapper.className = 'map-wrapper';

      const $mapNameWrapper = document.createElement('div');
      $mapNameWrapper.className = 'map-name-wrapper';

      const mapName = mapData[i].displayName;
      const $mapName = document.createElement('h3');
      $mapName.textContent = mapData[i].displayName;

      $mapNameWrapper.append($mapName);

      // appending map image
      const $mapImageWrapper = document.createElement('div');
      $mapImageWrapper.className = 'map-image-wrapper margin-top-2';

      const $mapImage = document.createElement('img');
      $mapImage.setAttribute('src', mapData[i].splash);
      $mapImage.className = 'map-image';

      $mapImageWrapper.append($mapImage);

      // appending extra maps
      const $extraMapWrapper = document.createElement('div');
      $extraMapWrapper.className = 'extra-map-wrapper margin-top-1';

      const $extraMapOne = document.createElement('img');
      $extraMapOne.setAttribute('src', mapData[i].displayIcon);
      $extraMapOne.className = 'extra-map-image';

      const $extraMapTwo = document.createElement('img');
      $extraMapTwo.setAttribute('src', mapData[i].stylizedBackgroundImage);
      $extraMapTwo.className = 'extra-map-image';

      const $extraMapThree = document.createElement('img');
      $extraMapThree.setAttribute('src', mapData[i].listViewIconTall);
      $extraMapThree.className = 'extra-map-image';

      $extraMapWrapper.append($extraMapOne);
      $extraMapWrapper.append($extraMapTwo);
      $extraMapWrapper.append($extraMapThree);

      $mapWrapper.append($mapNameWrapper);
      $mapWrapper.append($mapImageWrapper);
      $mapWrapper.append($extraMapWrapper);

      $mapPage.append($mapWrapper);
    }
  });
  xhr.send();
}

// function callAgents() {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://valorant-api.com/v1/agents');
//   xhr.responseType = 'json';
//   xhr.addEventListener('load', () => {
//     const agentData = xhr.response.data;
//     if (agentApiCall.count === 0) {
//       agentApiCall.data = agentData;
//       agentApiCall.count = 1;
//     }

//     for (let i = 0; i < agentData.length; i++) {
//       const agentName = agentData[i].displayName;
//       const $agentName = document.createElement('h3');
//       $agentName.textContent = `${agentName}`;
//       $agentName.className = '';

//       const $agentImage = document.createElement('img');
//       $agentImage.setAttribute('src', agentData[i].displayIcon);
//       $agentImage.className = `${agentName}-image agent-image`;

//       const $imageWrapper = document.createElement('div');
//       $imageWrapper.className = 'image-wrapper';

//       const $agentWrapper = document.createElement('div');
//       $agentWrapper.className = `${agentName}-wrapper agent-display`;

//       const $descriptionWrapper = document.createElement('div');
//       $descriptionWrapper.className = 'description-wrapper';

//       const $description = document.createElement('p');
//       $description.className = 'agent-description margin-right-6';
//       $description.textContent = agentData[i].description;

//       const $abilityTitle = document.createElement('p');
//       $abilityTitle.className = 'ability-title margin-right-6';
//       $abilityTitle.textContent = 'Abilities:';

//       const $abilityWrapper = document.createElement('ul');
//       $abilityWrapper.className = 'ability-wrapper';

//       for (let j = 0; j < agentData[i].abilities.length; j++) {
//         const $abilities = document.createElement('li');
//         $abilities.className = 'margin-right-4';
//         $abilities.textContent = agentData[i].abilities[j].displayName;

//         const $abilityImage = document.createElement('img');
//         $abilityImage.setAttribute(
//           'src',
//           agentData[i].abilities[j].displayIcon,
//         );
//         $abilityImage.className = 'ability-image';

//         $abilities.append($abilityImage);
//         $abilityWrapper.append($abilities);
//       }

//       $imageWrapper.append($agentName);
//       $imageWrapper.append($agentImage);

//       $abilityTitle.append($abilityWrapper);

//       $descriptionWrapper.append($description);
//       $descriptionWrapper.append($abilityTitle);

//       $agentWrapper.append($imageWrapper);
//       $agentWrapper.append($descriptionWrapper);

//       $agentList.appendChild($agentWrapper);
//     }
//   });
//   xhr.send();
// }
