import { dateNowSelect, dateTask, hourTask } from "../utils/selectedInputs"
import { loadTask } from "./taskList/load-task"


document.addEventListener("DOMContentLoaded", async () => {
    const dateToday = new Date().toISOString().split("T")[0];
    const hourNow = new Date()
    const hour = hourNow.getHours()
    const min = hourNow.getMinutes()

    
    hourTask.value = `${hour}:${min}`
    console.log(`${hour}:${min}`)
    
    dateTask.min = dateToday
    dateTask.value = dateToday
    
    dateNowSelect.value = dateToday
    dateNowSelect.min = dateToday

    loadTask({
        date: dateNowSelect.value
    })
})