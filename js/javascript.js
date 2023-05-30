document.querySelectorAll('article').forEach(addIndex);
document.querySelectorAll('figure').forEach(addIndex);

function addIndex(item, index) {
   item.style.setProperty('--i', index + 1);
}

/*
Denne kode vælger alle <article> og <figure> elementer i dokumentet og anvender en funktion kaldet addIndex på hvert af dem.

Funktionen addIndex tager to parametre: item repræsenterer hvert enkelt valgt element, og index repræsenterer indekset eller positionen for elementet i udvælgelsen.

Inde i addIndex funktionen sætter linjen item.style.setProperty('--i', index + 1) en brugerdefineret CSS-variabel kaldet --i til værdien af index + 1. Dette kan bruges til at tilpasse stylingen eller layoutet af elementerne baseret på deres position i udvælgelsen.
*/