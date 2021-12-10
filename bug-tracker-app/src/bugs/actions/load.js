import bugApi from '../services/bugApi';

function getInMemoryBugs(){
    return [
        {
            "id": 2,
            "name": "Bug - 2",
            "isClosed": false,
            "createdAt": "2021-11-11T08:30:10.313Z",
            "projectId" : 1

        },
        {
            "id": 3,
            "name": "Bug - 3",
            "isClosed": false,
            "createdAt": "2021-11-11T08:30:14.754Z",
            "projectId" : 2
        }
    ]
}
export function load(){
    const action = { type : 'BUGS_LOAD' }
    return action;
}
