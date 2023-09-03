let numberBooks = 0;
const incrementCart = () => {
  let cart = document.querySelector(".addtopanier");
  // Add a book to cart
  numberBooks++;
  // Increment the number of books in the cart
  cart.innerHTML = numberBooks;
};
const container = document.querySelector(".container");
//browse the object and access the book table
data.book.forEach((datas) => {
  //creation of the list to display the books which are stored in our table
  let list = document.createElement("li");
  list.innerHTML = datas;
  container.prepend(list);

  //increment of the basket when pressing on a book
  list.addEventListener("click", function () {
    let confirmation = confirm("Voulez-vous ajouter ce livre au panier?");
    if (confirmation) {
      incrementCart();
    }
  });
});

// Add book in the list of de books
let addBook = document.querySelector(".input");
addBook.addEventListener("click", function () {
  let booktitle = document.querySelector(".booktitle");
  let title = booktitle.value;
  title === ""
    ? alert("Veillez saisir le titre du livre")
    : data.book.push(title);
});
