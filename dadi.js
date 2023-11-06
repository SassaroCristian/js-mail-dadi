// Aggiungi un event listener al clic del pulsante con ID "gioca" nella pagina HTML.
document.getElementById("gioca").addEventListener("click", function() {
  // Genera un numero casuale compreso tra 1 e 6 per il giocatore.
  const giocatore = Math.floor(Math.random() * 6) + 1;
  
  // Genera un numero casuale compreso tra 1 e 6 per il computer.
  const computer = Math.floor(Math.random() * 6) + 1;
  
  // Inizializza una stringa vuota per memorizzare il risultato del gioco.
  let risultato = "";
  
  // Confronta i punteggi del giocatore e del computer per determinare il vincitore.
  if (giocatore > computer) {
      risultato = "Il giocatore vince!";
  } else if (computer > giocatore) {
      risultato = "Il computer vince!";
  } else {
      risultato = "È un pareggio!";
  }
  
  // Seleziona l'elemento HTML con ID "risultato" per visualizzare il risultato del gioco.
  const risultatoElement = document.getElementById("risultato");
  
  // Aggiorna il contenuto dell'elemento con il risultato del gioco.
  risultatoElement.textContent = "Punteggio del giocatore: " + giocatore + " ^ ^ ^ ^ " + "Punteggio del computer: " + computer + " ^ ^ ^ ^ " + risultato;
});
