const bici = [
    {
        nome : "Mountain bike",
        peso : 7
    },

    {
        nome : "Bici da corsa",
        peso : 5
    },

    {
        nome : "Bici ibrida",
        peso : 8
    },
]

let biciPiuLeggera = bici[0];
for ( var i = 0 ; i < bici.length; i++) {
    if ( bici[i].peso < biciPiuLeggera.peso ) {
        biciPiuLeggera = bici[i]
    }
}

console.log (`La bici più leggera è ${biciPiuLeggera.nome} e pesa ${biciPiuLeggera.peso}`);