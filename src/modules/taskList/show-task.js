import { taskCompleted } from "../../services/task-completed";
import { deleteTask } from "../../services/task-delete";
import { taskItemHtml, conditionTask, nameTask, categoryTask, dateTask, hourTask } from "../../utils/selectedInputs";
import { counterCompletedTask, counterPendentTask, counterTask } from "./counter-task";
import { editTask } from "./edit-task";


export async function showTask({listTask}) {

	const totalTask = counterTask(listTask)
	const pendentTask = counterPendentTask(listTask)
	const completedTask = counterCompletedTask(listTask)


	const total = document.createElement("p")
	const spanTotal = document.createElement("span")

	total.innerText = "Total: "
	spanTotal.innerText = totalTask
	total.append(spanTotal)

	const pendent = document.createElement("p")
	const spanPendent = document.createElement("span")
	pendent.innerText = "Pendentes: "
	spanPendent.innerText = pendentTask
	pendent.append(spanPendent)

	const pCompleted = document.createElement("p")
	const spanCompleted = document.createElement("span")
	pCompleted.innerText = "Completo: "
	spanCompleted.innerText = completedTask
	pCompleted.append(spanCompleted)


	conditionTask.innerHTML = ""
	conditionTask.append(total, pendent, pCompleted)

	const nowDate = new Date().toISOString().split("T")[0]

	taskItemHtml.innerHTML = ""

	listTask.forEach((task) => {
		
	const sectionTaskItem = document.createElement("div");
	sectionTaskItem.classList.add("card");
	sectionTaskItem.id = task.id

	const inputCheckbox = document.createElement("input");
	inputCheckbox.type = "checkbox";
	inputCheckbox.name = task.id;
	inputCheckbox.id = task.id;
	inputCheckbox.addEventListener("change", () => taskCompleted(task.id))

	if(task.date !== nowDate){
		inputCheckbox.disabled = true
	}else{
		inputCheckbox.disabled = false
	}

	inputCheckbox.checked = task.completed 
	if(task.completed){
		sectionTaskItem.classList.add("completed")
	}
	sectionTaskItem.appendChild(inputCheckbox);

	const divBodyCard = document.createElement("div");
	divBodyCard.className = "cardBody";

	const strongNameTask = document.createElement("strong");
	strongNameTask.innerText = task.name;
	divBodyCard.appendChild(strongNameTask);

	const divDateHour = document.createElement("div");
	const spanIconDateHour = document.createElement("span");
	spanIconDateHour.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
										<!-- Icon from Pepicons by CyCraft - https://github.com/CyCraft/pepicons/blob/dev/LICENSE -->
										<g fill="none">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-width="2"
												d="M2.979 2.636v-.003h.003a36.006 36.006 0 0 1 1.815-.115c1.46-.058 3.193-.05 4.48.142a.386.386 0 0 1 .21.117l7.754 7.753a.5.5 0 0 1 0 .708l-5.657 5.656a.5.5 0 0 1-.707 0L3.123 9.141a.386.386 0 0 1-.117-.21c-.192-1.287-.2-3.02-.142-4.48c.028-.722.073-1.359.115-1.815Z"
											/>
											<circle cx="7.435" cy="7.173" r="1" fill="currentColor" transform="rotate(-45 7.435 7.173)" />
										</g>
									</svg>
    `;
	divDateHour.className = "dateHour";

	const spanCategory = document.createElement("span");
	spanCategory.innerText = task.category;

	const pDate = document.createElement("p");
	const [ano, mes, dia] = String(task.date).split("-");
	const dateFormat = `${dia}/${mes}/${ano}`;
	pDate.innerText = dateFormat;

	const spanAs = document.createElement("span");
	spanAs.innerText = "ás";

	const hourSpan = document.createElement("span");
	hourSpan.innerText = task.hour;

	divDateHour.append(spanIconDateHour, spanCategory, pDate, spanAs, hourSpan);
	divBodyCard.appendChild(divDateHour);

	const buttonEdit = document.createElement("button");
	buttonEdit.className = "btnEdit";
	buttonEdit.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
								<!-- Icon from Pepicons by CyCraft - https://github.com/CyCraft/pepicons/blob/dev/LICENSE -->
								<g fill="currentColor">
									<path
										fill-rule="evenodd"
										d="M13.198 1.22L3.12 11.298a1 1 0 0 0-.282.555l-.705 4.594a1 1 0 0 0 1.14 1.14l4.595-.705a1 1 0 0 0 .555-.281L18.501 6.523a1 1 0 0 0 0-1.414l-3.89-3.89a1 1 0 0 0-1.413 0ZM4.317 15.404l.448-2.924l9.14-9.14l2.475 2.476l-9.14 9.14l-2.923.448Z"
										clip-rule="evenodd"
									/>
									<path d="m11.442 5.247l1.06-1.061l3.242 3.24l-1.061 1.061l-3.241-3.24Z" />
								</g>
							</svg>
    `;
	if(task.completed) {
		buttonEdit.style.opacity = 0
	}else{
		buttonEdit.addEventListener("click", () => editTask(task))
	}

	const buttonRemove = document.createElement("button");
	buttonRemove.className = "btnRemove";
	buttonRemove.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
								<!-- Icon from Pepicons by CyCraft - https://github.com/CyCraft/pepicons/blob/dev/LICENSE -->
								<g fill="currentColor">
									<path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z" />
									<path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z" />
									<path
										fill-rule="evenodd"
										d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z"
										clip-rule="evenodd"
									/>
								</g>
							</svg>
    `;
	buttonRemove.addEventListener("click", () => deleteTask(task.id))

	sectionTaskItem.append(divBodyCard, buttonEdit, buttonRemove);

	taskItemHtml.append(sectionTaskItem);
});
}


