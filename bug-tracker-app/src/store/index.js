import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from "../bugs/reducers/bugsReducer";
import projectsReducer from "../projects/reducers/projectsReducer";
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import loadBugsSaga from '../bugs/sagas/loadBugsSaga';
import { composeWithDevTools } from 'redux-devtools-extension';

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

/* 
const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('%c prev state', 'color: yellow', store.getState());
    console.log('%c action : ', 'color : red', action);
    next(action);
    console.log('%c next state', 'color: green', store.getState()); 
    console.groupEnd();
}; 
*/



const sagaMiddleware = createSagaMiddleware();       

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));

sagaMiddleware.run(loadBugsSaga)

export default store;