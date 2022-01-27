const names = ["Guadalupe" , "Ollie" , "Aki"]
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for(let i = 0; i < gifts.length; i++) {
    debugger;
  }
  return gifts;
}
function writeCards(names, event) {
  let cards = [] //empty array
  for(let i = 0; i < names.length; i++) {
  cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  console.log(cards)
  return cards;
}
writeCards(names, "surprise")

function countDown(i) {
  while(i>=0)
  console.log(i--)
}
countDown(4);