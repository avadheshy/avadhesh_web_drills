function callback3(listID, getCards){
    setTimeout(() => {
        const CARDS = require('./data/cards.json');
        console.log(getCards(listID, CARDS));
    }, 2 * 1000);
}
module.exports=callback3
