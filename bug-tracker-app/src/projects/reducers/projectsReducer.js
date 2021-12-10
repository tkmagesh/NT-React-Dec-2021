const initialState = {
    list : [
        { id : 1, name : 'Expense Tracker'},
        { id : 2, name : 'Bug Tracker'},
        { id : 3, name : 'Payroll Master'}
    ],
    selectedProject : null
}
function projectsReducer(currentState = initialState, action){
    if (action.type === 'SELECT_PROJECT'){
        return { ...currentState, selectedProject : action.payload}
    }
    return initialState;
}

export default projectsReducer;