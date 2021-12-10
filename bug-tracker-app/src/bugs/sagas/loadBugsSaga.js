import bugApi from '../services/bugApi';
import { takeEvery, put, call } from 'redux-saga/effects';

function *loadBugsSaga(){
    yield takeEvery('BUGS_LOAD', loadBugs)
}

function *loadBugs(){

    //perform the async operation using 'call'
    const bugs = yield call(bugApi.getAll)

    //dispatch an action using 'put'
    yield put({ type : 'BUGS_INIT', payload : bugs })
}

export default loadBugsSaga;