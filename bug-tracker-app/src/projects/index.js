const Projects = ({projects}) => {
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