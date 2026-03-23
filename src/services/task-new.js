import { loadTask } from "../modules/taskList/load-task";
import { apiConfig } from "../services/api-config";

export async function createTask({ id, name, category, date, hour }) {
	try {
		const completed = false;
		await fetch(`${apiConfig.baseUrl}/task`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ id, name, category, date, hour, completed }),
		});

		loadTask({});
	} catch (error) {
		alert("Ñ foi possivel cadastrar uma nova tarefa");
	}
}
