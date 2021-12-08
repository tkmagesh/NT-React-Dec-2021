const StateManager = (() => {
    let _currentState = undefined,
        _callbacks = [],
        _reducer = undefined,
        _init_action = {type: '@@INIT'};

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function'){
            _callbacks.push(callback);
        }
    }

    //private utility function
    function _notifyChanges(){
        _callbacks.forEach(callbackFn => callbackFn());
    }

    function dispatch(action){
        const newState = _reducer(_currentState, action);
        if (newState === _currentState ) return ; /* no state changes */
        _currentState = newState;
        _notifyChanges();
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('Reducer must be a function');
        _reducer = reducer;
        _currentState = reducer(undefined, _init_action); /* to initialize the currentState with a valid default state */
        const store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();