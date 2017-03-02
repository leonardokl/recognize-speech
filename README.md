# RECOGNIZE SPEECH

Minimal library that record the audio from your input device, using the browser SpeechRecognition, and receive it as a Promise

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

## Instaling

```
npm install -S recognize-speech
```

## Usage

``` javascript
// const recognizeSpeech = require('recognize-speech')
import recognizeSpeech from 'recognize-speech'

recognizeSpeech()
  .then(console.log)
  
  //  {
  //    transcript: 'Your speech!'
  //    confidence: 1
  //  }
```

## Options

``` javascript
import recognizeSpeech from 'recognize-speech'

recognizeSpeech({ lang: 'en-US', interimResults: false, maxAlternatives: 1})
  .then(console.log)
  
  //  {
  //    transcript: 'Your speech!'
  //    confidence: 1
  //  }
```
