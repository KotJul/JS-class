
let arr = [5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13, 100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37, 60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26, 66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78, 57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47, -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37];

// Получите новый массив с элементами через 1 по порядку
let res = arr.filter( (e,i) =>i % 2 == 0);
console.log(res);


// второй способ
arr = arr.sort();
arr.forEach ( (e,i) => {
    if(i <arr.length -2 && arr[i] == arr[i+1]);

})
console.log(arr);



//Создайте структуру(объект) с именем student, 
//содержащую поля: фамилия и инициалы, номер группы,
// успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа,
// упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов,
// имеющих оценки, равные только 4 или 5.
function Student(firstName, lastName, groupNumber, rating){
    this.firstName = firstName;
    this.lastName = lastName;
    this.groupNumber = groupNumber;
    this.rating = rating;
 
    this.print = function (){
        console.log( this.lastName + ' -  ' + this.groupNumber);/*содержащую поля: фамилия и инициалы, номер группы,*/
    };
    this.middleRating = function (){
        return this.rating.reduce((r1, r2) => r1 + r2)/this.rating.length;
    };
    this.isPerfect = function (){
        return this.rating.every( r => r >=4);/*имеющих оценки, равные только 4 или 5.*/
    }
}
 
const student1 = new Student('Vasya1', 'Pupkin1', 12, [20,4,4,5,6]);
const student2 = new Student('Vasya2', 'Pupkin2', 22, [4,30,4,5,6]);
const student3 = new Student('Vasya3', 'Pupkin3', 32, [2,3,4,5,6]);
const student4 = new Student('Vasya4', 'Pupkin4', 52, [2,3,40,5,6]);
const student5 = new Student('Vasya5', 'Pupkin5', 22, [2,3,4,5,6]);
const student6 = new Student('Vasya6', 'Pupkin6', 132, [2,3,4,5,6]);
const student7 = new Student('Vasya7', 'Pupkin7', 1112, [2,3,4,5,6]);
 
const students = [student1, student2, student3, student4,  student5, student6, student7];
const best = students.filter( s => s.isPerfect())
best.forEach(s => s.print())
const sortedStudents = students.sort( (s1, s2) => s1.middleRating() - s2.middleRating());
console.log(sortedStudents);