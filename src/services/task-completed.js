import { loadTask } from "../modules/taskList/load-task";
import { apiConfig } from "./api-config";
import { taskListById } from "./task-list-by-id";

export async function taskCompleted(id) {
	try {
        
		const response = await taskListById({
            id: id
        });

		if (response) {
            const completed = !response.completed
			await fetch(`${apiConfig.baseUrl}/task/${id}`, {
				method: "PATCH",
				headers: {
					"Content-Type": "application",
				},
				body: JSON.stringify({ completed }),
			});
		}

		loadTask({
            date: response.date
        })
	} catch (error) {
		alert("Não foi possivel Completar essa tarefa");
		console.log(error);
	}
}
