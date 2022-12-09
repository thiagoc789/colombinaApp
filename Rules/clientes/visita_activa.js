/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function visita_activa(clientAPI) {

    var dialog = clientAPI.nativescript.uiDialogsModule;


    return clientAPI.read('/Colombina/Services/Colombina.service', 'Clientes', [], `$filter=lat eq 'Activa'`).then((results) => {
        if (results.length > 0) {
            
            clientAPI.executeAction('/Colombina/Actions/Msg_VisitaActiva.action')  
            
        } else {
        clientAPI.executeAction('/Colombina/Actions/Nav_RuteroClientes.action')
        //HACER EL CAMBIO AL FINALIZAR LA VISITA
        }
    });
}
