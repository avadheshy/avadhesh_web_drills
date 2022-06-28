const callback6 = require('../callback6');
const LISTS = require('../data/lists.json')

function getBoardInfo(boardID, boards) {
    return boards.filter(({id}) => id === boardID);
}

function getLists(boardID, lists) {
    return lists[boardID] === undefined ? [] : lists[boardID];
}

function getCards(listID, cards) {
    return cards[listID] === undefined ? [] : cards[listID];
}

const LIST_IDS = Object.values(LISTS).reduce((ids, currentList) => {
    ids.push(...currentList.map(({id}) => id))
    return ids
}, []);

callback6('mcu453ed', LIST_IDS, getBoardInfo, getLists, getCards);

