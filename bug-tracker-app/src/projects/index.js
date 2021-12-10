import * as projectActionCreators from './actions';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';

const Projects = () => {
    const {list : projects, selectedProject} = useSelector(storeState => storeState.projectsState);
    console.log(selectedProject);
    const { selectProject } = bindActionCreators(projectActionCreators, useDispatch());
    return (
        <div className="projects">
        <h3>Projects</h3>
        <ol>
            {/* <li className="selected">[Selected Project]</li> */}
            {projects.map(project => (
            <li key={project.id} className={ selectedProject && (project.id ===  selectedProject.id ? 'selected' : '')}>
                <div onClick={() => selectProject(project)}>{project.name}</div>
            </li>
            ))}
        </ol>
        </div>
    );
}

export default Projects;