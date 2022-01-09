const names = [ "Guadalupe", "Ollie", "Aki" ];
let surprise = "surprise";

function writeCards(names, surprise) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`)
    }

    return cards;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}

writeCards(names, surprise);
//countDown(10);