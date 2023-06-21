let favWord = "favorite";
/**
 * For better understanding
 * we use ? when we want to say that
 * the character used prior or before the symbol
 * is optional.
 * e.g: favou?rite => means that 'u' is optional and it can or can not
 * match
 */
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);