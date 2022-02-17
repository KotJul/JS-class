// function deepClone(object) { /*глубокое копирование */
//         const clone = {};
//         for (const objectKey in clone) {
//                 if (clone[objectKey] instanceof Object)[
//                         clone[objectKey] = deepClone(clone[objectKey])
//                 ]
//                 else {
//                         clone[objectKey] = clone[objectKey];
//                 }
//         }
// }
// return clone

/* ************************************************* */
// создать  объект guest со свойством name
// создать  объект user со всеми свойствами которые были в guest + еще свойства age и city и изменить имя 
// создать  объект AuthUser со всеми предыдущими свойствами + password и email и изменить предыдущие значения
// так же созжать и объект admin
let guest = {
        name:"Jane",
}
console.log(guest);

let user = {
        age: 25,
        city: "London"
}
Object.setPrototypeOf(user, guest);
user.name = "Peter";
console.log(user);
let AuthUser = {
        password:"123",
        email:'kity@mail.com'
}
Object.setPrototypeOf(AuthUser, user);
AuthUser.name = 'Sam';
AuthUser.age = 60;
AuthUser.city = 'Brest';
console.log(AuthUser);

let admin = new Object()
admin.isAdmin = true;
Object.setPrototypeOf(admin, AuthUser);
console.log(admin);

// Другой способ 
// const admin = Object.create(authUser);
// admin.isAdmin = true;