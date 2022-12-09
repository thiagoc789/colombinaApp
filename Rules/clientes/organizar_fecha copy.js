

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
 export default function organizar_fecha(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;
    var fecha = new Date();
    var year = fecha.getFullYear()
    var month = fecha.getMonth() + 1
    var day = fecha.getDate()
    
    var fechaActual = year+"/"+month+"/"+day
    var string = `$filter=dia_visita gt '${fechaActual}'&$orderby=dia_visita`
    

    return string
    
	
}