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

function addToLibrary() {
  const temp = document.getElementById('books-left');
  temp.textContent = myLibrary;
  temp.innerHTML = myLibrary.join('<br>');
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

  addToLibrary();
  // gets the books then sends to Book to do the treatement and saves on myLibrary
});
