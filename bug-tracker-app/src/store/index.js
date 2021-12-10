import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from "../bugs/reducers/bugsReducer";
import projectsReducer from "../projects/reducers/projectsReducer";

const rootReducer = combineReducers({
    projectsState : projectsReducer,
    bugsState : bugsReducer
});

/* 
function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('%c prev state', 'color: yellow', store.getState());
            console.log('%c action : ', 'color : red', action);
            next(action);
            console.log('%c next state', 'color: green', store.getState()); 
            console.groupEnd();
        }
    }
} 
*/

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('%c prev state', 'color: yellow', store.getState());
    console.log('%c action : ', 'color : red', action);
    next(action);
    console.log('%c next state', 'color: green', store.getState()); 
    console.groupEnd();
};


const dummyMiddleware = store => next => action => {
    console.log('dummyMiddleware');
    next(action);
}
        

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, dummyMiddleware));

export default store;