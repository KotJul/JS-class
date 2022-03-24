// function delay(ms){/*функция выполниться через 3сек*/
    
// return new Promise(resolve => {/*передаем один аргумент*/
//  setTimeout(()=>{
//     resolve();/*переводит в состояние fullfield* и передает значение ms*/

//  },ms)
// })
// }
// delay(3000)
// .then(()=> alert('выполнилось через 3 секунды'));

const imgs = [
    'https://klike.net/uploads/posts/2019-07/1564314090_3.jpg',
    'http://u01.appmifile.com/images/2018/12/01/fe64a4a3-6b4c-41ab-89a8-c817db64522b.png',
    'https://oir.mobi/uploads/posts/2021-05/1621813061_12-oir_mobi-p-khoroshenkii-kotenok-zhivotnie-krasivo-fot-14.jpg'
]

 function getImgs(url){
    return new Promise(function(resolve,reject){
        const img = document.createElement('img');
        img.src = url;
        img.onerror = () =>{
            reject('error')
        };
        img.onload = () =>{
            resolve(img)
        }
    })
}
const promises = imgs.map(img => getImgs(img));
Promise.any(promises)
.then(images => {
    document.body. append(images)
})