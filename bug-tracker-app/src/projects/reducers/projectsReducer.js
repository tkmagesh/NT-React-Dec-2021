const initialState = [
    { id : 1, name : 'Expense Tracker'},
    { id : 2, name : 'Bug Tracker'},
    { id : 3, name : 'Payroll Master'}
]
function projectsReducer(currentState = initialState, action){
    return initialState;
}

export default projectsReducer;