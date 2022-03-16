import {API_URL_FACTURAS_E} from "./settings";

export function getFacturasE() {

    return fetch(API_URL_FACTURAS_E)
        .then(r => r.json())

}