let s = 'You are welcome';
for( i=1; i<=10; i++) {
    console.log(s);
}

for ( i=1001; i<=1025; i=i+3){
    console.log(i);
}

let a = '*';
for (i=1; i<=6; i++){/*выводит одну звезду*/
    console.log(a);
    a = a + '*'; /*добавляет еще одну звезду и повторяет цикл*/
}

let small='****';
let big = '*******'
for(let n=1; n<=8; n++){
    if (n % 2==0){/*% остаток от деления,ели делиться на 2 тогда чет, если есть остаток тогда не чет*/
        console.log(big);
    }else{
        console.log(small);
    }
    
}

for (i=1.2; i<=2.81; i=i+0.2){/*2.81 пишем для того чтоб получить конечный 2,8*/
    console.log(i);
}

/*таблица умножения от 1 до 10*/

for ( let i=1; i<=10; i++){
    for(let n = 1;n<=10; n++){
        m = i*n;

        console.log(`${i} x ${n} = ${m}`);
    }
    console.log('------');
}
/*вывести nединиц затем 2*n двоек затем 3*n троек*/
let n = 11;
for (let x=1; x<=n; x++){
    let s = String(x);
    for(let i=1; i<=x*n; i++){
        s=s+String(x);
    }
    console.log(s);
}
/*задание 94*/
let t = 0;
for (n=1; n<=800;n++){
    t = t+1/n;
}
console.log(t);