'use strict';

// нахождение селекторов.

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// объявление и заполнение массивов.

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Вальц', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// рандомная сортировка массивов.

var compareRandom = function () {
  return Math.random() - 0.5;
};

WIZARD_FIRST_NAMES.sort(compareRandom);
WIZARD_LAST_NAMES.sort(compareRandom);
coatColor.sort(compareRandom);
eyesColor.sort(compareRandom);

// клонирование шаблона DOM элемента с и внедрение массивов данных.


var wizardItem = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').style.fontSize = '16px';
  wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_FIRST_NAMES[i] + ' ' + WIZARD_LAST_NAMES[i];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor[i];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[i];

  return wizardElement;
};

// Добавление 4х шаблонов в DOM.

var fragment = document.createDocumentFragment();
for (var i = 0; i < 4; i++) {
  fragment.appendChild(wizardItem());
}

similarListElement.appendChild(fragment);


var ENTER = 13;
var ESC = 27;

var wizardBag = document.querySelector('.setup');

var openWizardBagButton = document.querySelector('.setup-open');

var inputName = wizardBag.querySelector('.setup-user-name');

var inputCurrentTarget = null;

var inputFocusHendler = function (evt) {
  inputCurrentTarget = evt.currentTarget;
};
inputName.addEventListener('focus', inputFocusHendler);

var escKeydownkHendler = function (evt) {
  if (inputCurrentTarget !== null && evt.keyCode === ESC) {
    evt.stopPropagation();
  } else if (inputCurrentTarget === null && evt.keyCode === ESC) {
    closeWizardBag();
  }

};
// Взаимодействие пользователя с меню настройками волшебника.
var openWizardBag = function () {
  wizardBag.classList.remove('hidden');
  document.addEventListener('keydown', escKeydownkHendler);
};

var closeWizardBag = function () {
  wizardBag.classList.add('hidden');
  wizardBag.removeEventListener('keydown', escKeydownkHendler);
  closeWizardBagButton.addEventListener('keydown', enterCloseKeydownHendler);
};

var deleteHiddenClickHendler = function () {
  openWizardBag();
};
openWizardBagButton.addEventListener('click', deleteHiddenClickHendler);

var enterOpenKeydownHendler = function (evt) {
  if (evt.keyCode === ENTER) {
    openWizardBag();
  }
};
openWizardBagButton.addEventListener('keydown', enterOpenKeydownHendler);

var closeWizardBagButton = wizardBag.querySelector('.setup-close');

var addHiddenClickHendler = function () {
  closeWizardBag();
};
closeWizardBagButton.addEventListener('click', addHiddenClickHendler);

var enterCloseKeydownHendler = function (evt) {
  if (evt.keyCode === ENTER) {
    closeWizardBag();
  }
};

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.style.cursor = 'pointer';
wizardEyes.style.cursor = 'pointer';
wizardFireball.style.cursor = 'pointer';

var changeWizardCoatClickHendler = function () {
  coatColor.sort(compareRandom);
  wizardCoat.style.fill = coatColor[i];
};
wizardCoat.addEventListener('click', changeWizardCoatClickHendler);


var changeWizardEyesClickHendler = function () {
  eyesColor.sort(compareRandom);
  wizardEyes.style.fill = eyesColor[i];
};
wizardEyes.addEventListener('click', changeWizardEyesClickHendler);


var changeWizardFireballClickHendler = function () {
  fireballColor.sort(compareRandom);
  wizardFireball.style.backgroundColor = fireballColor[i];
};
wizardFireball.addEventListener('click', changeWizardFireballClickHendler);
