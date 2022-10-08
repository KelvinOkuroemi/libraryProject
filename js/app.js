// ***DOM***

// Form inputs
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pageInput = document.getElementById("pages");
let submitButton = document.getElementById("submit-button");
let deleteBtn = document.getElementById("delete-button");


// @NTS => These form doesn't need a route to point to because we are manipulating the 
// inputs and the elements with the DOM, so if the button is pressed, we use DOM to access the values.
// However if we had used express, express would have directly given us access to the values of the form or so I think.


// Card display
let titleCard = document.getElementById("title-card");
let authorCard = document.getElementById("author-card");
let pageCard = document.getElementById("pages-card");
const boardOverlay = document.getElementById("board")

// ***Class to create new card info***
let library = [];

class Book {
  constructor(title, author, pages,id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.checkbox = checkbox;
  }


}

// ***ADD to library***
function addToLibrary() {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pageInput.value;
  let id = library.length
  let newBook = new Book(title, author, pages,id)
  console.log(id);
  library.push(newBook);
}

// Display library on page
function renderLibrary() {
  let i = library.length - 1;
  let newCard = document.createElement("div");
  newCard.id = "book-card";
  newCard.className =
    "book-card flex flex-col w-full justify-center border py-32 px-16 rounded-lg h-32";
  newCard.innerHTML = `<div class="info-group flex-col flex space-y-2">
        <p id="title-card" class="w-full">${library[i].title}</p>
        <p id="author-card" class="w-full">${library[i].author}</p>
        <p id="pages-card" class="w-full">
          <span id="number">${library[i].pages}</span>&nbsp;pages
        </p>
      </div>
      <div
        class="button-group mt-2 mb-2 flex flex-col justify-center items-center"
      >
        <button
          type="button"
          id="delete-button"
          data-index=${library[i].id}
          class="bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>`;
  boardOverlay.appendChild(newCard);
}

submitButton.addEventListener("click", () => {
  addToLibrary();
  renderLibrary();
})

// Remove elements after loading
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = ""
  })
})


// ***Delete
boardOverlay.addEventListener("click", (e) => {
  const eventButtton = e.target.id;
  if (eventButtton === "delete-button") {
    const doDelete = confirm("You are about to delete this card");
    if (doDelete) {
      deleteCard(e)
    }
  }
})

// BUGS AND ISSUES
// Read and unread

function deleteCard(e) {
  let button = e.target;
  button.parentElement.parentElement.remove();
  library.filter((book)=>{
    console.log(button.dataset.index)
    return button.dataset.index !== book.id;
  })
}