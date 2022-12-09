/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function calcular_pedido_sugerido(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Inventario_Cliente', [], `$filter=cantidad_producto eq '20''`).then((results) => {
        if (results && results.length > 0) {
            dialog.alert(results)
            return colorCantidad

        } else {
        return 0;
        }
    });

}
