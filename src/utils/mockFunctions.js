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

    return numeroMayor + numero3;
  } else {
    return "Los parametros deben ser numeros";
  }
};
