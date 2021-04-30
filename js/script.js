// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognomi = [
    "trifone",
    "spoto",
    "manara",
    "cammarata",
    "gallina",
    "merola"];

console.log(cognomi);

cognomi.push(prompt("Inserisci il nuovo cognome da aggiungere alla lista"));
console.log(cognomi);