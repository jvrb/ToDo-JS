export function getTask(){
    const data = localStorage.getItem("tasks")
    if(!data) return []
    try{
        return JSON.parse(data)
    }catch{
        return []
    }
}

export function setTasks(tasks){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}