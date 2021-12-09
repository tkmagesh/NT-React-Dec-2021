function bugsReducer(currentState=[], action){
    switch (action.type){
        case 'BUGS_ADD':
            return [...currentState, action.payload];
        case 'BUGS_REMOVE':
            const bugsToRemove = action.payload;
            return currentState.filter(bug => !bugsToRemove.find(b => b.id === bug.id))
        case 'BUGS_REPLACE':
            return currentState.map(bug => bug.id === action.payload.id ? action.payload : bug)
        default: 
            return currentState;
    }
    
}
export default bugsReducer;