// ! Get Percentage Codewars 

/*
function getPercentage(sent, limit) {
    if (sent === 0 || limit === 0)
        return "No e-mails sent";
    else if (sent === limit)
        return "Daily limit is reached"

    let onePercent = limit / 100;
    let percent = sent / onePercent;
    let floatToNum = Math.trunc(percent);
    return floatToNum + "%";
}

let res =  getPercentage(256, 300);
console.log(res);
*/

// ! Find Missing numbers

/*
function findMissingNumbers(arr) {
    if (arr.length === 0) {
        return [];
    }

    let maximumNum = Math.max(...arr);
    let minimumNum = Math.min(...arr);
    let numbersBetweenMaxAndMin = [];
    for (let i = minimumNum; i <= maximumNum; i++) {
        numbersBetweenMaxAndMin.push(i)
    }

    let finalArr = [];


    for (let i = 0; i <= numbersBetweenMaxAndMin.length-1; i++) {
        if (!arr.includes(numbersBetweenMaxAndMin[i])) {
            finalArr.push(numbersBetweenMaxAndMin[i]);
            console.log(finalArr);
        }
    }

    return finalArr;
}

let res = findMissingNumbers([1,2,3]);
console.log(res);
*/