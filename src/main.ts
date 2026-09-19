const sachovnica = document.getElementById("sachovnica");
if (sachovnica === null) {
    throw new Error("Kontajner sachovnice neexistuje.");
}
const lhRoh = document.createElement("div");
lhRoh.classList.add("roh");
lhRoh.classList.add("horna");
lhRoh.classList.add("lavy");
sachovnica.append(lhRoh);

for (let stlpec = 0; stlpec < 8; stlpec++) {
    const hPopiska = document.createElement("div");
    hPopiska.classList.add("popiska");
    hPopiska.classList.add("horna");
    hPopiska.textContent = String.fromCharCode(65 + stlpec);
    sachovnica.append(hPopiska);
}

const phRoh = document.createElement("div");
phRoh.classList.add("roh");
phRoh.classList.add("horna");
phRoh.classList.add("prava");
sachovnica.append(phRoh);

for (let riadok = 0; riadok < 8; riadok++) {
    const lPopiska = document.createElement("div");
    lPopiska.classList.add("popiska");
    lPopiska.classList.add("lava");
    lPopiska.textContent = `${8 - riadok}`;
    sachovnica.append(lPopiska);

    for (let stlpec = 0; stlpec < 8; stlpec++) {
        const policko = document.createElement("div"); // Vytvorenie elementu div pre policko
        policko.classList.add("policko"); // Pridanie triedy "policko" pre styling
        if ((riadok + stlpec) % 2 === 0) {
            policko.classList.add("svetle"); // Pridanie triedy "svetle" pre svetlé policko
        } else {
            policko.classList.add("tmave");
        }
        //policko.textContent = String.fromCharCode(97 + stlpec) + `${8 - riadok}`;
        sachovnica.append(policko); // Pridanie policka do kontajnera sachovnice
    }

    const pPopiska = document.createElement("div");
    pPopiska.classList.add("popiska");
    pPopiska.classList.add("prava");
    sachovnica.append(pPopiska);
    pPopiska.textContent = `${8 - riadok}`;
}

const ldRoh = document.createElement("div");
ldRoh.classList.add("roh");
ldRoh.classList.add("dolna");
ldRoh.classList.add("lavy");
sachovnica.append(ldRoh); // Pridanie ľavého dolného rohu

for (let stlpec = 0; stlpec < 8; stlpec++) {
    const dPopiska = document.createElement("div");
    dPopiska.classList.add("popiska");
    dPopiska.classList.add("dolna");
    dPopiska.textContent = String.fromCharCode(97 + stlpec);
    sachovnica.append(dPopiska);
}

const pdRoh = document.createElement("div");
pdRoh.classList.add("roh");
pdRoh.classList.add("dolna");
pdRoh.classList.add("prava");
sachovnica.append(pdRoh);