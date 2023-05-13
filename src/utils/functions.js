//Aqui iran las funciones de prueba para los test

/**Ejemplo funciones Ema para test */
export function mensaje(msg) {
  if (typeof msg != "string") {
    return "Dato no valido. No se puede enviar numeros";
  }
  return msg;
}

/*   export function suma(numero1, numero2) {
    if (typeof (numero1 + numero2) == "string") return 0;
    return numero1 + numero2;
  } */

/** FIN DE FUNCIONES DE EMA */

export const suma = (numero1, numero2) => {
  if (typeof (numero1 + numero2) !== "number") {
    return "ERROR_PARAMETRO_NO_NUMERICO";
  }
  return numero1 + numero2;
};

export const filtrarNumeroMasAlto = (arrayNumeros) => {
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (typeof arrayNumeros[i] != "number") {
      return "Se detectaron strings en el array, solo debe haber numeros";
    }
  }
  //return Math.max(array[]);
  return Math.max.apply(null, arrayNumeros);
};

export const primeraLetraMayuscula = (string) => {
  if (typeof string === "string") {
    //console.log("es string");
    //return "Es string";
    let palabras = string.split(" ");
    let mayusculas = palabras.every(
      (palabra) => palabra.charAt(0) === palabra.charAt(0).toUpperCase()
    );
    //return mayusculas ? mayusculas : "Datos no válidos";
    if (mayusculas) {
      return "Todas las palabras empiezan con mayusculas";
    } else {
      return "Datos no validos";
    }
  }
  return "Datos no validos";
};

export const cualEsMayor = (numero1, numero2) => {
  if (typeof (numero1 + numero2) != "number") {
    return "Solo puede recibir numeros";
  }
  return Math.max(numero1, numero2);
};
