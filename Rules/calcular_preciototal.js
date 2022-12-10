/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function calcular_preciototal(clientAPI) {
    let dialog = clientAPI.nativescript.uiDialogsModule;
    let precioUnitario = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_precio/#Value')
    let cantidad = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_cantidad/#Value')
    let descuento = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_descuento/#Value')
    let calculopreciototal = precioUnitario*cantidad
    let calculardescuento = calculopreciototal * (descuento/100)
    let precioTotal= clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_valortotal')
    let listpicker = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_tipodeunidad/#SelectedValue')

    precioTotal.setValue(calculopreciototal - calculardescuento)

}
