
import { createTask } from "../../services/task-new";
import { form , nameTask, categoryTask, dateTask , hourTask} from "../../utils/selectedInputs";

form.onsubmit = async (event) => {
	event.preventDefault();

    const id = String(new Date().getTime())
	const nameTaskSubmit = nameTask.value.trim();
	const categoryTaskSubmit = categoryTask.value.trim();
    const dateTaskSubmit = dateTask.value
    const hourTaskSubmit = hourTask.value

	createTask({
        id: id, 
        name: nameTaskSubmit, 
        category: categoryTaskSubmit,
        date: dateTaskSubmit, 
        hour: hourTaskSubmit
    });

    nameTask.value = ""
    categoryTask.value = ""

};
