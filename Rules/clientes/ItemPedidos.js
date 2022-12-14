/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ItemPedidos(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Aux_Pedido', [], `$filter=status eq 'Pendiente'`).then((results) => {
        if (results && results.length > 0) {
            let suma = 0;
            for(let i = 0; i < results.length; i++){
                suma += parseInt(results.getItem(i).preciototal)
                
            }
            try {
                let custListTab = clientAPI.evaluateTargetPathForAPI('#Page:Pedido_Detail');
                let list = custListTab.getControl('SectionedTable0').getSection('SectionObjectTable0');
                list.redraw();
            } catch (e) {
            }
            let valoriva= suma+suma*0.19
            let valortotal = clientAPI.evaluateTargetPath('#Page:Pedido_Detail/#Control:Fc_neto')
            valortotal.setValue('$'+valoriva)
            let container = clientAPI.getPageProxy().getControl('SectionedTable0');
            container.redraw();
            
  
        } else {
        return 0;
        }
    });


}
