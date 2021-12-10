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
   
    const { bugs, projects, selectedProject } = useSelector(({bugsState : bugs, projectsState : projects}) => ({bugs, projects : projects.list, selectedProject : projects.selectedProject}));

    console.log(selectedProject);

    const dispatch = useDispatch();
    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, dispatch);
    
    const bugsWithProjects = (selectedProject ? bugs.filter(bug => bug.projectId === selectedProject.id) : bugs )
        .map(bug => ({...bug, projectName: projects.find(project => project.id === bug.projectId).name}));
    
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