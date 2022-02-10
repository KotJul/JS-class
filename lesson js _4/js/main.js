// домашка
let str3 = 'c:\\WebServers\\home\\testsite\\www\\myfile.txt';
let lastIndex = str3.lastIndexOf('\\');
let dotIndex = str3.lastIndexOf('.');
let fileName = str3.slice(lastIndex+1, dotIndex);
console.log(fileName);
 
/*******************/
 
// домашка
let str = '+++--==--';
let str2 = '';
for(let i = 0; i < str.length; i++){
    if(str[i]=== '+'){
        str2 += '-';
    }else if (str[i] === '-') {
        str2 += '+';
    } else {
        str2 +=str[i];
    }
}
console.log(str2);

/*******************/

let arr = [];
for(let i=1; i<1000; i++){
    arr.push(i);
}
let a = arr.reverse();
 
// let arr = [1, 2, true, 'asdf', str, undefined, undefined];
// arr = arr.slice[1]
console.log(a==arr);
 
/*******************/
 
//Найти количество чисел в массиве, которые делятся на 3, но не делятся на 7.
let arr1 = [];
for(let i=1; i<=1000000; i++){
    if(i % 3 === 0 && i % 7 !== 0){
     arr1.push(i);
    }
}
/*******************/
console.log(arr1.length);
 
 
//Найдите сумму и произведение элементов массива.
let arr2 = [1, 3, 5, 3452354, 233, 234, 1];
let s = 0;
let p = 1;
for(let i = 0; i< arr2.length; i++){
    s += arr2[i];
    p *= arr2[i];
}
 
console.log(s,p);
 
/*******************/
//Найти сумму наибольшего и наименьшего элементов массива.
let arr3 = [1, 3, 5, 3452354, 233, 234, -10];
let max = arr3.pop();
let min = max;
for(let i = 0; i< arr3.length; i++){
    if(max < arr3[i]){
        max = arr3[i];
    }
    if(min > arr3[i]){
        min = arr3[i]
    }
}
console.log(max+min);
/*******************/
//В данной строке найти cумму цифр.
let str4 = 'asdfasdf12123312asdfasdfasdf'
let atr4 = str4.split('');
let summ = 0;
for(let i=0; i<atr4.length; i++){
    let n = Number.parseInt(atr4[i])
    if(n){
        summ += +atr4[i];
    }
}
console.log(summ);


 
/*******************/
//Строка состоит из слов, разделенных одним или несколькими пробелами. 
//Найдите слово наибольшей длины
 
let str5 = 'минск брест москва'; // => 'Минск Брест Москва'
let words = str5.split(' ');
console.log('Words:', words);
 
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    word = word[0].toUpperCase() + word.slice(1);
    words[i] = word;
}
console.log('Words:', words);
str = words.join(' ');
console.log(str5);
