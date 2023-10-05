/*
Jaden Smith, the son of Will Smith, is the star of films such as
The Karate Kid (2010) and After Earth (2013). Jaden is also known for
some of his philosophy that he delivers via Twitter. When writing on Twitter,
he is known for almost always capitalizing every word.
For simplicity, you'll have to capitalize each word,
check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith.
The strings are actual quotes from Jaden Smith, but they are not capitalized
in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org
*/

String.prototype.toJadenCase = function () {
  let result = [];
  const splitedWords = this.split(" ");

  for (i = 0; i < splitedWords.length; i++) {
    const splitedChars = splitedWords[i].split("");
    splitedChars[0] = splitedChars[0].toUpperCase();
    const joinedChars = splitedChars.join("");
    result.push(joinedChars);
  }
  const joinedresult = result.join(" ");
  return joinedresult;
};
