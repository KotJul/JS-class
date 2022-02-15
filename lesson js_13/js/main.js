// let user = {
//         name:"Иван",
//         age: 30,
//         isAdmin:true,
// };
// let clone ={};
// for (let key in user){
//         clone[key] = user[key];/*user[key] это равняеться 30*/
// }
// clone.age =1;
// user.age=2;
// console.log(user);
// console.log(clone);/*получим два совершенно отдельный объекта которые друг от друга не зависят*/


let user = {
        name:'Джон',
}
Object.defineProperty(user,'age',{
        value:30,
        writable:false,
})
user.age = 50;/*не получиться переприсвоить изменение*/
console.log(user);

