import { deleteTask } from "../../services/task-delete";
import { taskEdit } from "../../services/task-edit";
import { editBtnRemove, editBtnSave, editCategoryTaskSelect, editDateTaskSelect, editHourTaskSelect, editNameTaskSelect, editTaskSelect, taskIdSelect } from "../../utils/selectedInputs";

export function editTask(task) {
    taskIdSelect.value = task.id
	editTaskSelect.style.opacity = 1;
	editTaskSelect.style.zIndex = 999;

	editNameTaskSelect.value = task.name;
	editCategoryTaskSelect.value = task.category;
	editDateTaskSelect.value = task.date;
	editHourTaskSelect.value = task.hour;

	editBtnSave.addEventListener("click", () => {
		taskEdit({
			id: taskIdSelect.value,
			name: editNameTaskSelect.value,
			category: editCategoryTaskSelect.value,
			date: editDateTaskSelect.value,
			hour: editHourTaskSelect.value,
		});


        editTaskSelect.style.opacity = 0;
	    editTaskSelect.style.zIndex = -999;
	});

    editBtnRemove.addEventListener("click", () => {
        deleteTask(task.id)
        editTaskSelect.style.opacity = 0;
	    editTaskSelect.style.zIndex = -999;
    })
}
