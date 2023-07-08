function translateToPigLatin(input) {
  //Split the input into an array of words
  var words = input.trim().split(' ');

  //Initialize an empty array to store the translated words
  var translatedWords = [];

  //Iterate through each word
  for (var i = 0; i < words.length; i++) {
    var word = words[i].toLowerCase(); // Convert the word to lowercase for easier comparison

    //Check if the word is valid for translation
    if (word.length <= 1 || !/^[a-zA-Z]+$/.test(word)) {
      // Print a message for invalid words
      console.log("Cannot translate: " + words[i]);
      continue;
    }

    //Check the first letter of the word
    var firstLetter = word[0];

    //Perform the appropriate translation based on the rules
    if (isVowel(firstLetter)) {
      //Word begins with a vowel
      translatedWords.push(word + "way");
    } else if (isConsonant(firstLetter)) {
      //Word begins with a consonant
      var secondLetter = word[1];

      if (isConsonant(secondLetter)) {
        //Word begins with two consonants
        translatedWords.push(word.slice(2) + firstLetter + secondLetter + "ay");
      } else {
        //Word begins with one consonant
        translatedWords.push(word.slice(1) + firstLetter + "ay");
      }
    }
  }

  //Join the translated words back into a sentence
  var translatedSentence = translatedWords.join(' ');

  //Print the translated sentence
  console.log("Translated sentence: " + translatedSentence);
}

//Function to check if a letter is a vowel
function isVowel(letter) {
  return ['a', 'e', 'i', 'o', 'u'].includes(letter);
}

//Function to check if a letter is a consonant
function isConsonant(letter) {
  return /^[bcdfghjklmnpqrstvwxyz]$/i.test(letter);
}

//Example usage
var input = "apple makes phones";
translateToPigLatin(input);

//Name: Mohammed Ali
//Data: 07/07/2023
