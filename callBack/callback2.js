function callback2(boardID, getLists){
    setTimeout(() => {
        const LISTS = require('./data/lists.json');
        console.log(getLists(boardID, LISTS));
    }, 2 * 1000);
}
module.exports=callback2

