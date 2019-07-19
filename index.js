$(function() {
  function numberRandom(max, min) {
    var numMax = max | 0;
    var numMin = min | 0;
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  function penalStyle(rightMax, rightMin, bottomMax, bottomMin, petalIndex) {
    let petalStyle =
      'bottom: ' +
        numberRandom(bottomMax, bottomMin) +
      'vw; right: ' +
        numberRandom(rightMax, rightMin) +
      'vw; background: linear-gradient(45deg, #fff, #fae4f1);';
    if (petalIndex % 2 == 0) {
      petalStyle =
        'bottom: ' +
          numberRandom(bottomMax, bottomMin) +
        'vw; right: ' +
          numberRandom(rightMax, rightMin) +
        'vw; background: linear-gradient(45deg, #fff, #dda8c6);';
    }
    return petalStyle;
  }

  for (let petalIndex = 0; petalIndex < 550; petalIndex ++) {
    let petal = document.createElement('div');
    petal.className = 'petal';
    if (petalIndex < 30) {
      petal.style = penalStyle(7.5, 6.9, 6, 2.3, petalIndex);
    } else if (petalIndex >= 30 && petalIndex < 160) {
      petal.style = penalStyle(6.8, 5.3, 8, 1, petalIndex);
    } else {
      petal.style = penalStyle(5.2, 0, 9.5, -0.8, petalIndex);
    }
    
    $('#flower').append(petal);
  }

  // 一棵棵草
  for (let grassIndex = 0; grassIndex < 100; grassIndex ++) {
    let grass = document.createElement('div');
    grass.className = 'grass';
    if (grassIndex != 0) {
      grass.style = 'left: ' + grassIndex + 'vw';
    }
    $('#lawn').append(grass);
  }
})
