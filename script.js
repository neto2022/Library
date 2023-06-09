/* eslint-disable no-param-reassign */
const myLibrary = []; // saves books the user inputed
const inputUser = document.getElementById('BookUser');

class Book {
  constructor(title, read) {
    this.title = title;
    this.read = read;
    const temp = [title, read];
    myLibrary.push(temp);
  }
}

function addToLibrary(paragraph) {
  const lastBook = myLibrary[myLibrary.length - 1];
  paragraph.textContent = lastBook;
}

function addButton() {
  const booksRight = document.getElementById('books-right');

  const paragraph = document.createElement('p');

  booksRight.appendChild(paragraph);

  const button = document.createElement('button');
  button.textContent = 'Remover';

  booksRight.appendChild(button);

  button.addEventListener('click', () => {
    booksRight.removeChild(button);
    booksRight.removeChild(paragraph);
  });
  addToLibrary(paragraph);
}
inputUser.addEventListener('click', () => {
  const tempName = document.getElementById('BookName').value;
  let tempRead = document.getElementById('BookRead').checked;

  if (tempRead === true) {
    tempRead = 'Read';
  } else if (tempRead === false) {
    tempRead = 'Unread';
  }

  // eslint-disable-next-line no-new
  new Book(tempName, tempRead);

  addButton();
  // gets the books then sends to Book to do the treatement and saves on myLibrary
});
