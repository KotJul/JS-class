console.log('Silence is golden');
alert(1+2-4);
let a = 2;
let b = 3;
alert((a+4*b)*(a-3*b)+a**2);

let one = +prompt('введите число');
let two =+prompt('введите второе число');
alert( one + two);

let r= +prompt('введите число');
if (r > 3){
    r = r+10;
}
else{
    r = r-10;
}
alert (r);

let p=+prompt('введите число');

if (p<7){
    alert('yes');
}
else if(p>10){
    alert('no');
}
else if (p==9){
    alert('error');
}


let m=+prompt('введите число');

if (-10 < m < 10){
    m = m+5;
}

else {
    m = m-10;
}
alert(m);
