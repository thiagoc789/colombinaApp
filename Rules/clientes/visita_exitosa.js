/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function visita_exitosa(context) {
    var dialog = context.nativescript.uiDialogsModule;
    let containerProxy = context.getPageProxy().getControl('SectionedTable').getSection('SectionButtonTable2');
    containerProxy.setVisible(false)

    let containerProxy2 = context.getPageProxy().getControl('SectionedTable').getSection('SectionButtonTable1');
    containerProxy2.setVisible(true)
    
        
}
