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






class Book{
    constructor(name, author, numberOfPages, read, id){
        this.name = name;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.read = read;
        this.id = id;
        

    }
}

class Library{

    constructor(){
        this.books = [];
    }

    update(){
        display.textContent = "";
        
        this.books.forEach(book => {

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
            readButton.id = `read${book.id}`;
            readButton.checked = false;
            readButton.style.cssText = `
                width: 24px;
                height:24px;
                accent-color: red;
                cursor:pointer;
            `;

            const labelForReadButton = document.createElement('label');
            labelForReadButton.htmlFor = `read${book.id}`;
            labelForReadButton.textContent = "Have You Read This Book?";
            

            const deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete Book";
            deleteButton.classList.add("delete");
            deleteButton.dataset.id = book.id;
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

    addBook(book){
        this.books.push(book);
        this.update();
    }

    removeBook(id){
        this.books = this.books.filter(book => book.id != id);
        this.update();
    }
}

const library = new Library();

submit.addEventListener("click", (e)=>{

    
    if (bookAuthor.value == "" || bookTitle.value == "" || numberOfpages.value == ""){
        return;
    }
    e.preventDefault(); 
    const book = new Book(
        bookTitle.value,
        bookAuthor.value,
        numberOfpages.value,
        false,
        crypto.randomUUID()
    );
   
    library.addBook(book);

    bookAuthor.value = "";
    bookTitle.value = "";
    numberOfpages.value = "";
    modal_container.classList.remove('show');
    
});

display.addEventListener('click', (e)=> {

    if(e.target.classList.contains('delete')){
        const bookId = e.target.dataset.id;
        library.removeBook(bookId);
    }
})
