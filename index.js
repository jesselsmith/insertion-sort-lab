function findMinAndRemove(array){
    let min = array[0];
    let minIndex = 0
    array.slice(1).forEach((element, i) => {
        if(element < min){
            min = element;
            minIndex = i + 1;
        }
    })
    array.splice(minIndex, 1);
    return min;
}

function selectionSort(array){
    let sorted = []
    let iterations = array.length
    for(let i = 0; i < iterations; i++) {
        sorted.push(findMinAndRemove(array))
    }
        
    return sorted
}
