let myLibrary = [];
let bookCount = [];
let userInfo = "";
let userInfoArr = [];
let newContent = "";
let newDiv = "";
const libraryContainer = document.querySelector(".bookshelf");
const addButton = document.createElement("button");
let toggleSwitch = document.createElement("label");
let input = document.createElement("input");
let switchSpan = document.createElement("slider");
toggleSwitch.textContent = "test";
toggleSwitch.appendChild(input);
input.appendChild(switchSpan);

toggleSwitch.classList.add("switch");
input.type = "checkbox";
switchSpan.classList.add("slider", "round");

class Book {
  constructor(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = isRead;
    this.info = function () {
      return `${title} by ${author} has ${pageCount} pages, and ${this.read}`;
    };
  }
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
  addShelf();
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
  libraryContainer.innerHTML = "";
  for (let i = 0; i <= myLibrary.length; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "book";
    newDiv.classList.add("book" + i);
    let titleDiv = document.createElement("div");
    let authorDiv = document.createElement("div");
    let pageDiv = document.createElement("div");
    let deleteDiv = document.createElement("div");
    deleteDiv.classList.add("delete");
    title = document.createTextNode(`Title: ${myLibrary[i].title}`);
    author = document.createTextNode("Author: " + myLibrary[i].author);
    pageCount = document.createTextNode(
      "Page Count: " + myLibrary[i].pageCount
    );
    let elem = document.createElement("img");
    elem.src = "imgs/delete.svg";
    titleDiv.appendChild(title);
    authorDiv.appendChild(author);
    pageDiv.appendChild(pageCount);
    deleteDiv.appendChild(elem);
    deleteDiv.addEventListener("click", function () {
      const tempVarButton = this.parentElement.className.slice(-1);
      this.parentElement.remove();
      myLibrary.splice(tempVarButton, 1);
    });
    newDiv.appendChild(titleDiv);
    newDiv.appendChild(authorDiv);
    newDiv.appendChild(pageDiv);
    newDiv.appendChild(deleteDiv);
    libraryContainer.appendChild(newDiv);
    addReadButton(newDiv, myLibrary[i]);

    if (myLibrary[i].read === "true") {
      newDiv.style.borderLeft = "#4ade80 solid 10px";
    } else {
      newDiv.style.borderLeft = "#ef4444 solid 10px";
    }
  }
}

function addReadButton(div, tempVar) {
  let readButton = document.createElement("button");
  div.appendChild(readButton);
  if (tempVar.read === "true") {
    readButton.textContent = "You've read this book.";
    readButton.style.backgroundColor = "#4ade80";
  } else {
    readButton.textContent = "You have not read this book yet.";
    readButton.style.backgroundColor = "#ef4444";
  }
  readButton.addEventListener("click", function () {
    console.log(this);
    console.log(this.parentElement.className.slice(-1));
    const tempVarButton = this.parentElement.className.slice(-1);
    if (myLibrary[tempVarButton].read === "true") {
      this.textContent = "You have not read this book yet.";
      this.style.backgroundColor = "#ef4444";
      this.parentElement.style.borderLeft = "#ef4444 solid 10px";
      myLibrary[tempVarButton].read = "false";
    } else {
      this.textContent = "You've read this book";
      this.style.backgroundColor = "#4ade80";
      this.parentElement.style.borderLeft = "#4ade80 solid 10px";
      myLibrary[tempVarButton].read = "true";
    }
  });
}

function removeCard(card) {
  card.remove();
  console.log("test");
}

// function addNewShelf() {
//   newDiv = document.createElement("div");
//   newDiv.className = "book";
//   newDiv.classList.add("book" + (myLibrary.length - 1));
//   newContent = document.createTextNode(myLibrary.slice(-1)[0].info());
//   newDiv.appendChild(newContent);
//   libraryContainer.appendChild(newDiv);
//   hasBeenRead();
// }

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

// function readButton() {
//   const parent = button.closest(".book");
//   console.log(parent);
// }

buttonDiv.appendChild(addButton);

addBookToLibrary(theHobbit);
addBookToLibrary(theShining);
addBookToLibrary(mySideOfTheMountain);
addBookToLibrary(ghostStories);
addBookToLibrary(warAndPeace);
console.log(myLibrary);

addShelf();
