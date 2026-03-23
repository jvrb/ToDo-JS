import { loadTask } from "../modules/taskList/load-task";
import { apiConfig } from "./api-config";
import { taskListByDate } from "./task-list-by-date";

export async function deleteTask(id) {
	try {

		const nowDate = await taskListByDate({ id })

		await fetch(`${apiConfig.baseUrl}/task/${id}`, {
			method: "DELETE",
		});
	
		loadTask({date: nowDate.date})
	} catch (error) {
		alert("Não foi possivel deletar essa tarefa");
		console.log("Não foi possivel deletar essa tarefa");
	}
}
