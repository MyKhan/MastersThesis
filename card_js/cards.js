var username;
var yob;


/**
 * Initialise cards
 */
var playerArray = [];
var compArray = [];
var playerScore = 0;
var compScore = 0;
var playerArrayRegions = [];
var computerArrayRegions = [];
var card1 = new Card(
  "Keskusta",
  5,
  3,
  11,
  "Resources/Maps/Keskusta.PNG",
  "Resources/Images/Keskusta.jpg"
);
var card2 = new Card(
  "Kivisalmi",
  1,
  2,
  1,
  "Resources/Maps/Kivisalmi.PNG",
  "Resources/Images/Kivisalmi.jpg"
);
var card3 = new Card(
  "Kuusimaki",
  4,
  4,
  8,
  "Resources/Maps/Kuusimaki.PNG",
  "Resources/Images/Kuusimaki.jpg"
);
var card4 = new Card(
  "Lepola",
  5,
  2,
  2,
  "Resources/Maps/Lepola.PNG",
  "Resources/Images/Lepola.jpg"
); 
var card5 = new Card(
  "Linnoitus",
  3,
  4,
  9,
  "Resources/Maps/Linnoitus.PNG",
  "Resources/Images/Linnoitus.jpg"
); 
var card6 = new Card(
  "Pajarila",
  1,
  10,
  5,
  "Resources/Maps/Pajarila.PNG",
  "Resources/Images/Pajarila.jpg"
);
var card7 = new Card(
  "Skinnarila", 
  9, 
  3, 
  12, 
  "Resources/Maps/Skinnarila.PNG",
  "Resources/Images/Skinnarila.jpg"
); 
var card8 = new Card(
  "Uus-Lavola", 
  1, 
  1, 
  12, 
  "Resources/Maps/Uus-Lavola.PNG",
  "Resources/Images/Uus-Lavola.jpg"
);

var cardArray = [card1, card2, card3, card4, card5, card6, card7, card8];
shuffleArray(cardArray);
num_cards = Math.floor(cardArray.length / 2);
for (i = 0; i < num_cards; i++) {
  playerArray.push(cardArray[i]);
  compArray.push(cardArray[i + num_cards]);
}



//Show Quote
function showQuote(nameOfPlace) {
  var message;
  
  switch (nameOfPlace) {
    case 'Kuusimaki':
        message = "Ever wanted a lake near your home where you could take a dip in clean waters and sit back and enjoy the scenery? This place might be for you… But watch out in case your home gets infested by plants… You might have to call in the zombies to wipe them out! Remember? Plants vs Zombies? The game? Umm… Ok…";
        break;
    case 'Lepola':
        message = "Remember that place from back when you were a child? Maybe where your extended family lived, or maybe where a friend’s family was situated, which seemed like a good place to live? Not much happening, but an acceptable locality? Lepola is that sort of place. Not great, but definitely not bad.";
        break;
    case 'Keskusta':
        message = "Having so many shops and stores and vegetation in parts, and since it is the center of town, no wonder Keskusta has a good mix of all the categories researched. It is a good place to visit if you do not want to remain in solitude, which is quite common outside of this part of town. But the number of reported invasive species in the semi-concrete jungle is surprising.";
        break;
    case 'Kivisalmi':
        message = "As they say in the cartoons, ‘Absolutely nothing to see here, move along folks.’ Just two Lost Items here, which may themselves have been flukes. I am sure. Or am I? What do you think?";
        break;
    case 'Linnoitus':
        message = "Wide open fields, dotted by plant life creeping wherever the sun shines, hiding treasures that people have misplaced and the rare notable area or two. Might be nice for a stroll or two.";
        break;
    case 'Pajarila':
        message = "Remember that time when you would always be losing your pen or something or other? You never did find out where all those items ran off to, right? Well it seems that we have found our culprit: Pajarila. A veritable black hole of lost items. But it isn't black; it is a green hole thanks to all the vegetation.";
        break;
    case 'Skinnarila':
      message = "Fancy going out for a walk with a loved one but you do not know where exactly to visit? By popular consensus, Skinnarila seems to have quite a few sites to see that would make you feel better than when you arrived. And on your way there, you can even run into some invasive species – just make sure you avoid any man-eating flowers if you ever find one!";
      break;
    case 'Uus-Lavola':
        message = "Judging by the amount of invasive species invading this part of the world, the World War of the Plants seems to have already begun with Uus-Lavola taking center-stage. Where are these plants migrating from? You didn't bring them along with you from your travels to different parts, did you? (Just Kidding!)";
      break;
}
  return message; 
}


//popup of success or failure
function popupOnOff(a) {
  if (a == 0){
  setTimeout(function() {
      document
        .getElementsByClassName("overlay1")[0]
        .classList.add("overlay-be-visible");
    }, 10);
  
  
  setTimeout(function() {
      document
        .getElementsByClassName("overlay1")[0]
        .classList.remove("overlay-be-visible");
    }, 1010);
}
  
  else if (a == 1) {
      setTimeout(function() {
      document
        .getElementsByClassName("overlay2")[0]
        .classList.add("overlay-be-visible");
    }, 10);
  
  
  setTimeout(function() {
      document
        .getElementsByClassName("overlay2")[0]
        .classList.remove("overlay-be-visible");
    }, 1010);
  }
  
  else {
          setTimeout(function() {
      document
        .getElementsByClassName("overlay3")[0]
        .classList.add("overlay-be-visible");
    }, 10);
  
  
  setTimeout(function() {
      document
        .getElementsByClassName("overlay3")[0]
        .classList.remove("overlay-be-visible");
    }, 1010);
  }
  
}


//Timer 
var timerActive = false;
var sec = 0;

function startTimer() {
  if (timerActive) {
      sec++;
//     console.log(sec);
    setTimeout(startTimer, 1000);
  }
}

function changeState() {
  if (!timerActive) {
    timerActive = true;
    console.log("Timer has started.");
    startTimer();
  } else {
    timerActive = false;
    console.log("Timer paused.");
  }
}
//End of Timer

//Saving to DB
var assignedRandomID =  Math.floor((Math.random() * 10000) + 1);
console.log(assignedRandomID);


function saveToDB(playerPoints, compPoints, completed, repeated) {
  
  playerArrayRegions = playerArrayRegions.toString();
  computerArrayRegions = computerArrayRegions.toString();
//  alert("Adding " + assignedRandomID);
    $.post("addToDB.php",
    {
      username: username,
      yearOfBirth: yob,
      playerScore: playerPoints,
      computerScore: compPoints,
      time: sec,
      complete: completed,
      repeat: repeated,
      assignedRandomID: assignedRandomID,
      playerCardsPlayed: playerArrayRegions,
      compCardsPlayed: computerArrayRegions,
    },
    function(data,status){
//       alert("Game has ended!");
//         alert("Data: " + data + "\nStatus: " + status);
    });
}
//End saving to DB




//Edit in DB
function updateInDB() {
//   alert("Updating " + assignedRandomID);
    $.post("updateInDB.php",
    {
      randomID: assignedRandomID,
    },
    function(data,status){
//         alert("Data: " + data + "\nStatus: " + status);
    });
}

//End Editing in DB



//function for saving region to array in DB
function saveRegionsToArray (playerRegion, computerRegion) {
  playerArrayRegions.push(playerRegion);
  computerArrayRegions.push(computerRegion);
}



function hideItImmediately() {
  var x = document.getElementById("game");
  x.style.display = "none";
}

function showContainer() {
  username = document.getElementById('username').value;
  yob = document.getElementById('birthyear').value;
//  console.log(username, yob);
  
  var button = document.getElementById("fight");
  var x = document.getElementById("game");
  var ct = document.getElementById("computer-table");
  var paragraph = document.getElementById("para-be-gone");

  button.style.visibility = "hidden";
  paragraph.style.display = "none";
  if (x.style.display == "none") {
    x.style.display = "block";
  }
  changeState();  
  next();
}

// JS overloading not allowed
function Card(region, val1, val2, val3, image1Src, image2Src) {
  this.region = region;
  this.att1 = "Nice Places";
  this.val1 = val1;
  this.att2 = "Lost Items";
  this.val2 = val2;
  this.att3 = "Invasive Species";
  this.val3 = val3;
  if (image1Src) {
    this.image1Source = image1Src;
  } else {
    this.image1Source =
      "https://ifera.org/wp-content/uploads/2017/12/Lappeenranta.jpg";
  }
    if (image2Src) {
    this.image2Source = image2Src;
  } else {
    this.image2Source =
      "https://ifera.org/wp-content/uploads/2017/12/Lappeenranta.jpg";
  }
}

function show(div_id) {
  var x = document.getElementById(div_id);
  x.style.display = "block";
}

function hide(div_id) {
  var x = document.getElementById(div_id);
  x.style.display = "none";
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


/**
 * Show the value of the players card and hide the computers card
 */
function next() {
  
  //save card region in array that is to be saved in DB 
  saveRegionsToArray(playerArray[0].region,compArray[0].region);
  
  
  document.getElementById("computer_front_img").src = compArray[0].image2Source;
  document.getElementById("second-card").querySelector(".front").querySelector(".card-footer").style.height =  document.getElementById("first-card").querySelector(".card-footer").offsetHeight+"px";

  var el = document.querySelector(".card-flip .flip");
  el.classList.remove("flipped");

  document.getElementById("player-property1").style.pointerEvents = "auto";
  document.getElementById("player-property2").style.pointerEvents = "auto";
  document.getElementById("player-property3").style.pointerEvents = "auto";

  var tds = document.getElementById("computer-table").querySelectorAll("td");
  for (var i = 0; i < tds.length; ++i) {
    tds[i].classList.add("table-td-border-bottom");
  }
  document.getElementById("score_message").innerHTML = "";
  if (playerArray.length > 0) {
    document.getElementById("city1").innerHTML = playerArray[0].region;
    document.getElementById("player_att1").innerHTML = playerArray[0].att1;
    document.getElementById("player_val1").innerHTML = playerArray[0].val1;
    document.getElementById("player_att2").innerHTML = playerArray[0].att2;
    document.getElementById("player_val2").innerHTML = playerArray[0].val2;
    document.getElementById("player_att3").innerHTML = playerArray[0].att3;
    document.getElementById("player_val3").innerHTML = playerArray[0].val3;
    document.getElementById("player_img").src = playerArray[0].image1Source;

    document.getElementById("city2-front").innerHTML = compArray[0].region;
    document.getElementById("city2-back").innerHTML = compArray[0].region;
    document.getElementById("comp_att1").innerHTML = "";
    document.getElementById("comp_val1").innerHTML = "";
    document.getElementById("comp_att2").innerHTML = "";
    document.getElementById("comp_val2").innerHTML = "";
    document.getElementById("comp_att3").innerHTML = "";
    document.getElementById("comp_val3").innerHTML = "";
    document.getElementById("computer_back_img").src = compArray[0].image1Source;
   
    document.getElementById("player_score").innerHTML = playerScore;
    document.getElementById("comp_score").innerHTML = compScore;
    hide("next");
  }
}


/*  Calculate the score and show the player the values of the computers card
 */
function score(att) {
  var message;
  var el = document.querySelector(".card-flip .flip");
  el.classList.add("flipped");

  document.getElementById("player-property1").style.pointerEvents = "none";
  document.getElementById("player-property2").style.pointerEvents = "none";
  document.getElementById("player-property3").style.pointerEvents = "none";

  var tds = document.getElementById("computer-table").querySelectorAll("td");
  for (var i = 0; i < tds.length; ++i) {
    tds[i].classList.remove("table-td-border-bottom");
  }
  
  var player_value = eval("playerArray[0].val" + att);
  var comp_value = eval("compArray[0].val" + att);
  if (player_value > comp_value) {
    playerScore += 1;
    
    //for success or failure popup
    popupOnOff(0);  //success
    
    
    // var message = showQuote(playerArray[0].region);
    // alert(message);
     setTimeout(function() {
          openModal();
    }, 1010);
    
    document.getElementById("player_score").innerHTML = playerScore;
    document.getElementById("score_message").innerHTML = "Well done, you have won";
  } else if (comp_value > player_value) {
    compScore += 1;
    
//       message = showQuote(compArray[0].region);
//       alert(message);
    popupOnOff(1);  //failure
    
     setTimeout(function() {
          openModal();
    }, 1010);

    
    document.getElementById("comp_score").innerHTML = compScore;
    document.getElementById("score_message").innerHTML = "Bad luck this time";
  } else {
    
//     message = showQuote(compArray[0].region);
//     alert(message);
    popupOnOff(2);  //failure
    
     setTimeout(function() {
          openModal();
    }, 1010);
    
    document.getElementById("score_message").innerHTML = "This round is a draw";
  }
  //write in the values of the computers card
  document.getElementById("comp_att1").innerHTML = compArray[0].att1;
  document.getElementById("comp_val1").innerHTML = compArray[0].val1;
  document.getElementById("comp_att2").innerHTML = compArray[0].att2;
  document.getElementById("comp_val2").innerHTML = compArray[0].val2;
  document.getElementById("comp_att3").innerHTML = compArray[0].att3;
  document.getElementById("comp_val3").innerHTML = compArray[0].val3;

  if (player_value > comp_value) {
    var shiftedElement = compArray.shift();
    playerArray = playerArray.concat(shiftedElement);
    var ownShiftedElement = playerArray.shift();
    playerArray = playerArray.concat(ownShiftedElement);
  } else if (comp_value > player_value) {
    var shiftedElement = playerArray.shift();
    compArray = compArray.concat(shiftedElement);
    var ownShiftedElement = compArray.shift();
    compArray = compArray.concat(ownShiftedElement);
  } else {
    var shiftedElement = compArray.shift();
    compArray = compArray.concat(shiftedElement);
    shiftedElement = playerArray.shift();
    playerArray = playerArray.concat(shiftedElement);
  }

  if (playerArray.length > 0 && compArray.length > 0) {
    show("next");
  } else {
    changeState();
    document.getElementById("score_message").innerHTML = "No more cards. Play Again?";
    saveToDB(playerScore, compScore, 1, 0);
    show("play_again");
	show("go-to-survey");
//     console.log(playerArrayRegions + ', ' + computerArrayRegions);
  }
}

function saveAndLoad() {    //for when the application is closed via the close button
 
  //if timer has ended, then no need to save in DB, but if timer still running, then just run underneath script
  if (timerActive) {
    changeState();
	saveToDB(playerScore, compScore, 0, 0);
  }
  //	window.location.href = "https://www.google.com";
  var url = "https://docs.google.com/forms/d/e/1FAIpQLSfSUGzPHHrBWa3mjt7Ph67dVqyuyV4n8kckoNrEBzhaEzi7hg/viewform?usp=pp_url&entry.1741243619="+username+"&entry.275506627="+yob;
  //	console.log(url);
  window.location.href = url;
}

function goToSurvey() {			//goes directly to survey without saving anything
  var url = "https://docs.google.com/forms/d/e/1FAIpQLSfSUGzPHHrBWa3mjt7Ph67dVqyuyV4n8kckoNrEBzhaEzi7hg/viewform?usp=pp_url&entry.1741243619="+username+"&entry.275506627="+yob;
  window.location.href = url;
}

function reload() {  //for when the application is restarted via Play Again button
//   changeState();
  updateInDB();   //need to edit the ID saved previously and update it with repeat as true
    alert("Lets Go!");
  window.location.href = window.location.href;
  window.location.reload(true);
}



//Quotation Modal Calling 

// Get modal element
var modal = document.getElementById('simpleModal');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal(e){
var message = showQuote(playerArray[0].region);
  modal.style.display = 'block';
  $('#simpleModal').find('h2').html('<span>' + playerArray[0].region + '</span>'); 
    $('#simpleModal').find('p').html('<span>' + message + '</span>'); 
}

// Function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}


$(document).ready(function(){
            $('body').find('img[src$="https://cdn.rawgit.com/000webhost/logo/e9bd13f7/footer-powered-by-000webhost-white2.png"]').parent().closest('a').closest('div').remove();
        });
		
		
// var areYouReallySure = false;
// function areYouSure() {
    // if(allowPrompt){
        // if (!areYouReallySure && true) {
            // areYouReallySure = true;
            // var confMessage = "Are you sure?";
			// saveToDB(playerScore, compScore, 0, 0);
            // return confMessage;
        // }
    // }else{
        // allowPrompt = true;
    // }
// }

// var allowPrompt = true;
// window.onbeforeunload = areYouSure;		