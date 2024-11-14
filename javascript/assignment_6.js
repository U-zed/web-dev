const form = document.querySelector('.searchForm');
const wordDisplay = document.querySelector('.wordDisplay');
const transcription = document.querySelector('.transcription');
const meaningsDiv = document.querySelector('.meanings');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  // Get the searched word from the input field
  const word = document.querySelector('.word').value;
  
  // Fetch data from the Dictionary API
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  const data = await response.json();
  
  // Clear previous results
  wordDisplay.textContent = '';
  transcription.textContent = '';
  meaningsDiv.innerHTML = '';

  // Display the word and its transcription
  if (data.title === 'No Definitions Found') {
    wordDisplay.textContent = `No definitions found for "${word}". Please try another word.`;
  } else {
    const { word: searchedWord, phonetics, meanings } = data[0];
    wordDisplay.textContent = searchedWord;
    transcription.textContent = phonetics[0]?.text || '';

    // Create HTML content for meanings
    let meaningsHTML = '';
    meanings.forEach(meaning => {
      meaningsHTML += `<p class="partOfSpeech">${meaning.partOfSpeech}</p>`;
      meaning.definitions.forEach(def => {
        meaningsHTML += `<p class="meaning">- ${def.definition}</p>`;
      });
    });
    meaningsDiv.innerHTML = meaningsHTML;
  }
});
