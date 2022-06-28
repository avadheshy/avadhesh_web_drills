function callback4(boardID, listID, getBoardInfo, getLists, getCards){
    const callback1 = require('./callback1');
    const callback2 = require('./callback2');
    const callback3 = require('./callback3');

    setTimeout(() => {callback1(boardID, getBoardInfo)}, 0);
    setTimeout(() => {callback2(boardID, getLists)}, 0);
    setTimeout(() => {callback3(listID, getCards)}, 0);
}
module.exports=callback4
