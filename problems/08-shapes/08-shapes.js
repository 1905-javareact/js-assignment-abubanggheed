/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let line = ''
  switch (shape) {
    case 'Square':
      for (let j = 0; j < height; j++) {
        line += character
      }
      for (let i = 0; i < height; i++) {
        console.log(line)
      }
      break;
    case 'Tryangle':
      for (let i = 0; i < height; i++) {
        line += character
        console.log(line)
      }
      break;
    case 'Diamond':
      let centerIndex = Math.ceil(height / 2)
      for (let i = 0; i <= height; i++) {
        line = ''
        for (let j = 0; j <= height; j++) {
          line += (Math.abs(i - centerIndex) + Math.abs(j - centerIndex) < centerIndex) ?
          character : ' '
        }
        console.log(line)
      }
      break;
    default:
      break;
  }
}

let shapes = [
  {
    type: 'Square',
    height: 4,
    char: 'ii'
  },
  {
    type: 'Tryangle',
    height: 8,
    char: ','
  },
  {
    type: 'Diamond',
    height: 5,
    char: '!'
  },
  {
    type: 'Diamond',
    height: 7,
    char: 'b'
  },
]

shapes.forEach(shape => {
  printShape(shape.type, shape.height, shape.char)
})
