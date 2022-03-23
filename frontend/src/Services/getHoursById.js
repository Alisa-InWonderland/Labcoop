import {API_URL, API_URL_HOURS} from "./settings";

export function getHoursById(id) {

    return fetch(`${API_URL_HOURS}/${id}`)
        .then(r => r.json())

}