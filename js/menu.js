'use strict';
(function () {


  var ENTER = 13;
  var ESC = 27;
  window.wizardBag = document.querySelector('.setup');
  var wizardForm = window.wizardBag.querySelector('form');
  var openWizardBagButton = document.querySelector('.setup-open');
  var closeWizardBagButton = window.wizardBag.querySelector('.setup-close');
  var inputName = window.wizardBag.querySelector('.setup-user-name');
  var wizardBagMove = window.wizardBag.querySelector('.upload');
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
    window.wizardBag.classList.remove('hidden');
    window.wizardBag.querySelector('.setup-similar').classList.remove('hidden');
    document.addEventListener('keydown', escKeydownkHendler);
  };

  var closeWizardBag = function () {
    window.wizardBag.classList.add('hidden');
    window.wizardBag.removeEventListener('keydown', escKeydownkHendler);
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

  var addHiddenClickHendler = function () {
    closeWizardBag();
  };
  closeWizardBagButton.addEventListener('click', addHiddenClickHendler);

  var enterCloseKeydownHendler = function (evt) {
    if (evt.keyCode === ENTER) {
      closeWizardBag();
    }
  };

    // перетаскивание меню
  wizardBagMove.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.wizardBag.style.top = (window.wizardBag.offsetTop - shift.y) + 'px';
      window.wizardBag.style.left = (window.wizardBag.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var preventDefaultClickHandler = function (drEvt) {
          drEvt.preventDefault();
          wizardBagMove.removeEventListener('click', preventDefaultClickHandler);
        };
        wizardBagMove.addEventListener('click', preventDefaultClickHandler);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

  });

  // Реализация кнопки сохранить
  wizardForm .addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.wizardError();
    var data = new FormData(wizardForm);
    var onLoad = function () {
      closeWizardBag();
    };
    window.backend.save(data, onLoad);
  });
})();
