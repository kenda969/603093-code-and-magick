'use strict';

// нахождение селекторов.

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// объявление и заполнение массивов.

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Вальц', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

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

var inputFocusHendler = function (evt) {
    if(evt.target.inputName){
      console.log('работает');
    }
}



inputName.addEventListener('focus', inputFocusHendler, true);

var escKeydownkHendler = function (evt) {
  if (evt.keyCode === ESC) {
    closeWizardBag();
  }
};

var openWizardBag = function () {
  wizardBag.classList.remove('hidden');
  document.addEventListener('keydown', escKeydownkHendler);
};

var closeWizardBag = function () {
  wizardBag.classList.add('hidden');

  wizardBag.removeEventListener('keydown', escKeydownkHendler); //тут
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


