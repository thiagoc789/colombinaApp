/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
 export default function crear_pedido(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var id = clientAPI.evaluateTargetPath('#Page:PedidoSugerido/#Control:FormCellSimpleProperty0/#Value')

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Inventario_Cliente', [], `$filter=cantidad_producto lt '20' and idcliente eq '${id}'`).then((results) => {
        if (results && results.length > 0) {
            for (let i = 0; i < results.length; i++) {
                var preciototal = parseInt(results.getItem(i).precio_producto)*100
                var aux = preciototal.toString()
                clientAPI.executeAction({
                    "Name": "/Colombina/Actions/createAuxInventario_sugerido.action",
                    "Properties": {
                        "Properties": {
                            "id_producto": results.getItem(i).id_producto,
                            "nombreproducto": results.getItem(i).nombre_producto,
                            "preciounitario": results.getItem(i).precio_producto,
                            "preciototal": aux,
                            "cantidad": '100' //CAMBIAR, QUE SOLO SE HAGA UNA VEZ LAS COSAS, FILTRO DE INVENTARIO
                        }
                    }
                });
            }

            clientAPI.executeAction('/Colombina/Actions/msg_pedidosugerido.action')

        }
        else {
            return 0;
        }

    });


}
