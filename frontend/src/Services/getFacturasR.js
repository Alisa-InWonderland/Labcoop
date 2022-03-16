import {API_URL_FACTURAS_R} from "./settings";

export function getFacturasR() {

    return fetch(API_URL_FACTURAS_R)
        .then(r => r.json())

}