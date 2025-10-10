
const button = document.getElementById('button');

const para2 = document.getElementById('para2');

// making an event that changes text on a paragraph when clicking a button
button.addEventListener('click', (e) => {
  para2.innerHTML = "This is the text when you click on the button!";
})
