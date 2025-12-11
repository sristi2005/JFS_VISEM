const inventorsData = {
  python: {
    name: "Guido van Rossum",
    language: "Python",
    img: "images/python.jpg",
    description: "Guido van Rossum created Python in 1991. Python is known for its clear, readable syntax and is popular in web development, data science, and automation."
  },
  java: {
    name: "James Gosling",
    language: "Java",
    img: "images/java.jpg",
    description: "James Gosling is the father of Java, released in 1995. Java is widely used for Android apps and large-scale enterprise systems."
  },
  cpp: {
    name: "Bjarne Stroustrup",
    language: "C++",
    img: "images/cpp.jpg",
    description: "Bjarne Stroustrup designed C++, an extension of C that supports object-oriented and generic programming, used in games and high-performance software."
  },
  c: {
    name: "Dennis Ritchie",
    language: "C",
    img: "images/c.jpg",
    description: "Dennis Ritchie created the C language at Bell Labs. C is the foundation of many other languages and operating systems."
  },
  javascript: {
    name: "Brendan Eich",
    language: "JavaScript",
    img: "images/js.jpg",
    description: "Brendan Eich created JavaScript in 1995. It is the main language for interactive behaviour on websites."
  },
  ruby: {
    name: "Yukihiro \"Matz\" Matsumoto",
    language: "Ruby",
    img: "images/ruby.jpg",
    description: "Matz created Ruby with a focus on developer happiness. It became famous through the Ruby on Rails web framework."
  },
  php: {
    name: "Rasmus Lerdorf",
    language: "PHP",
    img: "images/php.jpg",
    description: "Rasmus Lerdorf started PHP in 1994. PHP powers many web backends and content management systems."
  },
  csharp: {
    name: "Anders Hejlsberg",
    language: "C#",
    img: "images/csharp.jpg",
    description: "Anders Hejlsberg led the creation of C#, a modern language used with .NET for desktop, web, and game development."
  },
  cobol: {
    name: "Grace Hopper",
    language: "COBOL",
    img: "images/cobol.jpg",
    description: "Grace Hopper was a pioneering computer scientist and U.S. Navy rear admiral who invented the first compiler for a computer programming language."
  },
  lisp: {
    name: "John McCarthy",
    language: "Lisp",
    img: "images/lisp.jpg",
    description: "John McCarthy was a computer scientist primarily recognized as the coiner of the term ai and the inventor of the Lisp programming language. "
  }
};

const selectEl = document.getElementById("inventorSelect");
const photoEl = document.getElementById("inventorPhoto");
const nameEl = document.getElementById("inventorName");
const langEl = document.getElementById("languageName");
const descEl = document.getElementById("descriptionText");

selectEl.addEventListener("change", () => {
  const key = selectEl.value;
  const info = inventorsData[key];

  if (info) {
    photoEl.src = info.img;
    photoEl.alt = info.name;
    nameEl.textContent = info.name;
    langEl.textContent = "Language: " + info.language;
    descEl.textContent = info.description;
  }
});