const callback5 = require('../callback5');

function getBoardInfo(boardID, boards) {
    return boards.filter(({id}) => id === boardID);
}

function getLists(boardID, lists) {
    return lists[boardID] === undefined ? [] : lists[boardID];
}

function getCards(listID, cards) {
    return cards[listID] === undefined ? [] : cards[listID];
}

callback5('mcu453ed', ['qwsa221', 'jwkh245'], getBoardInfo, getLists, getCards);
