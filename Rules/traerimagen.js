/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function traerimagen(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    let custListTab = clientAPI.evaluateTargetPathForAPI('#Page:Pedido_Detail');

    let list = custListTab.getControl('SectionedTable0').getSections()[0];
    let list2 = custListTab.getControl('SectionedTable0').getSection('SectionObjectTable0').getSections()[0];
    let list3 = custListTab.getControl('SectionedTable0').getSection('SectionObjectTable0').getClientData().Title;

    dialog.alert(list) 
    dialog.alert(list2) 
    dialog.alert(list3)       

}
