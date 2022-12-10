/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function crear_pedido(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    return clientAPI.read('/Colombina/Services/Colombina.service', 'Aux_Pedido', [], `$filter=status eq 'Pendiente'`).then((results) => {
        if (results && results.length > 0) {

            clientAPI.executeAction({
                "Name": "/Colombina/Actions/Service/crearpedido.action",
                "Properties": {
                    "Properties": {
                        "id": results.getItem(i).id_pedido_aux,
                        "id_pedido": '',
                        "nombre_producto": results.getItem(i).fecha,
                        "cantidad": results.getItem(i).cantidad,
                        "preciototal": results.getItem(i).preciototal,
                        "cliente": results.getItem(i).id_cliente,
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

    function calcularAleatorio() {
        var aleatorio = Math.floor((Math.random() * (9999999999999 - 100000000 + 1)) + 100000000);

        return aleatorio.toString();
    }


}

