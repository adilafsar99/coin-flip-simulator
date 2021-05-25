var player1 = "";
while (player1 === "" || player1 === null) {
				player1 = prompt("Enter P1 Name:");
				if (player1 === null) {
								alert("Don't back down now!");
				}
				else if (player1 === "") {
								alert("Please give a name!");
				}
}
var p1Choice = "A";
while ((p1Choice !== "heads" && p1Choice !== "tails") || p1Choice === "") {
				p1Choice = prompt("Heads Or Tails!\nEnter your choice:").toLowerCase();
				if (p1Choice === "") {
								alert("You entered nothing!");
				}
				else if (p1Choice !== "heads" && p1Choice !== "tails") {
								alert("Invalid Choice!");
				}
}
var player2 = "";
while (player2 === "" || player2 === null) {
				player2 = prompt("Enter P2 Name:");
				if (player2 === null) {
								alert("Don't back down now!");
				}
				else if (player2 === "") {
								alert("Please give a name!");
				}
}


if (p1Choice  === "heads") {
    var p2Choice = "Tails";
}

else {
    var p2Choice = "Heads";
}

var randomNum = Math.round(Math.random());
document.write(randomNum);
if (randomNum === 0) {
				var coinSide = "Heads";
}
else {
				var coinSide = "Tails"
}

if (coinSide === "Heads") {
    if (p1Choice === "heads") {
        var winnerName = player1;
    }
    else {
        var winnerName = player2;
    }
}

else {
    if (p1Choice === "tails") {
        var winnerName = player1;
    }
    else {
        var winnerName = player2;
    }
}

document.write("<div class='page'>");
document.write("<h1>Coin Flip Simulator</h1>");
document.write("<h2>Player 1</h2>");
document.write("<h3>Name</h3>");
document.write("<p>" + player1 + "</p>");
document.write("<h3>Choice</h3>");
document.write("<p>" + p1Choice[0].toUpperCase() + p1Choice.slice(1) + "</p>");
document.write("<h2>Player 2</h2>");
document.write("<h3>Name</h3>");
document.write("<p>" + player2 + "</p>");
document.write("<h3>Choice</h3>");
document.write("<p>" + p2Choice + "</p>");
document.write("<h2>Coin Flip Result</h2>");
document.write("<h3>" + coinSide + "</h3>");
document.write("<h2>Winner</h2>");
document.write("<h3>" + winnerName + "</h3>");
document.write("</div>");
