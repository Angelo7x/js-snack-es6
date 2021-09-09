const squadre = [
    {
        nome : "Milan",
        punti : 0,
        falliSubiti : 0
    },

    {
        nome : "Inter",
        punti : 0,
        falliSubiti : 0
    },

    {
        nome : "Roma",
        punti : 0,
        falliSubiti : 0
    },

    {
        nome : "Lazio",
        punti : 0,
        falliSubiti : 0
    },

    {
        nome : "Juve",
        punti : 0,
        falliSubiti : 0
    },
];

var nuoviPunti = squadre.punti;
var nuoviFalliSubiti = squadre.falliSubiti;

for (let i = 0; i < squadre.length; i++) {
    var nuoviPunti = nuoviPunti += (Math.floor(Math.random() * 100) + 1);
    var nuoviFalliSubiti = nuoviFalliSubiti += (Math.floor(Math.random() * 40) + 1);
    
}

console.log(squadre);


