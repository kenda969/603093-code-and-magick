'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var getRandomElement = function (arr) {
    return arr[getRandom(0, arr.length)];
  };

  wizardCoat.style.cursor = 'pointer';
  wizardEyes.style.cursor = 'pointer';
  wizardFireball.style.cursor = 'pointer';

  var changeWizardCoatClickHendler = function () {
    wizardCoat.style.fill = getRandomElement(coatColor);
  };
  wizardCoat.addEventListener('click', changeWizardCoatClickHendler);

  var changeWizardEyesClickHendler = function () {
    wizardEyes.style.fill = getRandomElement(eyesColor);
  };
  wizardEyes.addEventListener('click', changeWizardEyesClickHendler);

  var changeWizardFireballClickHendler = function () {
    wizardFireball.style.backgroundColor = getRandomElement(fireballColor);
  };
  wizardFireball.addEventListener('click', changeWizardFireballClickHendler);

})();
