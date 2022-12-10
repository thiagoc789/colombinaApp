/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ItemPedidos(clientAPI) {
    

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Aux_Pedido', [], `$filter=status eq 'Pendiente'`).then((results) => {
        if (results && results.length > 0) {
            let suma = 0;
            for(let i = 0; i < results.length; i++){
                suma += parseInt(results.getItem(i).preciototal)
                
            }
            let valoriva= suma+suma*0.19
            let valortotal = clientAPI.evaluateTargetPath('#Page:Pedido_Detail/#Control:Fc_neto')
            valortotal.setValue('$'+valoriva)
            
  
        } else {
        return 0;
        }
    });


}
