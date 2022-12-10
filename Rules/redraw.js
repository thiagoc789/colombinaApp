/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function redraw(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    let container = clientAPI.getPageProxy().getControl('SectionedTable0');
    container.redraw();
    dialog.alert("redraw")
}
