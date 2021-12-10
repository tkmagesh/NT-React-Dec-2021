import { createStore, combineReducers } from 'redux';
import bugsReducer from "../bugs/reducers/bugsReducer";
import projectsReducer from "../projects/reducers/projectsReducer";


//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    projectsState : projectsReducer,
    bugsState : bugsReducer
});

const store = createStore(rootReducer);

console.log(store.getState());
export default store;