const numberToReversedDigits = number => {
    let result = [number];
    return result.toString().split("").reverse().map((e) => parseInt(e));;

  
};

// return arr.map((e) => parseInt(arr[e]));
module.exports = numberToReversedDigits;
