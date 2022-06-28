function callback1(boardID, getBoardInfo){
    setTimeout(() => {
        const BOARDS = require('./data/boards.json');
        console.log(getBoardInfo(boardID, BOARDS));
    }, 2 * 1000);
}
module.exports=callback1

