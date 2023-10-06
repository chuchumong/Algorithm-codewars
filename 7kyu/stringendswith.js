/*
Complete the solution so that it returns true
if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

function solution(str, ending){
  const longStringLength = str.length - 1;
  const shortStringLength = ending.length - 1;

  for (let i = shortStringLength; i >= 0; i--) {
    if(str[longStringLength - i] !== ending[shortStringLength - i]) {
      return false;
    }
  } return true;
}
