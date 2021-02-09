function decToBin(dec) {
    return (dec >>> 0).toString(2);
}

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const BINARY = decToBin(N);
    let arrayNumbers = BINARY.split('');
    let countGap = 0;
    let arrayGZero = [];
    let countArrayGZero = 0;

    for (elem of arrayNumbers) {
        if (elem == '0') {
            countGap++;
        }
        if (elem == '1' && countGap > 0) {
            arrayGZero.push(countGap);
            countGap = 0;
        }
        countArrayGZero++;

        if (countArrayGZero == arrayNumbers.length) {
			if (arrayGZero.length == 0) return 0;
            return Math.max(...arrayGZero);
        }
    }
    
}