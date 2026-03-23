export function counterTask(taskList){
    return taskList.length
}

export function counterPendentTask(taskList){
    return taskList.filter((task) => !task.completed).length
}

export function counterCompletedTask(taskList){
    
    return taskList.filter((task) => task.completed).length
}