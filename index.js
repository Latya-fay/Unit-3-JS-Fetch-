// Function to fetch the books from the Game of Thrones API
function fetchBooks() {
  // Fetch request to the API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((data) => renderBooks(data));
}

function renderBooks(books) {
  const main = document.querySelector("main");

  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

fetchBooks();
