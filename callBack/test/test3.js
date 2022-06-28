const callback3 = require('../callback3');

function getCards(listID, cards) {
    return cards[listID] === undefined ? [] : cards[listID];
}

callback3('qwsa221', getCards);
