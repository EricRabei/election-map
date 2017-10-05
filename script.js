var winner = "";
var createcandidate = function (name, partyColor) {
	var politician = {};
	politician.name= name;
	politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor=partyColor;
	console.log("cadidate: "+politician.name);

    politician.voteTally= function() {
      this.totalVotes = 0;
      for (var i=0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
      }
    };

	return politician;
};

var setStateResults = function(state) {
      theStates[state].winner = null;

  if (jill.electionResults[state] > ella.electionResults[state]) {
      theStates[state].winner = jill;

    } else {
      theStates[state].winner = ella;
      }

    var stateWinner = theStates[state].winner;
    if (stateWinner !=null) {
      theStates[state].rgbColor = stateWinner.partyColor;
     }
      else {
        theStates[state].rgbColor = [11, 32, 57];
      }
    // state table information
    var stateInfoTable = document.getElementById('stateResults');

    // variables for the table information
    var header = stateInfoTable.children[0];
    var body = stateInfoTable.children[1];
    var stateName= header.children[0].children[0];
    var abbrev = header.children[0].children[1];
    var name1 = body.children[0].children[0];
    var results1 = body.children[0].children[1];
    var name2= body.children[1].children[0];
    var results2 = body.children[1].children[1];
    var winnername= body.children[2].children[1];

    // populating the table information
    stateName.innerText = theStates[state].nameFull;
    abbrev.innerText= theStates[state].nameAbbrev;

    name1.innerText= jill.name;
    results1.innerText = jill.electionResults[state];

    name2.innerText = ella.name;
    results2.innerText = ella.electionResults[state];

    if (theStates[state].winner === null){
      winnerName.innerText=winner;
    } else {
          winnername.innerText = theStates[state].winner.name;
    }
};

var jill = createcandidate("jill smith", [132, 17, 11]);
var ella = createcandidate("Ella Plot", [245, 141, 136]);
jill.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
ella.electionResults= [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

jill.electionResults[9] = 1;
ella.electionResults[9] = 28;

jill.electionResults[4] = 17;
ella.electionResults[4] = 38;

jill.electionResults[43] = 11;
ella.electionResults[43] = 27;

jillVotes = jill.voteTally();
ellaVotes = ella.voteTally();

console.log(jill.name +" received "+ jill.totalVotes + " votes");
console.log(ella.name +" received "+ella.totalVotes + " votes");

if (jill.totalVotes > ella.totalVotes){
  winner = jill.name;
} else if (ella.totalVotes > jill.totalVotes) {
  winner = ella.name;
} else {
  winner = "It is a draw";
}

console.log("The winner is: " + winner + " !");
console.log("Jill's color is: "+jill.partyColor);
console.log("Ella's color is: "+ella.partyColor);

var countryInfoTable = document.getElementById("countryResults");
var row= countryInfoTable.children[0].children[0];

  row.children[0].innerText = jill.name;
  row.children[1].innerText = jill.totalVotes;
  row.children[2].innerText = ella.name;
  row.children[3].innerText = ella.totalVotes;
  row.children[5].innerText = winner;
