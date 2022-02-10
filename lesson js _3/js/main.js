s// вывесвти первые первый,последний или средний
let s = 'вывесвти первые три сивола и последние три символа';
let f = s.slice(0,1);
console.log(f);
f= s.slice(-1);
console.log(f);
if(s.length % 2 != 0){
    let n = (s.length -1)/2;
    console.log(s);
}

// Дана строка. Если она начинается на 'abc', то заменить их на 'www', иначе добавить в конец строки 'zzz'.

 s = 'abckfh';
if(s.startsWith('abc')){/*проверяем есть ли */
 s= s.replace('abc','www');/*заменяем* первое пишем что меняем второе на что*/
}else{
    (s+'zzz');/*добавляем*/
}
console.log(s);

// Дана строка. Определите, какой символ в ней встречается раньше: 'x' или 'y'. Если какого-то из символов нет, вывести сообщение об этом.

let str = 'merry  x-christmas';
if (s.indexOf('x') > s.indexOf('y')){
    console.log('Y');
}else if(s.indexOf('y')> s.indexOf('x')){
    console.log('X');
}
else{
    console.log('error');
}