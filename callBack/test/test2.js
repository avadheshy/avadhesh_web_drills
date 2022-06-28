const callback2 = require('../callback2');

function getLists(boardID, lists) {
    return lists[boardID] === undefined ? [] : lists[boardID];
}

callback2('mcu453ed', getLists);
