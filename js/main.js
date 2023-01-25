const buttonCalcoloEl = document.getElementById("calcolo_biglietto");
const inputEtàEl = document.getElementById("Età");
const inputKmEl = document.getElementById("Km");



buttonCalcoloEl.addEventListener("click", function () {
    
    //ETA UTENTE

    const età = inputEtàEl.value;
    const km = inputKmEl.value;

    // CALCOLO PREZZO

    const prezzoEuroKm = 0.21;
    let price = km * prezzoEuroKm;

    // MINORENNE
    if (!isNaN(età) && !isNaN(km)) {
        if (età < 18) {
            const scontoMinorennePerc = 20;
            const scontoMinorenneEuro = price * 0.2;
            const pricef = price - scontoMinorenneEuro;

            console.log(`Prezzo under 18 ${pricef.toFixed(2)}`);
        }
        // ANZIANO

        if (età >= 65) {
            const scontoAnzianoPerc = 40;
            const scontoAnzianoEuro = price * 0.4;
            const pricef = price - scontoAnzianoEuro;

            console.log(`Prezzo over 65 ${pricef.toFixed(2)}`);
        }

        if (età >= 18 && età < 65) {
            const pricef = price
            console.log(`Prezzo ${pricef.toFixed(2)}`);
        }
    } else {
        console.log('Valori invalidi');
    }
}) 