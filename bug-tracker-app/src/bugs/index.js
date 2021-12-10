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
   
    const { bugs, projects } = useSelector(({bugsState : bugs, projectsState : projects}) => ({bugs, projects}));

    const dispatch = useDispatch();
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    const bugsWithProjects = bugs.map(bug => ({...bug, projectName: projects.find(project => project.id === bug.projectId).name}));
    return(
        <>
            <h3>Bugs</h3>
            <BugStats bugs={bugsWithProjects} />
            <BugSort/>
            <BugEdit addNew={addNew} projects={projects} />
            <BugList {...{bugs : bugsWithProjects, toggle, remove, removeClosed}} />
        </>
    )
};

export default Bugs;