// const bubbleSort = (array) => {
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j < array.length - 1; j++) {
//             if(array[j] > array[j + 1]) {
//                 let swap = array[j];
//                 array[j] = array[j + 1]
//                 array[j + 1] = swap;
//             }
//         }
//     }
//     return array;
// };

// const swap = (array, i, j) => {
//     let swap = array[i];
//     array[i] = array[j]
//     array[j] = swap;
//     return array;
// };

// const listaCalificaciones = [10,2,3,6,7,9,0];

// console.log(bubbleSort(listaCalificaciones));

// // i 0 j 1
// // i 0 j 2
// // i 0 j 3
// // i 0 j 4
// // i 0 j 5
// // i 0 j 6

// console.log(window);

import {MyButton} from './my-button.js'; // ES Modules

customElements.define('my-button', MyButton); // customElements
