/* Bugs Component */
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import './index.css';
import * as bugActionCreators from './actions';

const Bugs = () => {
    /* 
    const storeState = useSelector(function(storeState){
        return storeState;
    }),
        bugs = storeState.bugsState; 
    */

    const bugs = useSelector(storeState => storeState.bugsState);
    const dispatch = useDispatch();
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    return(
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugs} />
            <BugSort/>
            <BugEdit addNew={addNew} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;