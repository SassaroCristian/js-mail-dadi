// gioco dei dadi

document.getElementById("gioca").addEventListener("click", function() {
   
    const giocatore = Math.floor(Math.random() * 6) + 1;
  
    const computer = Math.floor(Math.random() * 6) + 1;
  
    
    let risultato = "";
    if (giocatore > computer) {
      risultato = "Il giocatore vince!";
    } else if (computer > giocatore) {
      risultato = "Il computer vince!";
    } else {
      risultato = "È un pareggio!";
    }

    const risultatoElement = document.getElementById("risultato");
    risultatoElement.textContent = "Punteggio del giocatore: " + giocatore + " ^ ^ ^ ^ " + "Punteggio del computer: " + computer + " ^ ^ ^ ^ " + risultato;
  });
  