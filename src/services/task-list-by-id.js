import { loadTask } from "../modules/taskList/load-task";
import { showTask } from "../modules/taskList/show-task";
import { apiConfig } from "./api-config";

export async function taskListById({ id }) {

	const taskList = await fetch(`${apiConfig.baseUrl}/task/${id}`);
	const taskJson = await taskList.json();
	return taskJson
}
