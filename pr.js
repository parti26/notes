//Task: averageWordCount
//Write a function averageWordCount(sentences, minLength) that takes an array of strings sentences and an integer minLength.
//The function should return the average number of words (with a length greater than minLength) for each sentence.
//If sentences is empty, the function should return 0.

function averageWordCount(sentences, minLength) {
  if (sentences.length === 0) {
    return 0;
  }
  let totalWords = sentences
    .replace(/[.,\/#?!$%\'^&\*;:{}=\-_`~()]/g, "")
    .split(/\s+/);
  let minLength = 0;
  let averageNumberOfWords = 0;
}

export function averageWordCount(sentences, minLength) {
  // Check if the array of sentences is empty
  if (sentences.length === 0) {
    return 0;
  }

  let totalWords = 0;

  // Iterate over each sentence in the array
  sentences.forEach((sentence) => {
    // Split the sentence into words
    let words = sentence.split(/\s+/);
    // Filter out words that are less than or equal to the minLength
    let validWords = words.filter((word) => word.length > minLength);
    // Add the count of valid words to the totalWords count
    totalWords += validWords.length;
  });

  // Calculate the average by dividing the total valid word count by the number of sentences
  return totalWords / sentences.length;
}

const sentence =
  "A kis kacsa elment furdeni, a malacka meg eszik. En nem tudom mi van.";

console.log(
  sentence.replace(/[.,\/#?!$%\'^&\*;:{}=\-_`~()]/g, "").split(/\s+/)
);

export function averageWordCount(sentences, minLength) {
  if (sentences.length === 0) {
    return 0;
  }

  let totalWords = 0;
  let validSentences = 0;

  for (const sentence of sentences) {
    const words = sentence.split(" ");
    let wordCount = 0;

    for (const word of words) {
      if (word.length > minLength) {
        wordCount++;
      }
    }

    if (wordCount > 0) {
      totalWords += wordCount;
      validSentences++;
    }
  }

  if (validSentences === 0) {
    return 0;
  }

  return totalWords / validSentences;
}



export function findHighestScore(students, subject) {

    if (!Array.isArray(students) || typeof subject !== 'string') {
      throw new Error('Invalid input types');
    }
    if (students.some((item) => typeof item !== 'object' || item === null)) {
      throw new Error('students contains non-object types');
    }
  
    let highestScore = -Infinity;
    let highestScorer = null;
  
    for (const student of students) {
      if (student.hasOwnProperty(subject)) {
        if (student[subject] > highestScore) {
          highestScore = student[subject];
          highestScorer = student.name;
        }
      }
    }
    return highestScorer;
  }
  
  export function averageWordCount(sentences, minLength) {
    if (sentences.length === 0) {
      return 0;
    }
  
    let totalWords = 0;
  
    sentences.forEach((sentence) => {
      const words = sentence.split(/\s+/);
      const count = words.filter((word) => word.length > minLength).length;
      totalWords += count;
    });
    return totalWords / sentences.length;
  }
  
  