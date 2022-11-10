let myLibrary = [];

function Book(title, author, pageCount, isRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = function () {
    if (isRead === true) {
      return "has been read.";
    } else {
      return "has not been read.";
    }
  };
  this.info = function () {
    return `${title} by ${author} has ${pageCount} many pages, and ${this.read()}`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const theShining = new Book("The Shining", "Stephen King", 399, true);
console.log(theHobbit.info());
addBookToLibrary(theHobbit);
addBookToLibrary(theShining);

console.log(myLibrary);
