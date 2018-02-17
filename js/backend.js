'use strict';
(function () {

  var URL = 'https://js.dump.academy/code-and-magick/data';

  window.load = function (onload, onError) {

  };

  window.save = function (data, onload, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });

    xhr.open('POST', URL);
    xhr.send(data);
  }
})();