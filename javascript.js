const apikey = "466f0346c828f5d08d3ca9c0b67ad15d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");



async function checkWeather(city){
     const response = await fetch(apiUrl + city + `&appid=${apikey}`);


     if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
     }
     else{
          var data = await response.json();
          document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

     if(data.weather[0].main == "Clouds"){
          weathericon.src = "images/clouds.png"
     }
     else if(data.weather[0].main == "Clear"){
          weathericon.src = "images/clear.png"
     }
     else if(data.weather[0].main == "Rain"){
          weathericon.src = "images/rain.png"
     }
     else if(data.weather[0].main == "Drizzle"){
          weathericon.src = "images/drizzle.png"
     }
     else if(data.weather[0].main == "Mist"){
          weathericon.src = "images/mist.png"
     }

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
     }
     
}
searchbtn.addEventListener("click",()=>{
     checkWeather(searchbox.value);
})

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menus');
  menu.style.display = 'none'; // Ensure the menu is hidden on page load
  window.addEventListener('scroll', function() {
    var head = document.querySelector('.top');
    var h1 = this.document.querySelector('.viv');
    if (window.scrollY > 600) {
      head.style.background = 'linear-gradient(to bottom, #323232 10%, #3F3F3F 95%, #1C1C1C 150%)';
      // head.style.background = 'linear-gradient(315deg, #08e17f 45%, #5be540 94%)';
      

      h1.style.color = 'white';
      head.style.transform = 'scaleY(1.1)';
    } else {
      head.style.background = '';
      h1.style.color = '';
    }
  });
});
















function addedmenu() {
  var menu = document.querySelector('.menus');
  var men = document.querySelector('.menu');
  var cross = document.querySelector('.cross');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
    men.style.display = 'none';
    cross.style.display = 'block';
  }
}
function removemenu(){
     var menu = document.querySelector('.menus');
     var cross = document.querySelector('.cross');
     var men = document.querySelector('.menu');
     menu.style.display = 'none';
     cross.style.display = 'none';
     men.style.display = 'block';

}

// JavaScript for adding fade-in and fade-out effects to elements on scroll
document.addEventListener('DOMContentLoaded', function() {
  var elementsWithFadeEffect = document.querySelectorAll('.fade-effect');
  var elementsWithFadeOut = document.querySelectorAll('.fade-out');

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addFadeInClass() {
    elementsWithFadeEffect.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('fade-visible');
      } else {
        element.classList.remove('fade-visible');
      }
    });
  }

  function addFadeOutClass() {
    elementsWithFadeOut.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.remove('fade-hidden');
      } else {
        element.classList.add('fade-hidden');
      }
    });
  }

  addFadeInClass();
  addFadeOutClass();

  window.addEventListener('scroll', function() {
    addFadeInClass();
    addFadeOutClass();
  });
});








//QUOTE GENERATOR
const quotes = document.querySelector('.quote');
const author = document.querySelector('.person');
const change = document.querySelector('.nextquote');
const enterdquote = document.getElementById('quoteInput');
const enterdname = document.getElementById('nameInput');
const change2 = document.getElementById('enterdvalues');
data = [
    {quote: "“Ask the right questions,and nature will open the doors to her secrets.”", author: "- C.V Raman"},
    {quote: "“Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.”", author: "- A.P.J Abdul Kalam"},
    {quote: "“Work performed with higher knowledge or skill, capacity or ambition, usually brings a correspondingly higher reward.”" , author: "- Mokshagundam Visvesvaraya"},
    {quote: "“Dream isn't What you see while resting something doesnt allow you to rest.”", author: "- Nambi Narayanan"},
    {quote: "“When People throw Stones at You , You turn them into Milestones.”", author: "- Sachin Tendulkar"}
];


change.addEventListener("click", ()=>{
let random = Math.floor(Math.random()*data.length);
quotes.innerHTML = data[random].quote;
author.innerHTML = data[random].author;

})
change2.addEventListener("click",()=>{
// enterdquote.value = quotes.innerHTML;
// quotes.innerHTML = enterdquote.innerText;
const enteredQuote = "“" + enterdquote.value + ".”";
    const enteredAuthor = "- " + enterdname.value;
    if (enteredQuote && enteredAuthor) {
        quotes.innerHTML = enteredQuote;
        author.innerHTML = enteredAuthor;
        data.push({ quote: enteredQuote, author: enteredAuthor });
        enterdquote.value = '';
        enterdname.value = '';
        wall.style.backgroundImage = 'url(./new-background-image.jpg)';
    } else {
        alert("Please enter both a quote and an author.");
    }
    localStorage.setItem('data', JSON.stringify(data));
})




//QUIZ JS
var Ques = document.querySelector('.questionquiz');
var scoreDisplay = document.getElementById('score');
let Index = 0;
let score = 0;
var Options = document.querySelectorAll('.opt');
var start = document.querySelector('.start');
var cont = document.querySelector('.containers');
var card4 = document.querySelector('.card4');
start.addEventListener("click", function (e){
  cont.style.display='flex';
  card4.style.background = 'url(./kurzgesagt-to.jpg)no-repeat center/cover';
  e.target.style.display = 'none';
})
var inp = document.querySelector('.Nameof');





var data = [
  {
    question: "Who played the role of the hero in 'Sapta Sagaradaache Ello'?",
    options:["Rakshit Shetty","Darshan Thoogudeepa","Upendra Rao","Yash"]
  },{
            question: "Which gas makes up the majority of Earth's atmosphere?",
            options:[" Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"]
          },{
            question: "What is the largest planet in our solar system?",
            options: ["Earth", "Mars", "Jupiter", "Venus"]
          },{
            question: "What is the smallest bone in the human body?",
            options: ["Femur","Tibia","Humerus","Stapes"]
          },
];

function Next() {
  inp.style.display='none';
  if (Index < data.length) {
    Ques.innerHTML = data[Index].question;

    for (let i = 0; i < Options.length; i++) {
      Options[i].innerHTML = data[Index].options[i];
      Options[i].addEventListener("click", function (e) {
        if (e.target.innerHTML === "Rakshit Shetty") {
          score++;
        }
        else if (e.target.innerHTML === "Jupiter") {
          score++;
        }
        else if (e.target.innerHTML === "Stapes") {
          score++;
        }
        else if (e.target.innerHTML === "Nitrogen") {
          score++;
        }
        
        scoreDisplay.innerHTML = "Score: " + score;
        
        if (Index < data.length - 1) { 
          Index++; 
          Ques.innerHTML = data[Index].question;
          for (let j = 0; j < Options.length; j++) {
            Options[j].innerHTML = data[Index].options[j];
          }
        } else {
          Ques.innerHTML = inp.value +" Scored: " + score;
          Ques.style.fontSize = "35px";
          Ques.style.backgroundColor = "lightgreen";
          Ques.style.color = "black";
          for (let j = 0; j < Options.length; j++) {
            Options[j].style.display = 'none';
          }
        }
      });
    }
  }
  else {
    Ques.innerHTML = "No More Questions - Quiz Done ";
  }

  Index++; 
}



function updateScoreDisplay() {
    scoreDisplay.innerHTML = "Score: " + score;
}




const isDesktopWidth = window.matchMedia("(min-width: 701px)").matches;

if (isDesktopWidth) {
  const cards = document.querySelectorAll('.card, .card2, .card3, .card4');
  const nextButton = document.querySelector('.nextslide');
  let currentIndex = 0;

  nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length) {
      
        cards[currentIndex].style.width = '600px';
        cards[currentIndex].style.zIndex = '1';
        cards[currentIndex].style.display = 'block';

      currentIndex++;
    }
  });
}

function checkViewportWidth() {
  const isDesktopWidth = window.matchMedia("(min-width: 701px)").matches;

  if (isDesktopWidth) {
    window.location.reload();
  }
}

window.addEventListener("resize", checkViewportWidth);

