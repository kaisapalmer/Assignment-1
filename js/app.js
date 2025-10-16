/* How it's connected:
* The JavaScript file is linked to index.html using a script-tag: <script src="js/app.js"></script>
* JavaScript is making for example a button interactive,
* it defines what should happen when a user clicks the button.
* */

/* The code connects JavaScript to the HTML element that has the ID "button"
so JavaScript can interact with it */
const buttonText = document.getElementById('buttonText');

/* The code connects JavaScript to the HTML element that has the ID "para2"
so JavaScript can interact with it */
const para2 = document.getElementById('para2');

// Creates an event that changes text on a paragraph when clicking a button
buttonText.addEventListener('click', (e) => {
  para2.innerHTML = "This is the text when you click on the button!";
});

/* The code connects JavaScript to the HTML element that has the ID "buttonTime"
so JavaScript can interact with it */
const buttonTime = document.getElementById('buttonTime');

// Creates an event that shows the current time when a user clicks the button
buttonTime.addEventListener('click', (e) => {
  time();
});

// Creates a function that shows the current time when a user clicks a button
function time(){
  const currentDate = new Date();
  const timeNow = currentDate.getHours() + ":"
                        + currentDate.getMinutes() + ":"
                        + currentDate.getSeconds();
  document.getElementById('timeText').innerHTML = "The time is: "+timeNow;
}

// Creates a constant variable with a list of value
const vegetables = ["Cucumber", "Tomato", "Salad", "Corn"]

/* The code connects JavaScript to the HTML element that has the ID "buttonVeg"
so JavaScript can interact with it */
const buttonVeg = document.getElementById("buttonVeg")
/* The code connects JavaScript to the HTML element that has the ID "listVeg"
so JavaScript can interact with it */
const listVeg = document.getElementById("listVeg")

//Declaring a variable named "index" and giving it the value 0
let index = 0;

// Creates an event that shows one vegetable at a time when the button is clicked
buttonVeg.addEventListener("click", () => {
  //If there are still vegetables to show. Add one more to the list
  if (index < vegetables.length) {
    const li = document.createElement("li");
    li.textContent = vegetables[index];
    listVeg.appendChild(li);
    index++;
    //If all vegetables have been shown, reset the list
  } else {
    index = 0;
    listVeg.innerHTML = "";
  }
})

