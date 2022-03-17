import {API_URL, API_URL_FACTURAS_E} from "./settings";

export function getProjectsById(id) {

    return fetch(`${API_URL_FACTURAS_E}/${id}`)
        .then(r => r.json())

}