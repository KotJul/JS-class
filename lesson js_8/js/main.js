
// Описать домашнюю библиотеки:книга (автор,название,год,кол-во страниц)

// поиска книги по какому-либо признаку (например, по автору или по году издания),
// добавления книг в библиотеку, удаления книг из нее, сортировки книг (по автору и количеству страниц).

function Book(book,author,title,year,pages){
   this.book = book;
   this.author = author;
   this.title = title;
   this.year = year;
   this.pages = pages;
}
const book1 = new Book('book1','author1','title1',1930, 336);
const book2 = new Book('book2','author2','title2',1869, 256);
const book3 = new Book('book3','author3','title3',1950, 308);
const book4 = new Book('book4','author4','title4',1760, 126);
const book5 = new Book('book5','author5','title5',1865, 1025);

const books = [book1,book2,book3,book4,book5];

const printAuthor = 'author3';
const findBook = books.find(b => b.author === printAuthor);// поиска книги по какому-либо признаку (например, по автору или по году издания),
console.log(findBook);

books.push(new Book('book6','author6','title6',1888, 1265));// добавления книг в библиотеку

const indexBook = books.findIndex(b => b.book === 'book4');/*находим индекс кники в массиве по которому будем ее удалять*/
console.log(indexBook);

delete books[3];/* удаления книг из библиотеки*/
console.log(books);

const sortedByAuthor =  books.sort((b1,b2) => b1.author -  b2.author);/*сортировки книг (по автору)*/
console.log(sortedByAuthor);

const sortedByPages = books.sort( (b1,b2) => b1.pages - b2.pages);/*сортировки книг (по количеству страниц)*/
console.log(sortedByPages);


/*********************************************************************************************************** */

//Описать домашняя библиотека.
// Книга
// - Автор
// - Название
// - Год
// - Кол-страниц
 
// поиска книги по какому-либо признаку (например, по автору или по году издания),
// добавления книг в библиотеку(массив), удаления книг из нее (по году),
// сортировки книг(по автору и кол-ву страниц)
 
//https://pastebin.com/np2n2heQ
 
/*
function Book(author, title, year, pages){
   this.author = author;
   this.title = title;
   this.year = year;
   this.pages = pages;
   this.print = function (){
       console.log(`Author: ${this.author}: '${this.title}' - ${this.pages}, ${this.year}`);
   };
}

function Library(books=[]){
   this.books = books;
   this.add = function (book){
       this.books.push(book);
   };
   this.show = function (){
       this.books.forEach(b=> b.print())
       console.log('--------');
   };
   this.findByYear = function (year){
       return this.books.find( book => book.year === year);
   };
   this.sortByAuthor = function (){
       this.books.sort( (b1, b2) => {
           if(b1.author > b2.author){
               return 1;
           } else if(b1.author < b2.author){
               return  -1;
           }
           return 0;
       })
   };
   this.sortByPages = function (){
       this.books.sort( (b1, b2) => b1.pages - b2.pages);
   };
   this.deleteAllByYear = function (year){
       this.books = this.books.filter( b=> b.year !== year )
   }

}

const book1 = new Book('Author1', 'title1', 2000, 120);
const book2 = new Book('Author2', 'title2', 2000, 90);
const books = [book2, book1];


const library = new Library(books)
const book3 = new Book('Author3', 'title3', 2001, 100);
library.add(book3);
const finded = library.findByYear(2003);
library.show();
library.deleteAllByYear(2000);
library.show();

*/