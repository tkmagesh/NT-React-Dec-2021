let _currentProjectId = 3
export function addProject(projectName){
    return {
        type: 'ADD_PROJECT',
        payload: {id : ++_currentProjectId, name: projectName}
    }
}

export function selectProject(project){
    return {
        type: 'SELECT_PROJECT',
        payload: project
    }
}