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

$agentButton.addEventListener('click', () => {
  agentPage();
  callAgents();
});

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

function callAgents() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const agentData = xhr.response.data;
    for (let i = 0; i < agentData.length; i++) {
      const $agentWrapper = document.createElement('div');
      $agentWrapper.className = 'agent-wrapper';

      // rendering agent name
      const $agentNameWrapper = document.createElement('div');
      $agentNameWrapper.className = 'agent-name';

      const $agentName = document.createElement('h4');
      $agentName.textContent = agentData[i].displayName;

      // rendering agent image
      const $agentImageWrapper = document.createElement('div');
      $agentImageWrapper.className = 'agent-image';

      const $agentImage = document.createElement('img');
      $agentImage.setAttribute('src', agentData[i].displayIcon);

      // rendering agent description
      const $agentDescriptionWrapper = document.createElement('div');
      $agentDescriptionWrapper.className = 'agent-description';

      const $agentDescription = document.createElement('p');
      $agentDescription.textContent = agentData[i].description;

      $agentDescriptionWrapper.append($agentDescription);

      // rendering agent abilities
      const $abilityWrapper = document.createElement('div');
      $abilityWrapper.className = 'abilityWrapper';

      $agentDescriptionWrapper.append($abilityWrapper);

      for (let j = 0; j < 4; j++) {
        const $abilityImage = document.createElement('img');
        $abilityImage.setAttribute(
          'src',
          agentData[i].abilities[j].displayIcon,
        );
        $abilityImage.className = 'ability-image';
        $abilityWrapper.append($abilityImage);
      }
      $agentNameWrapper.append($agentName);
      $agentNameWrapper.append($agentImageWrapper);

      $agentImageWrapper.append($agentImage);

      $agentDescriptionWrapper.append($agentDescription);
      $agentDescriptionWrapper.append($abilityWrapper);

      $agentWrapper.append($agentNameWrapper);
      $agentWrapper.append($agentDescriptionWrapper);

      $agentPage.append($agentWrapper);
    }
  });
  xhr.send();
}
