/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let i = 0
  let j
  while(i < numArray.length) {
    j = 0
    while(j < numArray.length - i) {
      if(numArray[j] > numArray[j + 1]) {
        [numArray[j], numArray[j+1]] = [numArray[j+1], numArray[j]]
      }
      j++
    }
    i++
  }
}

let arrs = [
  [4, 12, 1, 92, 43, 15, -23, -1, 0],
  [],
  [1,1,1,1,1]
]

arrs.forEach(arr => {
  bubbleSort(arr)
  console.log(arr)
})
