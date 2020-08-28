let form = document.querySelector("#book-form");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let isbnInput = document.querySelector("#isbn");
const bookList = document.getElementById("book-list");

class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

class UI {
	static addToBookList(book) {
		const { title, author, isbn } = book;

		const list = document.getElementById("book-list");
		const row = document.createElement("tr");
		row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><a href = "#">X</a></td>
        `;

		list.appendChild(row);
		UI.clearFields();
	}

	static clearFields() {
		titleInput.value = "";
		authorInput.value = "";
		isbnInput.value = "";
	}

	static showAlert(message, className) {
		const div = document.createElement("div");
		div.className = `alert ${className}`;
		div.innerHTML = `${message}`;
		const container = document.querySelector(".container");
		const form = document.querySelector("#book-form");
		container.insertBefore(div, form);

		setTimeout(() => {
			document.querySelector(".alert").remove();
		}, 3000);
	}
}

class Store {
	static getBooks() {
		let books;

		if (localStorage.getItem("books") === null) {
			books = [];
		} else {
			books = JSON.parse(localStorage.getItem("books"));
		}

		return books;
	}

	static addToBookList(book) {
		let books = Store.getBooks();
		books.push(book);

		localStorage.setItem("books", JSON.stringify(books));
	}

	static deleteBook(isbn) {
		let books = Store.getBooks();

		books.forEach((book, index) => {
			if (book.isbn == isbn) {
				books.splice(index, 1);
			}
		});

		localStorage.setItem("books", JSON.stringify(books));
	}

	static displayBooks() {
		let books = Store.getBooks();

		books.forEach((book) => {
			UI.addToBookList(book);
		});
	}
}

const addNewBook = (e) => {
	e.preventDefault();
	let titleValue = titleInput.value;
	let authorValue = authorInput.value;
	let isbnValue = isbnInput.value;

	const ui = new UI();
	if (titleValue == "" || authorValue == "" || isbnValue == "") {
		UI.showAlert("Please fill up the input", "error");
		return;
	}

	const book = new Book(titleValue, authorValue, isbnValue);

	UI.addToBookList(book);
	UI.showAlert("Book Added", "success");

	Store.addToBookList(book);
};

const removeBook = (e) => {
	if (e.target.hasAttribute("href")) {
		if (confirm("Are you sure?")) {
			e.target.parentElement.parentElement.remove();
			Store.deleteBook(
				e.target.parentElement.previousElementSibling.textContent.trim()
			);
			UI.showAlert("Book removed", "success");
		}
	}
};

form.addEventListener("submit", addNewBook);
bookList.addEventListener("click", removeBook);
document.addEventListener("DOMContentLoaded", Store.displayBooks());
