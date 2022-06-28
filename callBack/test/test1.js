const callback1 = require('../callback1');

function getBoardInfo(boardID, boards) {
    return boards.filter(({id}) => id === boardID);
}

callback1('mcu453ed', getBoardInfo);
