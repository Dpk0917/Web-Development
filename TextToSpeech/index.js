let speech = new SpeechSynthesisUtterance();
let voices = [];

// Get DOM elements
const textInput = document.getElementById('text-input');
const voiceSelect = document.getElementById('voice-select');
const speedRange = document.getElementById('speed-range');
const pitchRange = document.getElementById('pitch-range');
const speakBtn = document.querySelector('.speak-btn');

// Initialize speech synthesis
function initSpeechSynthesis() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';
    
    // Filter and add English voices to the select element
    voices.forEach((voice, i) => {
        if (voice.lang.startsWith('en')) {
            const option = new Option(voice.name + ' (' + voice.lang + ')', i);
            voiceSelect.add(option);
        }
    });

    // Set default voice
    speech.voice = voices[0];
}

// Handle voice changes
window.speechSynthesis.onvoiceschanged = initSpeechSynthesis;

// Update voice when selection changes
voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value];
});

// Update speech rate (speed)
speedRange.addEventListener('input', () => {
    speech.rate = parseFloat(speedRange.value);
});

// Update speech pitch
pitchRange.addEventListener('input', () => {
    speech.pitch = parseFloat(pitchRange.value);
});

// Handle speak button click
speakBtn.addEventListener('click', () => {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();

    // Get text and validate
    const text = textInput.value.trim();
    if (!text) {
        alert('Please enter some text to speak');
        return;
    }

    // Configure speech
    speech.text = text;

    // Add loading state
    speakBtn.classList.add('loading');
    speakBtn.disabled = true;

    try {
        // Start speaking
        window.speechSynthesis.speak(speech);

        // Handle speech end
        speech.onend = () => {
            speakBtn.classList.remove('loading');
            speakBtn.disabled = false;
        };

        // Handle speech error
        speech.onerror = (event) => {
            console.error('Speech error:', event.error);
            speakBtn.classList.remove('loading');
            speakBtn.disabled = false;
            alert('An error occurred while speaking. Please try again.');
        };
    } catch (error) {
        console.error('Speech synthesis error:', error);
        speakBtn.classList.remove('loading');
        speakBtn.disabled = false;
        alert('Failed to start speech synthesis. Please try again.');
    }
});