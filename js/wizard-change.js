'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.style.cursor = 'pointer';
  wizardEyes.style.cursor = 'pointer';
  wizardFireball.style.cursor = 'pointer';

  var changeWizardCoatClickHendler = function () {

    wizardCoat.style.fill = window.coat();
  };
  wizardCoat.addEventListener('click', changeWizardCoatClickHendler);


  var changeWizardEyesClickHendler = function () {

    wizardEyes.style.fill = window.eyes();
  };
  wizardEyes.addEventListener('click', changeWizardEyesClickHendler);


  var changeWizardFireballClickHendler = function () {
    wizardFireball.style.backgroundColor = window.fireball();
  };
  wizardFireball.addEventListener('click', changeWizardFireballClickHendler);

  // объявление и заполнение массивов.
  //
  // var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Вальц', 'Топольницкая', 'Нионго', 'Ирвинг'];
  //
  // window.fireball = function () {
  //   var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  //   var fireballColorRand = fireballColor.sort(window.compareRandom);
  //   return fireballColorRand[i];
  // };
  //
  // window.coat = function () {
  //   var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  //   var coatColorRand = coatColor.sort(window.compareRandom);
  //   return coatColorRand[i];
  // };
  //
  // window.eyes = function () {
  //   var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  //   var eyesRand = eyesColor.sort(window.compareRandom);
  //   return eyesRand[i];
  // };
  //
  //
  //
  // // рандомная сортировка массивов.
  //
  // window.compareRandom = function () {
  //   return Math.random() - 0.5;
  // };
  //
  // WIZARD_FIRST_NAMES.sort(window.compareRandom);
  // WIZARD_LAST_NAMES.sort(window.compareRandom);

})();
