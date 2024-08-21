const prompt = require("prompt-sync")({ sigint: true });

// Funkcija za generisanje nasumičnog broja u opsegu
function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function svemirskiOkrsaj() {
    // Početno stanje
    let energijaStita = 100;
    let rakete = 3;
    let unisteniNeprijatelji = 0;

    // Glavna igra
    for (let sektor = 1; sektor <= 5; sektor++) {
        console.log(`Sektor: ${sektor}/5`);
        console.log(`Energija štita: ${energijaStita}`);
        console.log(`Rakete: ${rakete}`);
        
        // Generisanje događaja
        let dogadjaj = Math.random();
        
        if (dogadjaj <= 0.8) {
            console.log("Neprijateljski brod se pojavio!");
            let hpNeprijatelja = 50;
            
            while (hpNeprijatelja > 0 && energijaStita > 0) {
                console.log(`HP neprijatelja: ${hpNeprijatelja}`);
                console.log("Izaberi akciju: (a) Laserski napad, (b) Ispaliti raketu, (c) Pokušaj bekstva");
                
                // Simulacija unosa igrača
                let akcija = prompt("(a/b/c): ");
                
                if (akcija === 'a') {
                    // Laserski napad
                    if (Math.random() <= 0.8) {
                        let steta = randomInRange(10, 20);
                        hpNeprijatelja -= steta;
                        console.log(`Pogodak! Naneto ${steta} štete neprijatelju.`);
                    } else {
                        console.log("Promašaj!");
                    }
                } else if (akcija === 'b') {
                    // Ispaliti raketu
                    if (rakete > 0) {
                        rakete--;
                        if (Math.random() <= 0.9) {
                            let steta = randomInRange(30, 40);
                            hpNeprijatelja -= steta;
                            console.log(`Pogodak! Naneto ${steta} štete neprijatelju.`);
                        } else {
                            console.log("Promašaj!");
                        }
                    } else {
                        console.log("Nemate više raketa!");
                    }
                } else if (akcija === 'c') {
                    // Pokušaj bekstva
                    if (Math.random() <= 0.5) {
                        console.log("Uspešno ste pobegli!");
                        break;
                    } else {
                        console.log("Bekstvo nije uspelo!");
                    }
                } else {
                    console.log("Nevažeća akcija, pokušajte ponovo. (" + akcija + ")");
                    continue;
                }
                
                // Ako neprijatelj nije uništen i igrač nije pobegao, neprijatelj uzvraća
                if (hpNeprijatelja > 0) {
                    if (Math.random() <= 0.7) {
                        let steta = randomInRange(10, 15);
                        energijaStita -= steta;
                        console.log(`Neprijatelj je uzvratio i naneo vam ${steta} štete.`);
                    } else {
                        console.log("Neprijatelj je promašio!");
                    }
                } else {
                    console.log("Neprijateljski brod je uništen!");
                    unisteniNeprijatelji++;
                    break;
                }
                
                // Provera da li je energija štita pala na 0 ili manje
                if (energijaStita <= 0) {
                    console.log("Vaš svemirski brod je uništen. Igra je završena.");
                    break;
                }
            }
        } else {
            console.log("Miran prolazak kroz sektor.");
        }
        
        if (energijaStita <= 0) {
            break;
        }
    }

    // Kraj igre
    if (energijaStita > 0) {
        console.log("Čestitamo! Preživeli ste putovanje kroz svemir.");
        console.log(`Uništili ste ${unisteniNeprijatelji} neprijateljskih brodova.`);
    } else {
        console.log("Nažalost, niste preživeli putovanje.");
    }
}

svemirskiOkrsaj();