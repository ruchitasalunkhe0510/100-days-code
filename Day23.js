function vowelsAndConsonants(s) {
  const vowels = "aeiou";
  var consonants = [];
  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }
  console.log(consonants);
}

//factorial code
function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
  console.log(factorial(n));
}
