import { dateNowSelect, dateTask, hourTask } from "../utils/selectedInputs"
import { loadTask } from "./taskList/load-task"


document.addEventListener("DOMContentLoaded", async () => {
    const dateToday = new Date().toISOString().split("T")[0];
    const hourSplit = new Date().toISOString().split("T")[1].split(":")
    const hour = hourSplit[0]
    const min = hourSplit[1]

    hourTask.min = `${hour}:${min}`
    hourTask.value = `${hour}:${min}`
    
    dateTask.min = dateToday
    dateTask.value = dateToday
    
    dateNowSelect.value = dateToday
    dateNowSelect.min = dateToday

    loadTask({
        date: dateNowSelect.value
    })
})