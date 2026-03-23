import { loadTask } from "../modules/taskList/load-task";
import { apiConfig } from "./api-config";

export async function taskEdit({id, name, category, date, hour}){
    console.log(id)
    await fetch(`${apiConfig.baseUrl}/task/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type" : "apllication/json"
        },
        body: JSON.stringify({ name, category, date, hour })
    })

    loadTask()
}