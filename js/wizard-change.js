'use strict';
(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var wizardFireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.style.cursor = 'pointer';
  wizardEyes.style.cursor = 'pointer';
  wizardFireball.style.cursor = 'pointer';

  var changeWizardCoatClickHendler = function () {
    window.coat().sort(window.compareRandom);
    wizardCoat.style.fill = window.coat().i;
  };
  wizardCoat.addEventListener('click', changeWizardCoatClickHendler);


  var changeWizardEyesClickHendler = function () {
    window.eyes().sort(window.compareRandom);
    wizardEyes.style.fill = window.eyes().i;
  };
  wizardEyes.addEventListener('click', changeWizardEyesClickHendler);


  var changeWizardFireballClickHendler = function () {
    window.fireball().sort(window.compareRandom);
    wizardFireball.style.backgroundColor = window.fireball().i;
  };
  wizardFireball.addEventListener('click', changeWizardFireballClickHendler);

});
