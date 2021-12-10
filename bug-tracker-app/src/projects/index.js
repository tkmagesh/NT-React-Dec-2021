import * as projectActionCreators from './actions';
import { useDispatch, useSelector } from 'react-redux';
const Projects = () => {
    const projects = useSelector(storeState => storeState.projectsState);

    return (
        <div className="projects">
        <h3>Projects</h3>
        <ol>
            {projects.map(project => (
            <li key={project.id}>
                <div>{project.name}</div>
            </li>
            ))}
        </ol>
        </div>
    );
}

export default Projects;