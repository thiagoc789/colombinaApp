/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function boton_visita(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Clientes', [], `$filter=lat eq 'Activa'`).then((results) => {
        if (results.length > 0) {
            dialog.alert('hay visita activa')
            let containerProxy = clientAPI.getPageProxy().getControl('SectionedTable').getSection('SectionButtonTable2');
            containerProxy.setVisible(false)
        
            let containerProxy2 = clientAPI.getPageProxy().getControl('SectionedTable').getSection('SectionButtonTable1');
            containerProxy2.setVisible(true)

        } else {
        return 0;
        }
    });



}
