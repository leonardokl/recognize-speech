'use strict';var SpeechRecognition=SpeechRecognition||webkitSpeechRecognition;function recognizeSpeech(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.lang,c=b===void 0?'en-US':b,d=a.interimResults,f=a.maxAlternatives,g=f===void 0?1:f;return new Promise(function(h,i){var j=new SpeechRecognition;j.lang=c,j.interimResults=d!==void 0&&d,j.maxAlternatives=g,j.start(),j.onresult=function(k){var l=k.results,m=l[0][0],n=m.transcript,o=m.confidence;h({transcript:n,confidence:o})},j.onspeechend=function(){j.stop()},j.onerror=function(k){var l=k.error;i(new Error(l))}})}module.exports=recognizeSpeech;
