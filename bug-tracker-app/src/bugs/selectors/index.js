
export const bugsSelector = storeState => {
    let bugs = storeState.bugsState,
        projectsState = storeState.projectsState,
        projects = projectsState.list,
        selectedProject = projectsState.selectedProject;
        if (selectedProject) {
            bugs = bugs.filter(bug => bug.projectId === selectedProject.id);
        }
        return {
            bugs: bugs.map(bug => ({...bug, projectName: projects.find(project =>   project.id === bug.projectId).name})),
            projects
        };
};
