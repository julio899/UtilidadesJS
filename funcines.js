function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
/*Fin  de la Funcion sleep con ella podemos implementar igual que en Java*/

function mostrar_propiedades(obj, objName) { 
   var result = ""; 
   for (var i in obj) { 
      result += objName + "." + i + " = " + obj[i] + "\n"; 
   } 
   return result; 
}/* fin de la funcion Mostrar Propiedades de un Objeto*/
