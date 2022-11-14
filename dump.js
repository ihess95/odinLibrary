function addReadButton(div, tempVar) {
  //   let toggleSwitch = document.createElement("label");
  //   let input = document.createElement("input");
  //   let switchSpan = document.createElement("slider");
  //   toggleSwitch.textContent = "Have you read this book?";
  //   toggleSwitch.appendChild(input);
  //   input.appendChild(switchSpan);
  //   newDiv.appendChild(toggleSwitch);
  //   libraryContainer.appendChild(newDiv);
  //   toggleSwitch.classList.add("switch");
  //   input.type = "checkbox";
  //   switchSpan.classList.add("slider", "round");
  let readButton = document.createElement("button");
  div.appendChild = readButton;
  if (tempVar.read === true) {
    readButton.textContent = "You've read this book.";
  } else {
    readButton.textContent = "You have not read this book yet.";
  }
}
