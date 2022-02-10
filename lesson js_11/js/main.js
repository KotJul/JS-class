/*
Задача 2
Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов
Удалите из массив все элементы title который больше 25 символов - через фильтр 
Каждуй первую букву слова из свойства body сделайте заглавной
Отсортируйте массив по длине body
Удалите из всех элементов свойство userId
Выведите результат
Преобразуйте результат в JSON строку и вывидите*/


/*const request = new XMLHttpRequest();
 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object
    .map(post=>{
        return {
            title : post.title,
            userId: post.userId,
            id: post.id,
            body: post.body.charAt(0).toUpperCase().slice(1).toLowerCase(),
   
     }
    })  
    .sort((a,b)=>(a.length>b.length)) 
//Каждуй первую букву слова из свойства body сделайте заглавной
     object.forEach(post, i =>{
     post.body = post.body
     .split('')
     .map(word=>word[0]..toUpperCase()+ word.slice(1))
     .join(' ')
      .split('\n')
      .map(word=>word[0]..toUpperCase()+ word.slice(1))
     .join(' ')
    })
     console.log(object);
    }; 
 
     //delete object.userId  
  
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');*/




/*
const request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/comments');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    //const f = object.filter(comment=>comment.email)
  
    const f = object
    .map(comment=>{
        return {
            email: comment.email,
            
        }
        
    })
   
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');

/****************************************************** */
//192.168.0.200:3000/1
const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    //const f = object.filter(comment=>comment.email)
  
    const f = object.users
    .map(users=>{
        return {
            name: users.name,
            }
        
    })
   
    .sort((a,b)=>{
    if (a.name>b.name){
    return 1;
    }else if( a.name<b.name){
    return -1;
    }
    return 0;
})
object.users.forEach(user =>{
  user.posts=object.posts.filter(post=> post.userId===user.id);
})
    console.log(f);
    }
 
request.send();//делаем запрос 
console.log('Done');
const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');
 
request.onload = function() {
    console.log('Onload');
    const result = request.response;
 
    const object = JSON.parse(result);
    // TODO: type code here
    const f = object.users
  
  
object.users.forEach(user =>{
user.posts=object.posts.filter(post=> post.userId===user.id);
})
    console.log(object);
    }
 
request.send();//делаем запрос 
console.log('Done');









const request = new XMLHttpRequest();
request.open('GET', 'http://192.168.0.200:3000/1');

request.onload = function () {
    console.log('Onload');
    const result = request.response;

    const object = JSON.parse(result);
    // TODO: type code here

    const f = object.users


    object.posts.forEach(post => {
        post.user = object.users.find(user => user.id === post.userId);
    })




    console.log(object);
}

request.send(); //делаем запрос 
console.log('Done');