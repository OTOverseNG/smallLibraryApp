/*const open_modal = document.querySelector(".open-modal");
const modal_container = document.querySelector(".modal-container");
const closes = document.querySelectorAll(".close");

open_modal.addEventListener("click", () => {

    modal_container.classList.add('show');
})

closes.forEach((close) => {
    close.addEventListener('click', () => {

        modal_container.classList.remove('show');
    })
})*/


const myLibrary = [];

function Book(name, author, numberOfPages, read){
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
}


function addBookToLibrary(){
    
}