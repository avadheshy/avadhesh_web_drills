const callback4 = require('../callback4');

function getBoardInfo(boardID, boards) {
    let result= boards.filter(({id}) => id === boardID);
    return result;
}

function getLists(boardID, lists) {
    if(lists[boardID] !== undefined) return  lists[boardID];
}

function getCards(listID, cards) {
if( cards[listID] !== undefined) return cards[listID];
}

callback4('mcu453ed', 'qwsa221', getBoardInfo, getLists, getCards);
