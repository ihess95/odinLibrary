let myLibrary = [];
let bookCount = [];
const libraryContainer = document.querySelector(".bookshelf");

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
    return `${title} by ${author} has ${pageCount} pages, and ${this.read()}`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function addShelf() {
  for (let i = 0; i <= myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(myLibrary[i].info());
    newDiv.appendChild(newContent);
    libraryContainer.appendChild(newDiv);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const theShining = new Book("The Shining", "Stephen King", 399, true);
const mySideOfTheMountain = new Book(
  "My Side of the Mountain",
  "Jean Craighead George",
  200,
  true
);
const ghostStories = new Book("Ghost Stories", "Peter Straub", 444, true);
addBookToLibrary(theHobbit);
addBookToLibrary(theShining);
addBookToLibrary(mySideOfTheMountain);
addBookToLibrary(ghostStories);
console.log(myLibrary);

addShelf();
