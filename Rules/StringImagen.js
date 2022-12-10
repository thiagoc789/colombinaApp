/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function StringImagen(clientAPI) {
    dialog.alert("se ejecuta")
    var string1 = "/Colombina/"
    var string2 = clientAPI.evaluateTargetPath('#Page:Modal_Pedido/#Control:Fc_imagen/#Value')
    dialog.alert(string1)
    dialog.alert(string2)

    var final = string1+string2
    dialog.alert(final)
    return "algo"

}
