// const user = {
//     name: 'Vitaliy',
//     age: 29,
//     'bla bla bla': 'hello',
//     sayHello: function() {
//         console.log('Hello world');
//     }
// };
// // console.log(user['bla bla bla'])
// user.car = 'Mercedes';
// console.log(user);

// delete user.car;
// job {

// }

const ctreateUser = (name, age) => ({ name,age })
    

const sinkevich = ctreateUser('Vitaliy', 29);
console.log(sinkevich);

// const mushpakov = ctreateUser('Vitaliy_1', 39)
// console.log('age' in sinkevich);

// for (let key in sinkevich){
//     console.log(key);
// }

// for (let property in sinkevich){
//     console.log(sinkevich[property]);
// }

const users = [
    {
        name: 'Vitaliy',
        age: 29,
    },
    {
        name: 'Petya',
        age: 17,
    },
    {
        name: 'Senya',
        age: 26,
    },
    {
        name: 'Arseniy',
        age: 20,
    }
]
let x = [];
for (let i = 0; i < users.length; i++){
    if (users[i].age>18){
        x.push(users[i].name)
    }

}
console.log(x);