import { loadTask } from "../modules/taskList/load-task";
import { getTask, setTasks } from "../services/api-config";

export function createTask({ id, name, category, date, hour }) {
	try {
        const tasks = getTask()
    
        tasks.push({ id, name, category, date, hour })

        setTasks(tasks)
        
        loadTask()
	} catch (error) {
		alert("Ñ foi possivel cadastrar uma nova tarefa");
        console.log(error)
	}
}
