const existingEmails = ["luca01@gmail.com", "marco01@gmail.com", "tony01@gmail.com", "pinco01@gmail.com"];

let emailValue = prompt("Inserisci la tua Email");

let emailPresente = false;

for (let i = 0; i < existingEmails.length; i++) {
    if (existingEmails[i] === emailValue) {
        emailPresente = true;
        console.log(emailPresente);
    }
}

if (emailPresente) {
    console.log("Presente");
} else {
    console.log("Non trovata");
    let aggiungi = confirm("Utente non autorizzato. Vuoi registrare la nuova Email?");
    if (aggiungi) {
        existingEmails.push(emailValue);
        console.log("Utente ora autorizzato");
    } else {
        console.log("Utente non autorizzato");
    }
}

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
  