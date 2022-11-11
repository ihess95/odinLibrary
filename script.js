let myLibrary = [];
let bookCount = [];
let userInfo = "";
let userInfoArr = [];
let newContent = "";
let newDiv = "";
const libraryContainer = document.querySelector(".bookshelf");
const addButton = document.createElement("button");

function Book(title, author, pageCount, isRead) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = isRead;
  this.info = function () {
    return `${title} by ${author} has ${pageCount} pages, and ${this.read}`;
  };
}

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
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "true");
const theShining = new Book("The Shining", "Stephen King", 399, "true");
const mySideOfTheMountain = new Book(
  "My Side of the Mountain",
  "Jean Craighead George",
  200,
  "true"
);
const ghostStories = new Book("Ghost Stories", "Peter Straub", 444, "true");
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 777, "false");

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function addShelf() {
  for (let i = 0; i <= myLibrary.length; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "book";
    newDiv.classList.add("book" + i);
    newContent = document.createTextNode(myLibrary[i].info());
    newDiv.appendChild(newContent);
    let toggleSwitch = document.createElement("label");
    let input = document.createElement("input");
    let switchSpan = document.createElement("slider");
    toggleSwitch.textContent = "Have you read this book?";
    toggleSwitch.appendChild(input);
    input.appendChild(switchSpan);
    newDiv.appendChild(toggleSwitch);
    libraryContainer.appendChild(newDiv);
    toggleSwitch.classList.add("switch");
    input.type = "checkbox";
    switchSpan.classList.add("slider", "round");

    if (myLibrary[i].read === "true") {
      newDiv.style.borderLeft = "#4ade80 solid 10px";
      input.checked = true;
    } else {
      newDiv.style.borderLeft = "#ef4444 solid 10px";
    }
  }
}

function addNewShelf() {
  newDiv = document.createElement("div");
  newDiv.className = "book";
  newDiv.classList.add("book" + (myLibrary.length - 1));
  newContent = document.createTextNode(myLibrary.slice(-1)[0].info());
  newDiv.appendChild(newContent);
  libraryContainer.appendChild(newDiv);
  hasBeenRead();
}

function hasBeenRead() {
  for (let x = 0; x <= myLibrary.length; x++) {
    if (myLibrary[x].read === "true") {
      let tempBook = document.querySelector(`.book${x}`);
      tempBook.style.borderLeft = "#4ade80 solid 10px";
      console.log(tempBook);
    } else {
      let tempBook = document.querySelector(`.book${x}`);
      tempBook.style.borderLeft = "#ef4444 solid 10px";
      console.log(tempBook);
    }
  }
}

buttonDiv.appendChild(addButton);

addBookToLibrary(theHobbit);
addBookToLibrary(theShining);
addBookToLibrary(mySideOfTheMountain);
addBookToLibrary(ghostStories);
addBookToLibrary(warAndPeace);
console.log(myLibrary);

addShelf();
