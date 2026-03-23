import { taskListByDate } from "../../services/task-list-by-date";
import { showTask } from "./show-task";
import { dateNowSelect } from "../../utils/selectedInputs";
import { getTask } from "../../services/api-config";


const data = dateNowSelect

export async function loadTask({ date = data.value } = {}) {
    const tasks = getTask().filter(task => task); // remove null

    const searchByDate = tasks
        .filter((d) => d.date === date)
        .sort((a, b) => a.hour.localeCompare(b.hour));

    showTask({
        listTask: searchByDate
    });
}
