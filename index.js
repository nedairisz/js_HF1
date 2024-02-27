import {osszegzes} from "./fuggvenyek.js"
import {legmagasabb} from "./fuggvenyek.js"
import { faLista } from "./fuggvenyek.js";
import { atlagEletkor } from "./fuggvenyek.js";

//console.log(osszegzes(6))

const szam = 6;
const osszeg = osszegzes(szam);
console.log(`Az összeg az 1-től ${szam}-ig: ${osszeg}`);


const lgmgsbb = legmagasabb(faLista);
console.log(faLista)
console.log(`A legmagasabb fa: ${lgmgsbb.nev}`)

const atlag = atlagEletkor(faLista)
console.log(`A fák átagéletkora: ${atlag} év`);