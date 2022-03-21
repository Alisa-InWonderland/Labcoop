import {API_URL} from "./settings";

export function getProjects() {

    return fetch(API_URL)
        .then(r => r.json())

}