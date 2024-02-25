const oddNum = [1, 3, 5, 7, 9]
// const evenNum = []
// function oddNumber(oddNums) {
//     for (const oddNum of oddNums) {
//         // console.log(oddNum);
//         const evenNumber = oddNum + 1
//         evenNum.push(evenNumber)

//     }
//     console.log(evenNum);
// }
// oddNumber(oddNum)

// function evenNums(oddNum) {
//     const evenNumber = oddNum + 1

// }

const evenNum = oddNum.map(num => num + 1)
console.log(`${oddNum} is convert even number: ${evenNum}`);