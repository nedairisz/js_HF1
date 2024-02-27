
export function osszegzes(szam){
    let osszeg = 0;
    for (let i = 1; i <= szam; i++) {
    osszeg += i;
    }
    return osszeg;
}

export const faLista = [
    {
        nev: "Tölgy",
        fajta: "lombhullató",
        magassag: 20, 
        eletkor: 150
    },
    {
        nev: "Fenyő",
        fajta: "tűlevelű",
        magassag: 25,
        eletkor: 200
    },
    {
        nev: "Juhar",
        fajta: "lombhullató",
        magassag: 15,
        eletkor: 100
    },
    {
        nev: "Diófa",
        fajta: "lombhullató",
        magassag: 10,
        eletkor: 80
    }
];

export function legmagasabb(faLista){
    let lgmgsbb = null;
    for (let i = 0; i < faLista.length; i++) {
        if (lgmgsbb === null || faLista[i].magassag > lgmgsbb.magassag) {
            lgmgsbb = faLista[i];
        }
    }
    return lgmgsbb;
} 

export function atlagEletkor(faLista){
    let gyujto = 0;
    for (let i = 0; i < faLista.length; i++) {
        gyujto+= faLista[i].eletkor;
    }
    let atlag=gyujto/faLista.length
    return atlag
}