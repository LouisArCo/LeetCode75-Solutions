const vowels = ['a', 'e', 'i', 'o', 'u'];
let newVowels = [];
let newVowelsReverse = [];

var reverseVowels = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            newVowels.push(s[i]);
        }
    }
    let newVowelsReverse = newVowels.reverse()
    let resultArray = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i].toLowerCase())) {
            resultArray.push(newVowelsReverse[count]);
            count++;
        } else {
            resultArray.push(s[i]);
        }
    }
    let resultString = resultArray.join('');
    return resultString;
};
