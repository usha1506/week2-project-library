const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Fiction',
      rating: 4.2,
      description:
        'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
      image: './books-images/the-great-gatsby.jpg'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      genre: 'Fiction',
      rating: 4.5,
      description:
        'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
      image: './books-images/to-kill-a-mockingbird.jpg'
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      genre: 'Science Fiction',
      rating: 4.4,
      description:
        'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
      image: './books-images/1984.jpg'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      genre: 'Fiction',
      rating: 4.25,
      description:
        'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
      image: './books-images/pride-and-prejudice.jpg'
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      genre: 'Fiction',
      rating: 4,
      description:
        'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      genre: 'Fantasy',
      rating: 4.6,
      description:
        'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
      image: './books-images/the-hobbit.jpg'
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      year: 1997,
      genre: 'Fantasy',
      rating: 4.7,
      description:
        'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
      image: "./books-images/harry-potter-and-the-sorcerer.jpg"
    },
    {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      year: 1851,
      genre: 'Adventure',
      rating: 4.1,
      description:
        'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
      image: './books-images/moby-dick.jpg'
    },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      year: 1954,
      genre: 'Fantasy',
      rating: 4.55,
      description:
        'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
      image: './books-images/the-lord-of-the-rings.jpg'
    },
    {
      title: 'The Shining',
      author: 'Stephen King',
      year: 1977,
      genre: 'Horror',
      rating: 4.3,
      description:
        "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      author: 'C.S. Lewis',
      year: 1950,
      genre: 'Fantasy',
      rating: 4.15,
      description:
        'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
      image: './books-images/the-chronicles-of-narnia.jpg'
    },
    {
      title: 'The Da Vinci Code',
      author: 'Dan Brown',
      year: 2003,
      genre: 'Mystery',
      rating: 3.8,
      description:
        'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      year: 1988,
      genre: 'Fiction',
      rating: 4.25,
      description:
        'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      year: 2008,
      genre: 'Science Fiction',
      rating: 4.3,
      description:
        "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Girl with the Dragon Tattoo',
      author: 'Stieg Larsson',
      year: 2005,
      genre: 'Mystery',
      rating: 4.1,
      description:
        'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Road',
      author: 'Cormac McCarthy',
      year: 2006,
      genre: 'Dystopian',
      rating: 4,
      description:
        "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
      image: './books-images/unknown.jpg'
    },
    {
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
      year: 1979,
      genre: 'Science Fiction',
      rating: 4.35,
      description:
        "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
      image: './books-images/unknown.jpg'
    },
    {
      title: 'The Giver',
      author: 'Lois Lowry',
      year: 1993,
      genre: 'Dystopian',
      rating: 4.12,
      description:
        'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
      image: './books-images/unknown.jpg'
    }
  ]
  // Initialize an empty array to store favorite books.
const faveBooks = [];

// Get references to HTML elements using their IDs.
const fiction = document.getElementById("fiction");
const scienceFiction = document.getElementById("scienceFiction");
const dystopian = document.getElementById("dystopian");
const mystery = document.getElementById("mystery");
const fantasy = document.getElementById("fantasy");
const horror = document.getElementById("horror");
const container = document.getElementById("books");
// Function to load and display the list of books.
const loadBooks = (booksArray) => {
  container.innerHTML = "";

  booksArray.forEach((book) => {
    container.innerHTML += `
    <div class="card">
      <h3>${book.title}</h3>
      <p>(by   ${book.author})</p>
      <p>${book.year}, ${book.genre}</p>
      <p>(Rating  ${book.rating})</p>
      <img src=${book.image} art=${book.title}> 
    </div>
      `;
  });
};

// Load the initial list of books when the page loads.
  loadBooks(books);
 
  all.addEventListener("click", () => {
      loadBooks(books);
  });

  fiction.addEventListener("click", () => {
    const filteredBooks = books.filter((book) => book.genre === "Fiction");
    loadBooks(filteredBooks);
  });
  
  scienceFiction.addEventListener("click", () => {
    const filteredBooks = books.filter((book) => book.genre === "Science Fiction");
    loadBooks(filteredBooks);
  });
  
  dystopian.addEventListener("click", () => {
    const filteredBooks = books.filter((book) => book.genre === "Dystopian");
    loadBooks(filteredBooks);
  });
  
  mystery.addEventListener("click", () => { // I assume you meant to use "mystery" instead of "mysteryFiction"
    const filteredBooks = books.filter((book) => book.genre === "Mystery");
    loadBooks(filteredBooks);
  });
  
  fantasy.addEventListener("click", () => {
    const filteredBooks = books.filter((book) => book.genre === "Fantasy");
    loadBooks(filteredBooks);
  });
  
  horror.addEventListener("click", () => {
    const filteredBooks = books.filter((book) => book.genre === "Horror");
    loadBooks(filteredBooks);
  });


 // Function to sort and load books in descending order of rating (highest to lowest).
const sortBooksByRatingDescending = () => {
    const sortedBooks = [...books].sort((a, b) => b.rating - a.rating);
    loadBooks(sortedBooks);
  };
  
  // Attach click event listeners to buttons for sorting by rating.
  document.getElementById("sortRatingDescendingButton").addEventListener("click", sortBooksByRatingDescending);
  
  // Load the initial list of books in descending order of rating when the page loads.
  sortBooksByRatingDescending();

  // Function to sort and load books in ascending order of rating (lowest to higest).
const sortBooksByRatingAscending = () => {
    const sortedBooks = [...books].sort((a, b) => a.rating - b.rating);
    loadBooks(sortedBooks);
  };
  
  // Attach click event listeners to buttons for sorting by rating.
  document.getElementById("sortRatingAscendingButton").addEventListener("click", sortBooksByRatingAscending);
  
  // Load the initial list of books in descending order of rating when the page loads.
  sortBooksByRatingAscending();

 