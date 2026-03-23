import { dateNowSelect } from "../../utils/selectedInputs";
import { loadTask } from "./load-task";

dateNowSelect.addEventListener("change", (e) => {
	loadTask({
		date: e.target.value,
	});
});
