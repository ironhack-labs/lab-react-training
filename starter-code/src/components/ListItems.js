import React from "react";
//#2
const numbers = [0, 1, 2, 3];
// // #2
// export const listItems = [<li>1</li>, <li>2</li>];
export const listItems = numbers.map(oneNumber => (
  <li key={oneNumber}>{oneNumber}</li>
));
// #1
// const listItems = [<li>1</li>, <li>2</li>];
// // #1
// export { listItems };
