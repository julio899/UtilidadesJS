function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
/*Fin  de la Funcion sleep 
con ella podemos implementar igual que en Java
solo le pasamos el tiempo en ms Milisegundos que va a durar Durmiendo :) */
