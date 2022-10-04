// ***DOM***

let library = [];

// Form inputs
let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let pageInput = document.getElementById("pages")
let submitBtn = document.getElementById("submit-button");

// @NTS => These form doesn't need a route to point to because we are manipulating the 
// inputs and the elements with the DOM, so if the button is pressed, we use DOM to access the values.
// However if we had used express, express would have directly given us access to the values of the form or so I think.


// Card display
let titleCard = document.getElementById("title-card");
let authorCard = document.getElementById("author-card");
let pageCard = document.getElementById("pages-card");

// ***Class to create new card info***
class Book {
    constructor(title,author,pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

// ***ADD INFO***
function addToLibrary(){
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pageInput.value;

    let newBook = new Book(title,author,pages)
    library.push(newBook);
    console.log(library)
}

submitBtn.addEventListener("click",()=>{
    addToLibrary();
})

// Remove elements after loading
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    inputs.forEach(input=>{
        input.value = ""
    })
})

// Display new card on page

function renderLibrary(){
    library.forEach(book =>{
        console.log(book)
    })
}