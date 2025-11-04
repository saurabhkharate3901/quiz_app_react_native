const questionsData = {
    Science: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        question: "What is H2O?",
        options: ["Oxygen", "Hydrogen", "Water", "Salt"],
        answer: "Water",
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        answer: "Carbon Dioxide",
      },
      {
        question: "What force keeps us on the ground?",
        options: ["Friction", "Magnetism", "Gravity", "Tension"],
        answer: "Gravity",
      },
      {
        question: "What is the center of an atom called?",
        options: ["Electron", "Nucleus", "Proton", "Neutron"],
        answer: "Nucleus",
      },
    ],
    History: [
      {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        answer: "George Washington",
      },
      {
        question: "What year did World War II end?",
        options: ["1945", "1939", "1941", "1950"],
        answer: "1945",
      },
      {
        question: "Which civilization built the pyramids?",
        options: ["Greek", "Egyptian", "Roman", "Mayan"],
        answer: "Egyptian",
      },
      {
        question: "Who discovered America?",
        options: ["Christopher Columbus", "Leif Erikson", "Marco Polo", "Ferdinand Magellan"],
        answer: "Christopher Columbus",
      },
      {
        question: "What was the name of the ship that brought the Pilgrims to America?",
        options: ["Santa Maria", "Mayflower", "Endeavour", "Beagle"],
        answer: "Mayflower",
      },
    ],
    Geography: [
      {
        question: "What is the largest continent?",
        options: ["Africa", "Asia", "Europe", "Antarctica"],
        answer: "Asia",
      },
      {
        question: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
      },
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
      },
      {
        question: "Which country has the most population?",
        options: ["India", "USA", "China", "Russia"],
        answer: "China",
      },
      {
        question: "What is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: "Nile",
      },
    ],
    Literature: [
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the main character's name in 'Moby-Dick'?",
        options: ["Ahab", "Ishmael", "Queequeg", "Starbuck"],
        answer: "Ishmael",
      },
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Charlotte Bronte", "Emily Dickinson", "Jane Austen", "George Eliot"],
        answer: "Jane Austen",
      },
      {
        question: "What genre is 'The Odyssey'?",
        options: ["Comedy", "Epic", "Novel", "Tragedy"],
        answer: "Epic",
      },
      {
        question: "Who is the author of '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"],
        answer: "George Orwell",
      },
    ],
    Sports: [
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "France", "Germany", "Argentina"],
        answer: "France",
      },
      {
        question: "What sport uses a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
        answer: "Badminton",
      },
      {
        question: "How many players are on a basketball team?",
        options: ["5", "7", "11", "9"],
        answer: "5",
      },
      {
        question: "What is the highest score in a single frame of bowling?",
        options: ["300", "200", "400", "500"],
        answer: "300",
      },
      {
        question: "What is the national sport of Japan?",
        options: ["Karate", "Sumo Wrestling", "Judo", "Baseball"],
        answer: "Sumo Wrestling",
      },
    ],
    Technology: [
      {
        question: "Who is known as the father of computers?",
        options: ["Alan Turing", "Charles Babbage", "Steve Jobs", "Bill Gates"],
        answer: "Charles Babbage",
      },
      {
        question: "What does CPU stand for?",
        options: ["Central Processing Unit", "Control Power Unit", "Central Programming Unit", "Computer Processing Unit"],
        answer: "Central Processing Unit",
      },
      {
        question: "What is the name of the first electronic general-purpose computer?",
        options: ["ENIAC", "UNIVAC", "Zuse Z3", "IBM PC"],
        answer: "ENIAC",
      },
      {
        question: "What does HTTP stand for?",
        options: ["Hyper Text Transfer Protocol", "Hyper Text Transmission Protocol", "High Transfer Text Protocol", "Hyper Terminal Text Protocol"],
        answer: "Hyper Text Transfer Protocol",
      },
      {
        question: "Who founded Microsoft?",
        options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Elon Musk"],
        answer: "Bill Gates",
      },
    ],
    Entertainment: [
      {
        question: "Who directed the movie 'Titanic'?",
        options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Martin Scorsese"],
        answer: "James Cameron",
      },
      {
        question: "Which actor played Iron Man in the Marvel movies?",
        options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Tom Holland"],
        answer: "Robert Downey Jr.",
      },
      {
        question: "What is the longest-running TV show?",
        options: ["The Simpsons", "Friends", "Game of Thrones", "Breaking Bad"],
        answer: "The Simpsons",
      },
      {
        question: "Which singer is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        answer: "Michael Jackson",
      },
      {
        question: "What is the name of the wizarding school in Harry Potter?",
        options: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"],
        answer: "Hogwarts",
      },
    ],
    GK: [
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra",
      },
      {
        question: "Who wrote the national anthem of the USA?",
        options: ["Francis Scott Key", "George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "Francis Scott Key",
      },
      {
        question: "What is the currency of Japan?",
        options: ["Dollar", "Yen", "Euro", "Won"],
        answer: "Yen",
      },
      {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7",
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        answer: "Mount Everest",
      },
    ],
  };
  
  export default questionsData;
  