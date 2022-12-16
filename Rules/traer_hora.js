/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function traer_hora(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var date = new Date()
    var hora = date.getHours();
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();

    

    return hora.toString() +":" + minutos.toString() + ":" + segundos.toString()
}
