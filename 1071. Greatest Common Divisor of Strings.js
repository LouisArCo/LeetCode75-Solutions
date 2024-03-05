var gcdOfStrings = function(str1, str2) {
  let combination1 = str1 + str2;
  let combination2 = str2 + str1;
  let str1Length = str1.length;
  let str2Length = str2.length;
  
  if (combination1 !== combination2) {
    return "";
  } else if (str1Length >= str2Length) {
    while (str2Length !== 0) {
      let temp = str2Length;
      str2Length = str1Length % str2Length;
      str1Length = temp;
    }
    let startOfString = str2.substring(0, str1Length);
    if (str1.startsWith(startOfString)) {
      return startOfString;
    }
  } else if (str2Length > str1Length) {
    return (gcdOfStrings(str2, str1))
  }
};
