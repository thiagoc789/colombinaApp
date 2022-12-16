/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function crear_pedido(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Aux_Pedido', [], `$filter=status eq 'Pendiente'`).then((results) => {
        var preciototal = 0;
        for (let i = 0; i < results.length; i++) {
            preciototal = preciototal + parseInt(results.getItem(i).preciototal)
        }

        var auxprecio = preciototal.toString()

        if (results && results.length > 0) {
            clientAPI.executeAction({
                "Name": "/Colombina/Actions/Service/crearpedido.action",
                "Properties": {
                    "Properties": {
                        "id": results.getItem(0).id_pedido_aux,
                        "nombre_producto": results.getItem(0).fecha,
                        "cliente": results.getItem(0).id_cliente,
                        "preciototal": auxprecio,
                        "status": 'Enviado'
                    }
                }
            });

            for (let i = 0; i < results.length; i++) {

                var op = results.getItem(i);

                clientAPI.executeAction({
                    "Name": "/Colombina/Actions/Actualizar_Estado_Pedido_Enviado.action",
                    "Properties": {
                        "Target": {
                            "ReadLink": op["@odata.readLink"]
                        },
                        "Properties": {
                            "status": 'Enviado'
                        },
                    }
                });

            }
        }
        else {
            return 0;
        }

    });


}

