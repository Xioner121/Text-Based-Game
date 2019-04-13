// Rules:
console.log(`
    ____________
   /  ______   /    █▀▀ █▀▀█ █▀▀█ █▀▀▄    █▀▀▀ █▀▀█ █▀▄▀█ █▀▀
  /  /_____/  /     █░░ █▄▄█ █▄▄▀ █░░█    █░▀█ █▄▄█ █░▀░█ █▀▀
 /___________/      ▀▀▀ ▀░░▀ ▀░▀▀ ▀▀▀░    ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀

▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀ ▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀▀▀▀▀ ▀░░▀ ▀░░░▀ ▀▀▀▀▀▀▀ ▀░░▀ ▀░░░▀
`);

console.log(`Rules: You will be given nine random cards, with values from 0-8. The goal is to reach a sum of 60 or greater. After the first card draw, you will be
given the option to re-draw your cards. Both you and the AI have to agree in order for it to happen. After the first draw, each player will take turns drawing cards one at a time. You may choose
to keep or discard it. However, if it is discarded, it will be revealed, and the player going next has the option to draw it instead.`);

//Variable declarations

var Cards = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight"
}
var RedrawAi = ""
var RedrawPlayer = ""
var PlayerCards = []
var PlayerCardsSum = []
var AiCards = []
var Draw = 1
var AiAggression = Math.floor(Math.random() * 100);
var Discard = 0
var Turn = 1
var GameOver = false
// Player Card Drawing

var i = 0
for (i = 0; i < 9; i++) {
Draw = Math.floor(Math.random() * 9);
PlayerCards.push(Cards[Draw]);
PlayerCardsSum.push(Draw);
 }

//Player Card sum calculation

var bum = PlayerCardsSum.reduce(add);

function add(accumulator, a) {
    return accumulator + a;
}

//Player Card output

console.log("Card Set: " + PlayerCards);

//Player card Sum output

console.log(`Card Sum: ` + bum)

// Ai Card Drawing

for (i = 0; i < 9; i++) {
Draw = Math.floor(Math.random() * 9);
AiCards.push(Draw)
 }

// Ai Sum Calculation

var sum = AiCards.reduce(addd);

function addd(accumulator, a) {
    return accumulator + a;
}

//Game end Checking
function GameEnd() {sum = AiCards.reduce(addd);
  bum = PlayerCardsSum.reduce(add);
  if (sum >= 60) {
  alert("Ai has reached a sum or over 60, you have lost.");
  window.location.reload();
} else if (bum >= 60) {
  alert("Player has reached a sum or over 60, and has won!");
  window.location.reload();
}
}
// Asking for Re-drawing
console.log("Do you Wish to re-draw? Y for Yes, N for No");
// Card Drawing calaculation function
function Replace1() {

console.log("Drawing card: ");
Draw = Math.floor(Math.random() * 9);
console.log("Card Drawn: " + Cards[Draw] + ", " + "Do you wish to keep card? Y or N");
console.log("Current Card set " + PlayerCards);

window.addEventListener('keydown', function jes(event) {
    if ( event.keyCode == 89) {
      console.log("Card has been kept, which card do you wish to replace? Press 1 for 1st card, 2 for 2nd card, ect.");
      window.removeEventListener('keydown', jes);
      window.addEventListener('keydown', function jess(event) {
        switch (event.keyCode) {
          case 49:
          PlayerCards[0] = Cards[Draw]
          PlayerCardsSum[0] = Draw
          console.log("Card Replaced. New Set: " + PlayerCards);
          bum = PlayerCardsSum.reduce(add);
          console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        GameEnd();
        Replace2();
        break;
        case 50:
        PlayerCards[1] = Cards[Draw]
        PlayerCardsSum[1] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        GameEnd();
        Replace2();
        break;
        case 51:
        PlayerCards[2] = Cards[Draw]
        PlayerCardsSum[2] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        GameEnd();
        Replace2();
        break;
        case 52:
        PlayerCards[3] = Cards[Draw]
        PlayerCardsSum[3] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        GameEnd();
        Replace2();
        break;
        case 53:
        PlayerCards[4] = Cards[Draw]
        PlayerCardsSum[4] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        GameEnd();
        Replace2();
        break;
        case 54:
        PlayerCards[5] = Cards[Draw]
        PlayerCardsSum[5] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        GameEnd();
        Replace2();
        break;
        case 55:
        PlayerCards[6] = Cards[Draw]
        PlayerCardsSum[6] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        Replace2();
        GameEnd();
        break;
        case 56:
        PlayerCards[7] = Cards[Draw]
        PlayerCardsSum[7] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        Replace2();
        GameEnd();
        break;
        case 57:
        PlayerCards[8] = Cards[Draw]
        PlayerCardsSum[8] = Draw
        console.log("Card Replaced. New Set: " + PlayerCards);
        bum = PlayerCardsSum.reduce(add);
        console.log("New Sum: " + bum)
        window.removeEventListener('keydown', jess);
        Replace2();
        GameEnd();
        break;
      };
    }
  )
    }
    else if ( event.keyCode == 78 ) {
        console.log("Card will be discarded");
        var Discard = Draw;
        console.log("Current Card Set: " + PlayerCards);
        window.removeEventListener('keydown', jes);
        Replace2();
      }
    }
  )
}


// Ai Agression calculation
if (sum * AiAggression <= 1750) {
  var RedrawAi = true;
} else {
  var RedrawAi = false;
};
var AfterAsk = ""

// Re-drawing calaculation

window.addEventListener('keydown', function jeds(event) {
    if ( event.keyCode == 89 && RedrawAi == true) {
        alert("Both Players have agreed to re-Draw");
        window.location.reload();
    }
    else if ( event.keyCode == 78 ) {
        console.log("Awnswer returned False, Cards will not be re-drawn");
        window.removeEventListener('keydown', jeds);
        Replace1();
		} else if ( event.keyCode == 89 && RedrawAi == false ) {
      console.log("Ai has disagreed. Cards will not be re-drawn");
      window.removeEventListener('keydown', jeds);
      Replace1();
      }
        },
        );

  // Ai Response Calculation function
        function Replace2() {
        Draw = Math.floor(Math.random() * 9);
        console.log("Ai Drawing Cards***");
        var AiMin = Math.min(AiCards[0], AiCards[1], AiCards[2], AiCards[3], AiCards[4], AiCards[5], AiCards[6], AiCards[7], AiCards[8])
        if (Discard >= Draw && Discard > AiMin) {
          console.log("Ai Has Taken Discard Card of " + Discard + "***");
          switch (AiMin) {
            case AiCards[0]: AiCards[0] = Draw
            break;
            case AiCards[1]: AiCards[1] = Draw
            break;
            case AiCards[2]: AiCards[2] = Draw
            break;
            case AiCards[3]: AiCards[3] = Draw
            break;
            case AiCards[4]: AiCards[4] = Draw
            break;
            case AiCards[5]: AiCards[5] = Draw
            break;
            case AiCards[6]: AiCards[6] = Draw
            break;
            case AiCards[7]: AiCards[7] = Draw
            break;
            case AiCards[8]: AiCards[8] = Draw
            break;
          };
          sum = AiCards.reduce(addd);
          GameEnd();
          console.log("------------ End of Turn " + Turn + " ------------");
          Turn++;
          Replace1();
          } else if (Draw > Discard && Draw > AiMin) {
            console.log("Ai Has Taken Drawn Card***");
            switch (AiMin) {
              case AiCards[0]: AiCards[0] = Draw
              break;
              case AiCards[1]: AiCards[1] = Draw
              break;
              case AiCards[2]: AiCards[2] = Draw
              break;
              case AiCards[3]: AiCards[3] = Draw
              break;
              case AiCards[4]: AiCards[4] = Draw
              break;
              case AiCards[5]: AiCards[5] = Draw
              break;
              case AiCards[6]: AiCards[6] = Draw
              break;
              case AiCards[7]: AiCards[7] = Draw
              break;
              case AiCards[8]: AiCards[8] = Draw
              break;
            };
            sum = AiCards.reduce(addd);
            GameEnd();
          console.log("------------ End of Turn " + Turn + " ------------");
        Turn++;
        Replace1();
          } else {console.log("Ai has Not replaced a card, " + Cards[Draw] + " discarded***");
        console.log("------------ End of Turn " + Turn + " ------------");
        Turn++;
        Replace1();
      }
        }
// Debugging Commands