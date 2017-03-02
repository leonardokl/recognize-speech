'use strict';

/* global webkitSpeechRecognition */

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

function recognizeSpeech() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$lang = _ref.lang,
      lang = _ref$lang === undefined ? 'en-US' : _ref$lang,
      _ref$interimResults = _ref.interimResults,
      interimResults = _ref$interimResults === undefined ? false : _ref$interimResults,
      _ref$maxAlternatives = _ref.maxAlternatives,
      maxAlternatives = _ref$maxAlternatives === undefined ? 1 : _ref$maxAlternatives;

  return new Promise(function (resolve, reject) {
    var recognition = new SpeechRecognition();

    recognition.lang = lang;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;

    recognition.start();

    recognition.onresult = function (_ref2) {
      var results = _ref2.results;
      var _results$0$ = results[0][0],
          transcript = _results$0$.transcript,
          confidence = _results$0$.confidence;


      resolve({ transcript: transcript, confidence: confidence });
    };

    recognition.onspeechend = function () {
      recognition.stop();
    };

    recognition.onerror = function (_ref3) {
      var error = _ref3.error;

      reject(error);
    };
  });
}

module.exports = recognizeSpeech;
