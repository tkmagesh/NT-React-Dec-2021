/* Bugs Component */
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import BugStats from './components/BugStats';
import BugSort from './components/BugSort';
import BugEdit from './components/BugEdit';
import BugList from './components/BugList';
import './index.css';
import * as bugActionCreators from './actions';
import {bugsSelector} from './selectors';

const Bugs = () => {
    const { bugs, projects } = useSelector(bugsSelector);
    const { addNew, toggle, remove, removeClosed, load } = bindActionCreators(bugActionCreators, useDispatch());
    return(
        <>
            <h3>Bugs</h3>
            <button onClick={load}>Load Bugs</button>
            <BugStats bugs={bugs} />
            <BugSort/>
            <BugEdit addNew={addNew} projects={projects} />
            <BugList {...{bugs, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;