/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function calcular_duracion(clientAPI) {
    var dialog = clientAPI.nativescript.uiDialogsModule;

    return clientAPI.read('/Colombina/Services/Colombina.service', 'HISTV', [], `$filter=ESTADO eq 'Activa'`).then((results) => {
        var fecha = results.getItem(0).FECHA
        var fechaDate = new Date(fecha)
        var hoy = new Date();
        var fechaActual = hoy.getTime()
        var ms = parseInt(fechaActual - fechaDate.getTime())

        return(msToTime(ms))
       
    
    });

}

function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds;
  }
