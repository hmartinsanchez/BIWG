class Erabiltzailea {


    constructor(izena, abizena, nan, urtea, probintzia) {
        // Setter-en bidez igarotzen dugu baliozkotzea eta default balioak aplikatzeko
        this._izena = izena;
        this._abizena = abizena;
        this._nan = nan;
        this._urtea = urtea;
        this._probintzia = probintzia;
    }
// Getters y Setters directos (sin validaciones ni modificaciones)

get izena() {
    return this._izena;
}
set izena(balioa) {
    this._izena = balioa;
}

get abizena() {
    return this._abizena;
}
set abizena(balioa) {
    this._abizena = balioa;
}

get nan() {
    return this._nan;
}
set nan(balioa) {
    this._nan = balioa;
}

get urtea() {
    return this._urtea;
}
set urtea(balioa) {
    this._urtea = balioa;
}

get probintzia() {
    return this._probintzia;
}
set probintzia(balioa) {
    this._probintzia = balioa;
}
        // --- METODOAK ---

    sortuLogin() {
        const lehenLetra = this._izena.charAt(0).toLowerCase();
        const abizenaGarbia = this._abizena.toLowerCase().replace(/\s+/g, '');
        const azkenBiDigituak = String(this._urtea).slice(-2);
        return `${lehenLetra}${abizenaGarbia}${azkenBiDigituak}`;
    }

    getAdina() {
        const unekoUrtea = new Date().getFullYear();
        return unekoUrtea - this._urtea;
    }

    toString() {
        return `Izena: ${this._izena}, Abizena: ${this._abizena}, NAN: ${this._nan}, Jaiotze-urtea: ${this._urtea}, Probintzia: ${this._probintzia}`;
    }

    toHTML() {
        return `
            <div class="erabiltzaile-kortxetea">
                <h3>${this._izena} ${this._abizena}</h3>
                <ul>
                    <li><strong>NAN:</strong> ${this._nan}</li>
                    <li><strong>Jaiotze-urtea:</strong> ${this._urtea}</li>
                    <li><strong>Probintzia:</strong> ${this._probintzia}</li>
                </ul>
            </div>
        `;
    }
}
