/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function actualizarEstado(clientAPI) {
    return clientAPI.read('/Colombina/Services/Colombina.service', 'Aux_Inventario', [], `$filter=status eq 'Pendiente'`).then((results) => {
        if (results && results.length > 0) {
            let suma = 0;
            for(let i = 0; i < results.length; i++){
                dialog.alert(results.getItem(i).id_pedido)
                
            }
            
            
        //    
        } else {
        return 0;
        }
    });

}
