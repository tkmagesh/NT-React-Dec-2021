let _currentProjectId = 3
export function addProject(projectName){
    return {
        type: 'ADD_PROJECT',
        payload: {id : ++_currentProjectId, name: projectName}
    }
}