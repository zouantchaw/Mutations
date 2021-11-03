// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation([firstElement, secondElement]) {
  let isPresent = true
  console.log(firstElement)
  console.log(secondElement)

  // convert string into array of characters
  // convert string to lowercase
  let firstElementArr = firstElement.toLowerCase().split('')
  let secondElementArr = secondElement.toLowerCase().split('')
  console.log(firstElementArr)
  console.log(secondElementArr)

  // iterate secondElementArr
  // check if each character is present in firstElementArr
  secondElementArr.forEach(char => {
    let charIndex = firstElementArr.indexOf(char)
    console.log(charIndex)
    if (charIndex === -1) {
      isPresent = false
    }
  })

  return isPresent

}

// procedural
function mutation2(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  console.log(test)
  console.log(target)

  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true
}

// declarative
function mutation3(arr) {
  return arr[1].toLowerCase().split("").every(letter => {
    return arr[0].toLowerCase().indexOf(letter) != -1;
  })
}

// recursive
function mutation4([target, test], i = 0) {
  target = target.toLowerCase();
  test = test.toLowerCase();
  return i >= test.length ? true : !target.includes(test[i]) ? false : mutation([target, test], i + 1)
}

mutation4(["hello", "hey"])