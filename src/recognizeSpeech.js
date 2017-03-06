/* globals webkitSpeechRecognition, SpeechRecognition */

const SpeechRecognition = SpeechRecognition || webkitSpeechRecognition

function recognizeSpeech ({ lang = 'en-US', interimResults = false, maxAlternatives = 1 } = {}) {
  return new Promise((resolve, reject) => {
    const recognition = new SpeechRecognition()

    recognition.lang = lang
    recognition.interimResults = interimResults
    recognition.maxAlternatives = maxAlternatives

    recognition.start()

    recognition.onresult = ({ results }) => {
      const { transcript, confidence } = results[0][0]

      resolve({ transcript, confidence })
    }

    recognition.onspeechend = () => {
      recognition.stop()
      reject(new Error('no-speech'))
    }

    recognition.onerror = ({ error }) => {
      reject(new Error(error))
    }
  })
}

module.exports = recognizeSpeech
