// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// Lista cognomi presenti
var cognomi = [
    "trifone",
    "spoto",
    "manara",
    "cammarata",
    "gallina",
    "merola"];

    cognomi.sort();

// Inserimento nuovo cognome
cognomi.push(prompt("Inserisci il nuovo cognome da aggiungere alla lista"));
cognomi.sort();

// Conteggio numerazione
var numerazione = 0;
for (i= 0; i < cognomi.length; i++){
    numerazione ++;
    console.log(numerazione + " " + cognomi [i]);
}

