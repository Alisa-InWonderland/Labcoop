import {API_URL_HOURS} from "./settings";

export function getHours() {

    return fetch(API_URL_HOURS)
        .then(r => r.json())

}