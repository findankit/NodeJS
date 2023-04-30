let todoArray = [
  {
    id: 12,
    name: "abc",
  },
  {
    id: 24,
    name: "def",
  },
  {
    id: 33,
    name: "def",
  },
  {
    id: 45,
    name: "def",
  },
];

let newData = {
  "todo_id": 33,
  "name": "Test",
  "description": "Something"
};
console.log(todoArray);
// find index of id:33
let index = todoArray.findIndex(function(todo) {
  // console.log(todo);
  return todo.id == 45;
});
console.log(index);
// update value of that index
todoArray[index] = newData;
console.log(todoArray);



// // arr.unshift({ id: 3, name: "3rd todo" });
// // console.log(arr);
// // arr.shift();
// // console.log(arr);
// let deleteIndex = null;
// for (let i = 0; i < arr.length; i += 1) {
//   //   console.log(arr[i]);
//   let todo = arr[i];
//   if (todo.id === 33) {
//     deleteIndex = i;
//   }
// }

// console.log(deleteIndex);

// // FINDINDEX
// let findindex = null;
// findindex = arr.findIndex(function (x) {
//   return x.id == 33;
// });
// console.log(`-->`, findindex);

// // let deletedItems = arr.splice(deleteIndex, 1);

// // Using filter instead of arr.splice
// let filteredArray = arr.filter(function (x) {
//   return x.id != 33;
// });

// console.log(filteredArray);


// // console.log(arr);
// // console.log(deletedItems);

// arr[2] = {};

// // let arr2 = new Array(3, "hi");

// // console.log(arr2);

// // Do these todos with array:

// /*
//     1. For Loop over array
//     2. properties:
//        length
    
//     3. methods:
//         push
//         pop
//         shift
//         unshift
//         splice
// */

// // -------------------

// /**
//  * Other methods:
//  * concat()
//  * find()
//  * findIndex()
//  * reverse()
//  * map()
//  * filter()
//  * sort()
//  * forEach()
//  * some()
//  * every()
//  */
