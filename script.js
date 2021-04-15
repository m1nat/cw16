// const arr = [1, 2, 3, 4, 5];
// console.log(...arr);



// console.log(Object.values(users1));

// const user1 = {
//     name: 'Vas',
//     age: 28
// };
// const user2 = {
//     name: 'Vasy',
//     age: 27
// };
// const user3 = {
//     name: 'Va',
//     age: 26
// };

// const users = [
//     user1,
//     user2,
//     user3
// ];

// const upUsers = users.sort( (prev, current) => {
//     return prev.name > current.name  ? 1 :
//     prev.name  === current.name  ? 0 :
//     prev.name  < current.name  ? -1 : null
// })

// console.log(upUsers);


// const upUsers = users.reduce( ( prev, item) => {
//     return [...prev, item.name.toUpperCase()]
// }, []);
// console.log(upUsers);

// const upUsers = users.map( item => item.name.toUpperCase())
// console.log(upUsers);

// console.log(users.filter((item , i , arr) => { 
//     return item.age > 18
// }));

// console.log(usres.findIndex( (item , i , arr)=> {
//     return  item.age === 26;
// }));

// console.log(users.find(( item, i , arr) => {
//     return  item.age === 26;
// }));

// console.log(...users);
// console.log(Object.entries(user1)); 
// console.log(user1.hasOwnProperty('age'));


// ____________________________________________
// forEach
// const arr = [1, 2, 3, 4, 5, 5, 10, 11];

// console.log(arr.sort( (prev, current) => {
//     return prev > current ? -1 : 
//     prev === curent ? 0 : 

// }));

// const upArr = arr.reduce( (prev, item, i, array) => {
//     return prev + item;
// }, 0);
// console.log(upArr);

// arr.forEach( (item, i , inputArr) => {
//     console.log(i);
// });

// console.log(arr.indexOf(2));
// console.log(arr.includes(1));

// MAP

// const upArr = arr.map( (item, i, arr) => item * item);
// console.log(upArr);

// const upArr = arr.reduce ( (prev, item)  => {
//     return [...prev, item * item];
// }, []);

// console.log(upArr);

// ______________________________________________examples

// const arr = '2025-12-03';
// const arr1 = arr.split('-');

// const newArr = arr1.reduce ( (prev, current, index, arr) => {
//     return  [...prev, arr[arr.length -1 - index]]
// }, [])
//  console.log(newArr.join('.'));
// _______________________________________________________examples

// const str = 'var_test_text'
// const x = str.split('_')
// const newStr =  x.map( (item, i) => {
//     return i  === 0 ? item : item[0].toUpperCase() + item.slice(1)
// });
// console.log(newStr.join(''));

const arr = [1, 2, 3, 4, 5, 5, 10, 11];

const newArr =  arr.forEach( (item) => {
    console.log(item*item);
    // return item * item;
});
// console.log(newArr);