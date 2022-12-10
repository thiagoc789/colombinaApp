/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function id_cliente_activa(clientAPI) {
    return clientAPI.read('/Colombina/Services/Colombina.service', 'Clientes', [], `$filter=lat eq 'Activa'`).then((results) => {
        if (results && results.length > 0) {
            for(let i = 0; i < results.length; i++){
                var id = results.getItem(0).id
                var campo = clientAPI.evaluateTargetPath('#Page:Visita_Activa/#Control:Fc_idactiva/')
                campo.setValue(id)

            }
        } else {
        return 0;
        }
    });
}
