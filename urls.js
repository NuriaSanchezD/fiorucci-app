

//comprobar si tenemos cookie
(function hiddenModal() {
  
  const URL = {
    FIORUCCI_REDICRET_COOKIE: 'https://casafiorucci.azurewebsites.net',
  }
  var data = getcookie('zipCode');
  //alert(data);
  if(!data) {
    alert(self!=top);
    if(self!=top) // Si estamos en store-casafiourucci, está página se está ejecutando de un iframe pero no tenemos cookie, por tanto hay que redireccionar.
    {
      //alert('No has especificado CAP válido, tienes que volver al formulario');     
      window.parent.location.href = 'https://casafiorucci.azurewebsites.net/'     
    }     
  } 
}
)()

function getcookie(key) {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    if (keyValue) {
        return keyValue[2];
    } else {
        return null;
    }
};