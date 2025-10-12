const open_modal = document.querySelector(".open-modal");
const modal_container = document.querySelector(".modal-container");
const close = document.querySelector(".close");
const bookTitle = document.querySelector('.book_title');
const bookAuthor = document.querySelector('.book_author');
const numberOfpages = document.querySelector('.number_of_pages');
const display = document.querySelector('.displayWrapper');
const submit = document.querySelector('.submit');



open_modal.addEventListener("click", () => {

    modal_container.classList.add('show');
})

close.addEventListener('click', () =>{
    modal_container.classList.remove('show');
})




const myLibrary = [];

function Book(name, author, numberOfPages, read, id){
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.id = id;
}


function addBookToLibrary(book){

    myLibrary.push(book);
    displayBook();
}

function displayBook(){

    display.textContent = "";
    
    myLibrary.forEach(book => {

        
        const card = document.createElement('div');
        card.classList.add('card');

        const titleHeader = document.createElement("div");
        titleHeader.textContent = `Name Of Book: ${book.name}`;

        const authorName = document.createElement("div");
        authorName.textContent = `Author: ${book.author}`;

        const numberOfPages = document.createElement('div');
        numberOfPages.textContent = `Pages: ${book.numberOfPages}`;

        const readButton = document.createElement('input');
        readButton.type = "checkbox";
        readButton.id = "bookRead";
        readButton.checked = false;
        readButton.style.cssText = `
            width: 24px;
            height:24px;
            accent-color: red;
            cursor:pointer;
        `;

        const labelForReadButton = document.createElement('label');
        labelForReadButton.htmlFor = 'bookRead';
        labelForReadButton.textContent = "Have You Read This Book?";
         

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete Book";
        deleteButton.classList.add("button");
        deleteButton.style.cssText = `
            padding: 5px 10px ;
            border-radius: 10px;
            font-size : 15px;
            font-family: "Oswald", sans-serif
            border: none;
            cursor: pointer;
        
        `;

        const container = document.createElement('div');
        container.appendChild(labelForReadButton);
        container.appendChild(readButton);
        container.style.cssText = `
            display: flex;
            gap : 10px;
            align-items: center;
            justify-content:center;
        `

        card.appendChild(titleHeader);
        card.appendChild(authorName);
        card.appendChild(numberOfPages);
        card.appendChild(container);
        card.appendChild(deleteButton);
        display.appendChild(card);
        
        
    })
}




submit.addEventListener("click", (e)=>{

    
    if (bookAuthor.value == "" || bookTitle.value == "" || numberOfpages.value == ""){
        return;
    }
    e.preventDefault(); 
    let book = new Book();
    book.author = bookAuthor.value;
    book.name = bookTitle.value;
    book.numberOfPages = numberOfpages.value;
    book.id = crypto.randomUUID();
    addBookToLibrary(book);
    bookAuthor.value = "";
    bookTitle.value = "";
    numberOfpages.value = "";
    modal_container.classList.remove('show');
    console.log(myLibrary);
});


