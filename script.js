
var createPolitician = function (politicianName, partyColor)
{
  var politician = {};
  politician.name= politicianName;
  politician.election_result = null;
  politician.total_votes = 0;
  politician.party_color = partyColor;
  politician.tally_up_total_votes = function ()

{
  this.total_votes = 0;
  for (var i = 0; i < this.election_result.length; i++)
  {
    this.total_votes= this.total_votes + this.election_result[i];
  }
};
  return politician;
};
       
 
var Rudolph = createPolitician("Rudolph", [245,141,136]);
var Clarice = createPolitician("Clarice",[132,17,11]);
Rudolph.election_result =[5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
Clarice.election_result =
[4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
Rudolph.election_result[9] = 1;
Rudolph.election_result[4] = 17;
Rudolph.election_result[43] = 11;

Clarice.election_result[9]= 28;
Clarice.election_result[4]= 38;
Clarice.election_result[43]= 27;

console.log(Rudolph.total_votes);
console.log(Clarice.total_votes);


var setStateResults = function(state){
 
    theStates[state].winner = null;
 
    if (Rudolph.election_result[state] > Clarice.election_result[state]) {
        
        theStates[state].winner = Rudolph; //set winner to the candidate object, not the candidate's name this time
 
    } else if (Rudolph.election_result[state] < Clarice.election_result[state]) {
 
        theStates[state].winner = Clarice;
 
    }
  
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  
  
  var stateWinner = theStates[state].winner;
 
if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.party_color;
} else {
    theStates[state].rgbColor = [11,32,57];
}
 stateName.innerText = theStates[state].nameFull;
 abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
candidate1Name.innerText = Rudolph.name;
candidate2Name.innerText = Clarice.name;
 
candidate1Results.innerText = Rudolph.election_result[state];
candidate2Results.innerText = Clarice.election_result[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
};


console.log( "Rudolph party color is " + Rudolph.party_color);                  
console.log("Clarice party color is " + Clarice.party_color);


Rudolph.tally_up_total_votes();
Clarice.tally_up_total_votes();

var winner;
    if (Rudolph.total_votes > Clarice.total_votes){
        winner = Rudolph.name;
    }
        else if(Clarice.total_votes > Rudolph.total_votes){
        winner = Clarice.name;
        }
        else{
          winner = "DRAW"
    }

console.log(winner)


var countryInfoTable = document.getElementById("countryResults");
var body = countryInfoTable.children[0].children[0];
body.children[0].innerText = Rudolph.name;
body.children[1].innerText = Rudolph.total_votes;
body.children[2].innerText = Clarice.name;
body.children[3].innerText = Clarice.total_votes;
body.children[5].innerText = winner;





