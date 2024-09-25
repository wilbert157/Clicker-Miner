var rocks = 0;
var pickBonus = 0;
var pick = 1;

function rockClick(number){
	rocks = rocks + number;
	document.getElementById("rocks").innerHTML = rocks;
};

function upgradePickaxe(){
	var upgradeCost = Math.floor(10 * Math.pow(1.1,pickBonus));  	//works out the cost of this upgradeCost
	if(rocks >= upgradeCost){									 	//Checks if the player can afford the upgrade
		pickBonus = pickBonus + 1;								 	//increases the bonus
		rocks = rocks - upgradeCost;							 	//removes the rocks spent
		pick = pick + 1;									//increases the per click reward based on the upgrade level.
		document.getElementById('pickBonus').innerHTML = pickBonus; //updates the number of pickaxe bonus
		document.getElementById('rocks').innerHTML = rocks;			//updates the number of rocks for the userAgent
		document.getElementById('pick').innerHTML = pick;			//updates the per click reward.
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,pickBonus));		//works out the cost of the next upgrade
	document.getElementById('upgradeCost').innerHTML = nextCost;	//updates the cursor cost for the user
};


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
	
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("miningTab").click();