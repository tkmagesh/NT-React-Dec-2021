/* TO BE FIXED */
let _currentBugId = 0;

export function addNew(newBugName){
    const newBug = {
        id : ++_currentBugId,
        name : newBugName,
        isClosed : false,
        createdAt : new Date()
    };
    const action = { type : 'BUGS_ADD', payload : newBug };
    return action;
}
