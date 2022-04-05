function queTipoSoy<T>(argumento: T) {
    return argumento;
  }
  
  let soyString = queTipoSoy("Hola mundo");
  let soyNumero = queTipoSoy(1);
  
  let soyExplicito = queTipoSoy<boolean>(true);
  