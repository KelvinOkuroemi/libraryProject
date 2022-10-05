// ***DOM***

// Form inputs
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pageInput = document.getElementById("pages")
let submitButton = document.getElementById("submit-button");
let deleteBtn = document.getElementById("delete-button")

// @NTS => These form doesn't need a route to point to because we are manipulating the 
// inputs and the elements with the DOM, so if the button is pressed, we use DOM to access the values.
// However if we had used express, express would have directly given us access to the values of the form or so I think.


// Card display
let titleCard = document.getElementById("title-card");
let authorCard = document.getElementById("author-card");
let pageCard = document.getElementById("pages-card");
const boardOverlay = document.getElementById("board")

// ***Class to create new card info***

const library = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }


}

// ***ADD to library***
function addToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pageInput.value;
    let newBook = new Book(title, author, pages)
    library.push(newBook);
}

// Display library on page
function renderLibrary() {
    library.forEach((book,index) => {
        let newCard = document.createElement("div");
        newCard.id = "book-card";
        newCard.dataset.index = index;
        newCard.className = "book-card flex flex-col w-full justify-center border py-32 px-16 rounded-lg h-32";
        newCard.innerHTML = `<div class="info-group flex-col flex space-y-2">
        <p id="title-card" class="w-full">${book.title}</p>
        <p id="author-card" class="w-full">${book.author}</p>
        <p id="pages-card" class="w-full">
          <span id="number">${book.pages}</span>&nbsp;pages
        </p>
      </div>
      <div
        class="button-group mt-2 mb-2 flex flex-col justify-center items-center"
      >
        <button
          type="button"
          id="delete-button"
          class="bg-red-400 hover:bg-red-200 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>`

      boardOverlay.appendChild(newCard);
      console.log(newCard.dataset.index);
    })
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

deleteBtn.addEventListener("click",()=>{
    const doDelete = confirm("You are about to delete this card")
})

// BUGS AND ISSUES
// assign dataset to DOM elements
// get index of array __ DONE
// DOM cards' button not working
// Read and unread

// function loopLibrary(){
//     library.forEach((book,index)=>{
//         console.log(index)
//     })
// }