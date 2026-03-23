import { showTask } from "../modules/taskList/show-task";
import { apiConfig } from "./api-config";

export async function taskListByDate({ date }) {

    const taskList = await fetch(`${apiConfig.baseUrl}/task`);
    const taskJson = await taskList.json();

    const taskByDate = taskJson.filter((task) => task.date === date)
    return taskByDate
}
