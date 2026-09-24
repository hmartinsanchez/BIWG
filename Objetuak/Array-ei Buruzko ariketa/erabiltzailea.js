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
}
