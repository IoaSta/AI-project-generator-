function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "We are all debts owed to death",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
