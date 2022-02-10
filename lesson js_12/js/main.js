// // Найдите количество картинок ширина и высота которых больше 800px

// const widthEndHeight = object.images.filter(img => Number.parseInt(img.width) > 800 && Number.parseInt(i.height) > 800).length()/*длина считает количество картинок*/

//   console.log(widthEndHeight);

//   // Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id

//   object.albums.forEach(album => {
//     album.imgs = album.images.map(imgId => object.images.find(img => img.imageId===imgId)
//     })
//     console.log(object)

//  // Удалите альбомы в которых меньше 5 картинок
//  object.albums = object.albums.filter(album => album.images.length >= 5 )/*находим картинки с длиной меньше 5*/
//   })
//   console.log(object)

// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его
// xhr.open('GET', 'https://msheiko.github.io/js/dz/F1021/json/1.json');

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
//         console.log('Onload');
//         const result = xhr.response; //  Получаем ответ, это JSON строка
//         const object = JSON.parse(result); // Преобразуем строку в JS объект
//         // Пишем код домашки ТУТ!!!

//          object.images.forEach(img => {
//             delete img.imageId;// удалить imageId

//             img.width = Number.parseInt(img.width);/*преобразовать строку ширину в число*/
//             img.height = Number.parseInt(img.height);/*преобразовать строку высоту в число*/
//             img.image = img.image.split('/').pop()/*удаляем все до слэша*/
//         })
//         const res =[];
//         object.images.forEach(img => {
//             if (res.some(i => i.image === img.image)){
//                 res.push(img)
//             }
//         })
//            console.log(object)
//         };
//         // Этот код сработает если мы не получим ответ от сервера
//         xhr.onerror = function () {
//             console.error("Запрос не удался");
//         };
        // посчитать сколько времни от даты до др

        // const now = new Date.now();/*текущая дата*/
        // console.log('Now',now);
        // const bd = new Date(1988,5,8);
        // console.log('Bd',bd.getTime());
        // const delta = (now - bd.getTime())/1000;
        // console.log('delta',delta);

        const now =new Data();
        console.log(now.getTime());

        const newDate = now.getTime() + 1000000000;
        const d = new Date(newDate);
        console.log(d);
        