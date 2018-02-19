'use strict';
(function () {
  // нахождение селекторов.
  var i;
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var wizardBagShop = document.querySelector('.setup-artifacts-shop');
  var wizardBagArtifactsElement = document.querySelector('.setup-artifacts');

  // клонирование шаблона DOM элемента с и внедрение массивов данных.
  var wizardItem = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').style.fontSize = '16px';
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  // Добавление 4х шаблонов в DOM.

  var fragment = document.createDocumentFragment();
  window.backend.load(function (wizards) {
    for (i = 0; i < 4; i++) {
      fragment.appendChild(wizardItem(wizards[i]));
    }

    similarListElement.appendChild(fragment);

  });

  window.backend.load(function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; 400px; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '20px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  });

  // Перетаскивание предметов из магазина в мешок
  var draggetItem = null;

  wizardBagShop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggetItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      wizardBagArtifactsElement.style.outline = '2px dashed red';
    }
  });

  wizardBagArtifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  wizardBagArtifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    wizardBagArtifactsElement.style.outline = '';
    evt.target.appendChild(draggetItem);
    evt.preventDefault();
  });


  wizardBagArtifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  wizardBagArtifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

})();
