
const getCountByTen = (num, ind, p) => {
    let f = 0;
    for(let i = 0; i<ind; i++){
        f = num * p + f;
    }
    return f;
};
const calcByFormula = (inputNum, searchDigit) => {
    const numSplit = Math.abs(inputNum).toString().split('').reverse();
    const search = Number(searchDigit);
    console.log('input num =' + inputNum);
    console.log('input search =' + search); 

    let final=0;
    let pow = 0;

    for(let index = 0; index < numSplit.length; index++){
        const currentNum = Number(numSplit[index]);
        console.log('--');
        console.log(`level=${index+1}`);
        console.log(`current=${currentNum}`);

        // norm
        finalByTen = getCountByTen(currentNum, index, pow);
        console.log(`finalByTen=${finalByTen}`);

        pow = Math.pow(10, index) || 1;
        console.log(`pow=${pow}`);

        let addOnCurrentLevel = 0;
        if (numSplit[index] >= search) {
            if (currentNum === search && index + 1 === numSplit.length) {
                console.log('here');
                addOnCurrentLevel = inputNum - currentNum * pow + 1;
            } else {
                addOnCurrentLevel = pow; 
            }
            console.log(`add=${addOnCurrentLevel}`);
        }
        
        final += finalByTen + addOnCurrentLevel; 
        
    }
    console.log(final)
    return final;
};

const calcByBruteForce = (inputNum, search) => {
    console.log('input num =' + inputNum);
    console.log('input search =' + search);
    let countSubN = 0;
    for(let i = 1; i <= inputNum; i++) {
        countSubN = countSubN + i.toString().split('').reduce(
            (accum, item) => item === search.toString() ? accum+1 : accum, 0);
    }
    console.log(JSON.stringify(countSubN));
    return countSubN;
};

const runCalc = () => {
    const resultEl = document.getElementById('result');
    const inputSearchDigit = document.getElementById('searchDigit').value;
    const inputNumber = document.getElementById('inputNumber').value;
    if (inputSearchDigit < 1 || inputSearchDigit > 9 || !inputNumber) {
        resultEl.innerHTML = 'Input data is not correct.';
        return;
    }
    const formulaResult = calcByFormula(inputNumber, inputSearchDigit);
    resultEl.innerHTML = 'result by the formula = ' + formulaResult;

    const bruteForceResult = calcByBruteForce(inputNumber, inputSearchDigit);
    resultEl.innerHTML += '<br>result by brute force = ' + bruteForceResult;

};
