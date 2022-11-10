let myLibrary = [];
let bookCount = [];
let userInfo = "";
let userInfoArr = [];
let newContent = "";
let newDiv = "";
const libraryContainer = document.querySelector(".bookshelf");
const addButton = document.createElement("button");
addButton.textContent = "Click here to add a new book";
addButton.type = "button";
addButton.addEventListener("click", function () {
  userInfo = prompt(
    "Please enter book title, author, pagecount and true or false if read."
  );
  userInfoArr = userInfo.split(",");
  const newBook = new Book(
    userInfoArr[0],
    userInfoArr[1],
    userInfoArr[2],
    userInfoArr[3]
  );
  addBookToLibrary(newBook);
  addNewShelf();
});
const buttonDiv = document.querySelector(".buttonDiv");
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, true);
const theShining = new Book("The Shining", "Stephen King", 399, true);
const mySideOfTheMountain = new Book(
  "My Side of the Mountain",
  "Jean Craighead George",
  200,
  true
);
const ghostStories = new Book("Ghost Stories", "Peter Straub", 444, true);

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
    newDiv = document.createElement("div");
    newDiv.className = "book";
    newContent = document.createTextNode(myLibrary[i].info());
    newDiv.appendChild(newContent);
    libraryContainer.appendChild(newDiv);
  }
}

function addNewShelf() {
  newDiv = document.createElement("div");
  newDiv.className = "book";
  newContent = document.createTextNode(myLibrary.slice(-1)[0].info());
  newDiv.appendChild(newContent);
  libraryContainer.appendChild(newDiv);
}

buttonDiv.appendChild(addButton);

addBookToLibrary(theHobbit);
addBookToLibrary(theShining);
addBookToLibrary(mySideOfTheMountain);
addBookToLibrary(ghostStories);
console.log(myLibrary);

addShelf();
