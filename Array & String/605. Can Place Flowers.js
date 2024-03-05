var canPlaceFlowers = function(flowerbed, n) {
    let openSpace = 0;
  
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1])
        {
            flowerbed[i] = 1;
            openSpace++;
        }
    }

    if (openSpace >= n) {
        return true;
    } else {
        return false;
    }
};
