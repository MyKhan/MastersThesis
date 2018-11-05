<!DOCTYPE html>


   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
		  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
      <title>Sensei Top Trumps</title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> 
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="card_styles/cards.css">      
  
  </head>

<body onload="hideItImmediately()">

  <button type="button" class="close" aria-label="Close" onclick=saveAndLoad()>
    <span aria-hidden="true">&times;</span>
  </button>

  <h2>Top Trumps</h2>

	<div class="container">
		<div class="row">
		  <div class="col-sm-5">
			<h3>Instructions</h3>
			<ul>
			  <li>You and your opponent are given 4 cards each.</li>
			  <li>The ones appearing on the left are your cards, while the ones on the right are your opponent’s cards.</li>
			  <li>Each card has three attributes at the bottom: Nice Places, Lost Items and Invasive Species.</li>
			  <li>Your card shows the map of your location, while you can only see a photograph of your opponent’s location.</li>
			  <li><strong>Guess which one of the three attributes associated with your card has more occurences than on your opponent’s. The game ends when there is a 4 point gap.</strong></li>
			</ul>
		  </div>
		  <div class="col-sm-2">
		  </div>

		  <div class="col-sm-5">
			<h3>Relevant Information</h3>
			<ul>
			  <li><strong>Nice Places: </strong>Scenic areas that people liked and accordingly documented.</li>
			  <li><strong>Lost Items: </strong>Lost Items that were found by visitors to the place.</li>
			  <li><strong>Invasive Species: </strong>Plant life not native to the locality which are invading the area.</li>
			</ul>
			<p>If you would like to stop playing during the game, the close button at the top right corner will take you to the survey. Otherwise, the play again and survey buttons will come at the end of the game.</p>
			<p>Please fill the survey after the game. Thank you.</p>
		  </div>
		</div>
	  </div>
	  <p id="para-be-gone">So hit that Fight button to show your card. And then, FIGHT!</p>
	
	<div id="fight">
		
		 <form>
			Enter your Assumed Username:
			<input name="username" type="text" id="username">
			<br><br>
			 Enter your Assumed Year of Birth:
			<input name="birthyear" type="text" id="birthyear">
		</form>
		
		<div onclick=showContainer()><a href="#" class="next round">Fight!</a></div>
	</div>
	


  <div id="game">
  
  <!--  Success or failure popup  -->
      <div class="overlay1">
      <div class="popup-success">
        <div class="content">
          You Won!
        </div>
      </div>
    </div>

    <div class="overlay2">
      <div class="popup-failure">
        <div class="content">
          You Lost!
        </div>
      </div>
    </div>
  
    <div class="overlay3">
      <div class="popup-draw">
        <div class="content">
          It is a Draw!
        </div>
      </div>
    </div> 
  
  
  
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          
          <div id="first-card">
            
            <div class="card bg-info text-white text-center">
              <div id="city1" class="card-header">City 1</div>
              <div class="card-body">
                <img id="player_img" src="//:0" alt="Player Location Map" />
              </div>
              <div class="card-footer">
                <div class="container">
                  <table id="player-table">
                    <tr id="player-property1" onclick="score('1')">
                      <td class="td--center-align"><span><img src="Resources/Nice_Places.png" alt="Nice Places" /></span></td>
		      <td id="player_att1"></td>
                      <td id="player_val1"></td>
                    </tr>
                    <tr id="player-property2" onclick="score('2')">
                      <td class="td--center-align"><span><img src="Resources/Lost_item.png" alt="Lost Items" /></span></td>
		      <td id="player_att2"></td>
                      <td id="player_val2"></td>
                    </tr>
                    <tr id="player-property3" onclick="score('3')">
                      <td class="td--center-align"><span><img src="Resources/plant.png" alt="Invasive Species" /></span></td>
		      <td id="player_att3"></td>
                      <td id="player_val3"></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div class="col-sm-6">

          <div id="second-card">

            <!-- Card Flip -->
            <div class="card-flip">
              <div class="flip">

                <!-- Front Card -->
                <div class="front">
                  <div class="card bg-info text-white text-center">
                    <div id="city2-front" class="card-header">City 2</div>
                    <div class="card-body">
                      <img id="computer_front_img" src="//:0" alt="Computer Location Image" >
                    </div>
                    <div class="card-footer">
                      <img src="Resources/sensei_logo.png" alt="Sensei Logo" />
                    </div>
                  </div>
                </div>

                <!-- Back Card -->
                <div class="back">
                  <div class="card bg-info text-white text-center">
                    <div id="city2-back" class="card-header">City 2</div>
                    <div class="card-body">
                      <img id="computer_back_img" src="//:0"  alt="Computer Location Map" />
                    </div>
                    <div class="card-footer">
                      <div class="container">
                        <table id="computer-table">
                          <tr id="comp_property1">
                            <td class="td--center-align"><span><img src="Resources/Nice_Places.png" alt="Nice Places" /></span></td>
		            <td id="comp_att1"></td>
                            <td id="comp_val1"></td>
                          </tr>
                          <tr id="comp_property2">
                            <td class="td--center-align"><span><img src="Resources/Lost_item.png" alt="Lost Items" /></span></td>
		      	    <td id="comp_att2"></td>
                            <td id="comp_val2"></td>
                          </tr>
                          <tr id="comp_property3">
                            <td class="td--center-align"><span><img src="Resources/plant.png" alt="Invasive Species" /></span></td>
		            <td id="comp_att3"></td>
                            <td id="comp_val3"></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="container">
        <div class="row">

          <div id="player-score-message" class="col-sm-4" style="text-align: left">Player score:
            <div id="player_score" style="text-align: left">0</div>
          </div>

          <div id="elongate-this-div" class="col-sm-4 replay-buttons">
            <div id="score_message">
              <i></i>
            </div>
            <div id="next" onclick=next()>
              <a href="#" class="next round">Next card</a>
            </div>

            <div id="play_again" class="hidden" onclick=reload()>
              <a href="#" class="next round">Play Again</a>
            </div>
			
			<div id="go-to-survey" class="hidden">    
              <a href="javascript:goToSurvey()" class="next round">Survey</a>
            </div>
			
          </div>

          <div id="conputer-score-message" class="col-sm-4" style="text-align: right">Computer score:
            <div id="comp_score" style="text-align: right">0</div>
          </div>

        </div>
      </div>
    </div>
  </div>
	
	    
<!--  The Quotations Modal  -->
	<div id="simpleModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Modal Header</h2>
          <span class="closeBtn">&times;</span>  
      </div>
      <div class="modal-body">
        <p>Hello...I am a modal</p>
      </div>
    </div>
  </div>
	
	
	<script src="card_js/cards.js"></script>  
</body>
</html>

             