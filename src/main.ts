const sachovnica = document.getElementById("sachovnica");
if (sachovnica === null) {
   throw new Error("Kontajner sachovnice neexistuje.");
}
for (let riadok = 0; riadok < 8; riadok++) {
   for (let stlpec = 0; stlpec < 8; stlpec++) {
       const policko = document.createElement("div");
       policko.classList.add("policko");
       if ((riadok + stlpec) % 2 === 0) {
           policko.classList.add("svetle");
       } else {
           policko.classList.add("tmave");
       }
       sachovnica.append(policko);
   }
}