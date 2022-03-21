import {API_URL_FACTURAS_R} from "./settings";

export function getProjectsById(id) {

    return fetch(`${API_URL_FACTURAS_R}/${id}`)
        .then(r => r.json())

}