import { getTask, setTasks } from "./api-config";
import { loadTask } from "../modules/taskList/load-task";

export async function taskCompleted(id) {
	try {
        console.log(id)
		const tasks = getTask();
		const updateTask = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});

		setTasks(updateTask);

		const updated = updateTask.find((task) => task.id === id);

		loadTask({
			date: updated.date,
		});
	} catch (error) {
		alert("Não foi possivel Completar essa tarefa");
		console.log(error);
	}
}
