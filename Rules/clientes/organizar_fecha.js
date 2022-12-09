

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
    var dayaux= day.toString()

    if(dayaux.length == 1){
        dayaux = "0"+dayaux
    }


    var fechaActual = year+"/"+month+"/"+dayaux
    //var string = `$filter=dia_visita gt '${fechaActual}'&$orderby=dia_visita`
    var string = `$filter=dia_visita gt '${fechaActual}'`
    

    return string
    
	
}