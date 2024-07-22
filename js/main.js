const $agentButton = document.querySelector('.agent-button');
const $firstBox = document.querySelector('.first-box');
const $secondBox = document.querySelector('.second-box');
const $thirdBox = document.querySelector('.third-box');
const $agentPage = document.querySelector('.agent-page');
const $agentList = document.querySelector('.agent-list');

let agentApiCall = {
  count: 0,
  data: {},
};

$agentButton.addEventListener('click', () => {
  homepageHidden();
  callAgents();
});

function homepageHidden() {
  $firstBox.className = 'hidden';
  $secondBox.className = 'hidden';
  $thirdBox.className = 'hidden';
  $agentPage.className = 'agent-page';
}

function callAgents() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://valorant-api.com/v1/agents');
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    const agentData = xhr.response.data;
    if (agentApiCall.count === 0) {
      agentApiCall.data = agentData;
      agentApiCall.count = 1;
    }

    for (let i = 0; i < agentData.length; i++) {
      const agentName = agentData[i].displayName;
      const $agentName = document.createElement('h3');
      $agentName.textContent = `${agentName}`;
      $agentName.className = '';

      const $agentImage = document.createElement('img');
      $agentImage.setAttribute('src', agentData[i].displayIcon);
      $agentImage.className = `${agentName}-image agent-image`;

      const $imageWrapper = document.createElement('div');
      $imageWrapper.className = 'image-wrapper';

      const $agentWrapper = document.createElement('div');
      $agentWrapper.className = `${agentName}-wrapper agent-display`;

      const $descriptionWrapper = document.createElement('div');
      $descriptionWrapper.className = 'description-wrapper';

      const $description = document.createElement('p');
      $description.className = 'agent-description margin-right-6';
      $description.textContent = agentData[i].description;

      const $abilityTitle = document.createElement('p');
      $abilityTitle.className = 'ability-title margin-right-6';
      $abilityTitle.textContent = 'Abilities:';

      const $abilityWrapper = document.createElement('ul');
      $abilityWrapper.className = 'ability-wrapper';

      for (let j = 0; j < agentData[i].abilities.length; j++) {
        const $abilities = document.createElement('li');
        $abilities.className = 'margin-right-4';
        $abilities.textContent = agentData[i].abilities[j].displayName;

        const $abilityImage = document.createElement('img');
        $abilityImage.setAttribute(
          'src',
          agentData[i].abilities[j].displayIcon,
        );
        $abilityImage.className = 'ability-image';

        $abilities.append($abilityImage);
        $abilityWrapper.append($abilities);
      }

      $imageWrapper.append($agentName);
      $imageWrapper.append($agentImage);

      $abilityTitle.append($abilityWrapper);

      $descriptionWrapper.append($description);
      $descriptionWrapper.append($abilityTitle);

      $agentWrapper.append($imageWrapper);
      $agentWrapper.append($descriptionWrapper);

      $agentList.appendChild($agentWrapper);
    }
  });
  xhr.send();
}
