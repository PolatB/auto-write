const text = "I am going to be a Front-End developer one day :))";

let index = 0;

function writeText() {
  document.body.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100);
