import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { bindActionCreators } from 'redux';
import * as bugActionCreators from './bugs/actions';
import store from './store';
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);

function renderApp(){
    const bugs = store.getState();
    ReactDOM.render(
        <Bugs bugs={bugs} {...bugActionDispatchers} />, 
        document.getElementById('root'))
}
renderApp()
store.subscribe(renderApp);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



//ES6 Modules
/* 
import * as calculator from './calc';
console.log(calculator); 
*/

/* 
import * as calculator from './calc';
console.log(calculator.add(100,200)); 
*/

/* 
import * as calculator from './calc';
const add = calculator.add
console.log(add(100,200)); 
*/

/* 
import * as calculator from './calc';
const { add } = calculator;
console.log(add(100,200));  
*/

/* 
import { add } from './calc';
console.log(add(100,200));  
*/

/* 
import { add as addFn} from './calc';
console.log(addFn(100,200)); 
*/ 

//importing the default exported entity
/* 
import myObj from './calc';
console.log(myObj); 
*/

/* 
import myUtils, * as calc from './calc';
console.log(myUtils, calc); 
*/

/* 
import myUtils, {add, subtract} from './calc';
console.log(myUtils, add, subtract);  
*/

/* 
import * as calc from './calc';
console.log(calc.default); 
*/