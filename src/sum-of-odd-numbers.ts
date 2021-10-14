/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/
/*
function: sumOddNums

parameter: row, number (number of the row we are summing)

return: number
*/
/*
function: consecutiveOddTriangleRow

parameter: row

return: number[] of row values
*/
/*
pseudocode: consecutiveOddTriangleRow

declare variable ODD_POSITION 
set ROW_VALUES to empty array

if ROW is equal to 1:
  set ODD_POSITION to 1
else:
  set ODD_POSITION to (0.5*ROW^2) + (0.5*ROW) + 1

while ROW > 0:
  set ODD_VALUE to (2*ODD_POSITION) - 1
  append ODD_VALUE to ROW_VALUES
  increment ODD_POSITION by 1
  decrement ROW by 1

return ROW_VALUES
*/

/*
pseudocode: sumOddNums

set ROW_VALUES to consecutiveOddTriangleRow(ROW)

set SUM to sum of ROW_VALUES

return SUM

*/

// function consecutiveOddTriangleRow(row: number): number[] {
//   const rowValues: number[] = [];
//   let oddPosition: number;

//   if (row === 1) {
//     oddPosition = 1;
//   } else {
//     oddPosition = ((0.5) * (row ^ 2)) + (0.5 * row) + 1;
//   }

//   console.log(oddPosition)

//   for (let i = row; i > 0; i++) {
//     rowValues.push(2 * oddPosition - 1);
//     oddPosition++;
//   }

//   return rowValues;
// }

/**
 * Numbers in the nth row of this triangle (starting at index 1) (above)
 * @param row - number of the row we are summing
 * @returns the total
 */
function sumOddNums(row: number): number {
  return row * row * row;
}

export default sumOddNums;
