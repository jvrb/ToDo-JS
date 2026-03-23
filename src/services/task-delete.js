import { loadTask } from "../modules/taskList/load-task";
import { getTask, setTasks } from "./api-config";

export async function deleteTask(id) {
	try {

		const data = getTask()
		const nowDate = data.filter((d) => d.id === id)
		const updateTask = data.filter((d) => d.id !== id)
		setTasks(updateTask)
		loadTask({date: nowDate.date})

	} catch (error) {
		alert("Não foi possivel deletar essa tarefa");
		console.log(error);
	}
}
