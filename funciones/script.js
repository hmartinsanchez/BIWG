// Función flecha
const sumar = (a, b) => a + b;
const agurra = () => "Kaixo";

// 1. Mostrar resultado en la consola (F12 > Console)
console.log(sumar(3, 4)); // 7
agurra()

// 2. Mostrar el resultado en el elemento HTML
document.getElementById("resultado").textContent = sumar(3, 4);
document.getElementById("agurra").textContent = agurra();


const sortukontadorea = () =>{
    let kontadorea = 0;

    return () => {
        kontadorea++
        return kontadorea;
    }
    //return () => ++kontadorea
}

const handitu = sortuKontadorea();
console.log(handitu());
console.log(handitu());
console.log(handitu());

const sortuKontua = function (saldoInicial) {
    let saldo = saldoInicial;

    return {
        sartuDirua(kantitate){
        saldo += kantitatea;
        return `Dirua sartu da. Saldoa ${saldo}`;
        //return ("Dirua sartu da. Saldoa"+$saldo);
    },
    ikusiSaldo(){
        return `Zure saldoa ${saldo} da`;
       }
    }
}

const laurarenKontua = sortuKontua(1000);
console.log(laurarenKontua.ikusiSaldo());
console.log(laurarenKontua.sartuDirua(1000));
console.log(laurarenKontua.ikusiSaldo());

console.log(saldo);