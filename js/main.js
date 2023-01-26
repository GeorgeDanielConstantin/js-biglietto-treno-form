const buttonCalcoloEl = document.getElementById("calcolo_biglietto");
const inputEtàEl = document.getElementById("Età");
const inputKmEl = document.getElementById("Km");
const nomeCognome = document.getElementById("NomeCognome")
const carrozza = Math.floor(Math.random() * 9) + 1;
const codiceCp = Math.floor(Math.random() * 89999) + 10000;


buttonCalcoloEl.addEventListener("click", function () {
    
    //ETA UTENTE

    const età = inputEtàEl.value;
    const km = inputKmEl.value;

    // CALCOLO PREZZO

    const prezzoEuroKm = 0.21;
    let price = km * prezzoEuroKm;

    document.getElementById('carrozza').innerHTML = carrozza;
    document.getElementById('codice_cp').innerHTML = codiceCp;
    document.getElementById('nome_cognome').innerHTML = nomeCognome.value;


    // MINORENNE
    if (!isNaN(età) && !isNaN(km)) {
        if (età < 18) {
            const scontoMinorennePerc = 20;
            const scontoMinorenneEuro = price * 0.2;
            const pricef = price - scontoMinorenneEuro;

            document.getElementById('tipo_biglietto').innerHTML = `Biglietto under 18`;
            document.getElementById('output_prezzo').innerHTML = `${pricef.toFixed(2)}`;
        }
        // ANZIANO

        if (età >= 65) {
            const scontoAnzianoPerc = 40;
            const scontoAnzianoEuro = price * 0.4;
            const pricef = price - scontoAnzianoEuro;

            document.getElementById('tipo_biglietto').innerHTML = `Biglietto over 65`;
            document.getElementById('output_prezzo').innerHTML = `${pricef.toFixed(2)}`;
        }

        if (età >= 18 && età < 65) {
            const pricef = price

            document.getElementById('tipo_biglietto').innerHTML = `Biglietto ordinario`;
            document.getElementById('output_prezzo').innerHTML = `${pricef.toFixed(2)}`;
        }
    } else {
        alert('Valori invalidi');
    }
})