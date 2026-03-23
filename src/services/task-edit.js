import { getTask, setTasks } from "./api-config"
import { loadTask } from "../modules/taskList/load-task"

export async function taskEdit({id, name, category, date, hour}){
    const tasks = getTask()

    const newTask = tasks.map(task => {
        if(task.id === id){
            return {id, name, category, date, hour}
        }
        return task
    })

    setTasks(newTask)
    loadTask()
}