// // 1. task
// function stringToArray(str) {
//     var wordsArray = str.split(' ');
//     return wordsArray;
//   }
//   var inputString = "Robin Singh";
//   var result = stringToArray(inputString);
//   console.log(result);

// // 2. Task
// function truncate_string(str, num) {
//     var truncatedString = str.substring(0, num);
//     return truncatedString;
//   } 
//   var inputString = "Robin Singh";
//   var numCharacters = 4;
//   var result = truncate_string(inputString, numCharacters);
//   console.log(result);

// // 3. task
// function protect_email(email) {
//     var parts = email.split('@');
//     var username = parts[0];
//     var domain = parts[1];
//     var hiddenUsername = username.substr(0, 5) + '...';  
//     var protectedEmail = hiddenUsername + '@' + domain;
//     return protectedEmail;
//   }  
//   var email = "robin_singh@example.com";
//   var protectedEmail = protect_email(email);
//   console.log(protectedEmail);

// // 4. task
// function repeat_string(str, count) {
//     if (count === undefined) {
//       return "Error in string or count.";
//     }
    
//     if (typeof str !== 'string' || typeof count !== 'number' || count < 0) {
//       return "Error in string or count.";
//     }
  
//     return str.repeat(count);
//   }
  
  
//   console.log(repeat_string('a', 4));
//   console.log(repeat_string('a')); 


// // 5. task
// function search_word(input, word) {
//     var pattern = new RegExp('\\b' + word + '\\b', 'g');
//     var matches = input.match(pattern);
  
//     if (matches) {
//       return "'" + word + "' was found " + matches.length + " times.";
//     } else {
//       return "'" + word + "' was not found.";
//     }
//   }
//   console.log(search_word('The quick brown fox', 'fox'));
//   console.log(search_word('aa, bb, cc, dd, aa', 'aa'));



