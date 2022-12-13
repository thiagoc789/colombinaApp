/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function traerimagen(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var idproducto = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_idproducto/#Value')

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Inventario_Mayorista', [], `$filter=id eq '${idproducto}'`).then((results) => {
        if (results && results.length > 0) {
            let imagen = results.getItem(0).descripcion
            let imagenaux = imagen.toString()
            let string = imagenaux
            //"/Colombina"
            var fc_imagen = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_imagen')
            fc_imagen.setValue(string.toString())
            return string
            

        } else {
        }
    });

}
