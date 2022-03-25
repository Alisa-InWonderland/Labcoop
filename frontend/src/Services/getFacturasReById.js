import {API_URL_FACTURAS_R} from "./settings";

export function getFacturasReById(id) {

    return fetch(`${API_URL_FACTURAS_R}/${id}`)
        .then(r => r.json())

}