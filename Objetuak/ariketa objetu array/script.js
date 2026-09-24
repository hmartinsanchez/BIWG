// 1. 4 proba-erabiltzaile sortu (batek balio okerrak ditu lehenetsitako balioak frogatzeko)
const erabiltzaileak = [
    new Erabiltzailea("Ane", "Mendizabal", "72839401A", 1995, "Gipuzkoa"),
    new Erabiltzailea("Mikel", "Etxebarria", "12345678B", 2002, "Bizkaia"),
    new Erabiltzailea("Jon", "Iriarte", "87654321C", 1988, "Nafarroa"),
    new Erabiltzailea("", "", null, 3000, "") // Balio okerrak / hutsik (default balioak hartuko ditu)
];

// 2. Kontsolan erakutsi proba bakoitza
console.log("--- ERABILTZAILE GUZTIAK KONTSOLAN ---");
erabiltzaileak.forEach((u, i) => {
    console.log(`\n--- Erabiltzailea ${i + 1} ---`);
    console.log("toString():", u.toString());
    console.log("Login:", u.sortuLogin());
    console.log("Adina:", u.getAdina());
});

// 3. HTML orrian erakutsi
document.addEventListener("DOMContentLoaded", () => {
    const edukiontziOsoa = document.getElementById("erabiltzaile-guztiak");
    const zerrendaLaburpena = document.getElementById("zerrenda-laburpena");

    erabiltzaileak.forEach(u => {
        // Detailatua: HTML orrian erakutsi erabiltzaile bakoitza
        edukiontziOsoa.innerHTML += u.toHTML();

        // Zerrenda berezia: NANa, Logina eta Adina
        const li = document.createElement("li");
        li.textContent = `NAN: ${u.nan} | Login: ${u.sortuLogin()} | Adina: ${u.getAdina()} urte`;
        zerrendaLaburpena.appendChild(li);
    });
});