// Array contenente le email esistenti
const existingEmails = ["luca01@gmail.com", "marco01@gmail.com", "tony01@gmail.com", "pinco01@gmail"];

// Richiedi all'utente di inserire la propria email
let emailValue = prompt("Inserisci la tua Email");

// Inizializza una variabile per verificare se l'email è presente nell'array
let emailPresente = false;

// Scansiona l'array di email esistenti
for (let i = 0; i < existingEmails.length; i++) {
    if (existingEmails[i] === emailValue) {
        emailPresente = true; // Se l'email è presente, imposta la variabile su true
        console.log(emailPresente);
    }
}

// Verifica se l'email è stata trovata
if (emailPresente) {
    console.log("Presente");
} else {
    console.log("Non trovata");
    let aggiungi = confirm("Utente non autorizzato. Vuoi registrare la nuova Email?");
    
    // Se l'utente sceglie di registrare la nuova email
    if (aggiungi) {
        existingEmails.push(emailValue); // Aggiungi l'email all'array esistente
        console.log("Utente ora autorizzato");
    } else {
        console.log("Utente non autorizzato");
    }
}

// Il codice commentato sotto usa il metodo includes per ottenere lo stesso risultato in modo più compatto.
// Rimuovi il commento e commenta il blocco di codice precedente se desideri utilizzare il metodo includes.

// const existingEmails = ["luca01@gmail.com", "marco01@gmail.com", "tony01@gmail.com", "pinco01@gmail"];
// let emailValue = prompt("Inserisci la tua Email");

// if (existingEmails.includes(emailValue)) {
//     console.log("Presente");
// } else {
//     console.log("Non trovata");
//     let aggiungi = confirm("Utente non autorizzato. Vuoi registrare la nuova Email?");
//     if (aggiungi) {
//         existingEmails.push(emailValue);
//         console.log("Utente ora autorizzato");
//     } else {
//         console.log("Utente non autorizzato");
//     }
// }
