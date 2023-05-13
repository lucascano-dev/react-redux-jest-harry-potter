import {
  cualEsMayor,
  filtrarNumeroMasAlto,
  primeraLetraMayuscula,
  suma,
} from "./functions";

export const devolverElDobleDelMasAlto = (array) => {
  if (typeof array == "string") {
    return "ERROR: el parametro de devolverElDobleDelMasAlto tiene que ser un Array";
  } else {
    return filtrarNumeroMasAlto(array) * 2;
  }
};

export const sumarleAlNumeroMasAlto = (numero1, numero2, numero3) => {
  if (
    typeof numero1 === "number" &&
    typeof numero2 === "number" &&
    typeof numero3 === "number"
  ) {
    let numeroMayor = cualEsMayor(numero1, numero2);

    return suma(numeroMayor, numero3);
  } else {
    return "Los parametros deben ser numeros";
  }
};

export const convertirYverificarMayusculas = (string) => {
  if (typeof string === "string") {
    let mayusculas = primeraLetraMayuscula(string);
    let palabras = mayusculas.split(" ");
    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
      let primeraLetra = palabra.charAt(0);
      if (primeraLetra === primeraLetra.toLowerCase()) {
        return "ERROR: Alguna de las palabras no empieza con mayúsculas";
      }
    }
    return "Verificado: Todas las palabras empiezan en mayúsculas";
  } else {
    return "ERROR: Solo se aceptan textos";
  }
};
