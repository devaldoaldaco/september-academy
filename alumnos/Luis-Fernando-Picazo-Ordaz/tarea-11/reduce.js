
function reduce(array, callback, initialValue = 0) {

    let accumulator = initialValue;
    let currentValue = 0;
    let operation = 0;
    
    for (let i = 0; i < array.length; i++) { 
        accumulator += array[i];
        currentValue = array[i+1];
        
        if (isNaN(currentValue)) {
            break
        }
        operation = callback(accumulator, currentValue)
    }
    return operation
}


const numbers = [10,11,12]

const res = reduce(numbers, (accumulator, currentValue) => {
    return accumulator + currentValue
}, 0);

console.log(res);