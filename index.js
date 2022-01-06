function removeEveryOther(arr){
    //your code here
    for (var i = 1; i <= arr.length; i += 1) {
        arr.splice(i, 1);
    }
    return arr;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
console.log(removeEveryOther([1, 2])); // [[1, 2]]
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])); // [['Goodbye']]