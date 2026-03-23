import { taskListByDate } from "../../services/task-list-by-date";
import { showTask } from "./show-task";
import { dateNowSelect } from "../../utils/selectedInputs";


const data = dateNowSelect

export async function loadTask({ date = data.value  } = {}) {
    const response = await taskListByDate({
        date: date
    })
    
    showTask({
        listTask: response.sort((a,b) => a.hour.localeCompare(b.hour))
    })
}
