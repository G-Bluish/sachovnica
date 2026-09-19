const sachovnica = document.getElementById("sachovnica");
if (sachovnica === null) {
    throw new Error("Kontajner sachovnice neexistuje.");
}

function vytvorTextDiv(textContent: string, ...className: string[]): HTMLDivElement {// Funkcia na vytvorenie elementu div s danou triedou a textovým obsahom
    const div = document.createElement("div");// Vytvorenie elementu div
    div.classList.add(...className);// Pridanie triedy k elementu div
    div.textContent = textContent;// Nastavenie textového obsahu elementu div
    return div; // Vytvorenie elementu div s danou triedou a textovým obsahom
}


const lhRoh = vytvorTextDiv("", "roh", "horna", "lavy");
sachovnica.append(lhRoh);

for (let stlpec = 0; stlpec < 8; stlpec++) {
    const hPopiska = vytvorTextDiv(String.fromCharCode(65 + stlpec), "popiska", "horna");
    sachovnica.append(hPopiska);
}

const phRoh = vytvorTextDiv("", "roh", "horna", "prava");
sachovnica.append(phRoh);

const vutro = vytvorTextDiv("", "vnutro");
sachovnica.append(vutro);

for (let riadok = 0; riadok < 8; riadok++) {
    const lPopiska = vytvorTextDiv(`${8 - riadok}`, "popiska", "lava");
    sachovnica.append(lPopiska);

    for (let stlpec = 0; stlpec < 8; stlpec++) {
        const policko = vytvorTextDiv("", "policko"); // Vytvorenie elementu div pre policko
        if ((riadok + stlpec) % 2 === 0) {
            policko.classList.add("svetle"); // Pridanie triedy "svetle" pre svetlé policko
        } else {
            policko.classList.add("tmave");
        }
        //policko.textContent = String.fromCharCode(97 + stlpec) + `${8 - riadok}`;
        vutro.append(policko); // Pridanie policka do kontajnera sachovnice
    }

    const pPopiska = vytvorTextDiv(`${8 - riadok}`, "popiska", "prava");
    sachovnica.append(pPopiska);
}

const ldRoh = vytvorTextDiv("", "roh", "dolna", "lavy");
sachovnica.append(ldRoh); // Pridanie ľavého dolného rohu

for (let stlpec = 0; stlpec < 8; stlpec++) {
    const dPopiska = vytvorTextDiv(String.fromCharCode(97 + stlpec), "popiska", "dolna");
    sachovnica.append(dPopiska);
}

const pdRoh = vytvorTextDiv("", "roh", "dolna", "prava");
sachovnica.append(pdRoh);