import { apiConfig } from "./api-config";

export async function taskList() {
    const taskList = await fetch(`${apiConfig.baseUrl}/task`)
    return await taskList.json()
}