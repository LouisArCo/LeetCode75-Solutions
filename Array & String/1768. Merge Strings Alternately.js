var mergeAlternately = function(word1, word2) {
    let mergedWord = [];

    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            mergedWord.push(word1[i]);
        }
        if (i < word2.length) {
            mergedWord.push(word2[i]);
        }
    }

    return mergedWord.join('');
};
