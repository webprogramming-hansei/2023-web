/**
 * 1부터 10까지 랜덤 한 수 생성하기
 */
// Math.floor(Math.random() * 10) + 1

/**
 * 로또 생성 프로그램 만들기
 */
function genrateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + 1;
}

/**
 * case 1
 */
function pickLottoNumbersCase1() {
    var pickNumbers = [];
    for (var i = 0; pickNumbers.length < 6 ; i++) {
        const randNumber = genrateRandomNumber(1, 45);
        if (!pickNumbers.includes(randNumber)) {
            pickNumbers.push(randNumber);
        }        
    }
}

/**
 * case 2
 */
function pickLottoNumbersCase2() {
    var pickNumbers = [];
    var numbers = [];
    for (var i = 1; i <= 45; i++) {
        numbers.push(i);
    }

    for (var i = 0; i < 6; i++) {
        var pickIdx = genrateRandomNumber(0, numbers.length - 1);
        pickNumbers.push(numbers[pickIdx]);
        numbers.splice(pickIdx, 1);
    }    

    return pickNumbers;
}

const button = document.querySelector('#generateLottoNumbersButton');
const ul = document.querySelector('#lottoNumbers');
button.addEventListener('click', function () {
    const numbers = pickLottoNumbersCase2();
    for (var i = 0; i < numbers.length; i++) {
        var color = '';
        if (numbers[i] <= 10) {
            color = 'red';
        } else if (numbers[i] <= 40) {
            color = 'yellow';
        } else {
            color = 'blue';
        }
        
        ul.innerHTML += `<li style="color: ${color}">${numbers[i]}</li>`;
    }
});