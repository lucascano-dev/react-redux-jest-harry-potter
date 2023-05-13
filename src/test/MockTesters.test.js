import {
  filtrarNumeroMasAlto,
  primeraLetraMayuscula,
  cualEsMayor,
  suma,
} from "../utils/functions";

import {
  devolverElDobleDelMasAlto,
  convertirYverificarMayusculas,
  sumarleAlNumeroMasAlto,
} from "../utils/mockFunctions";

jest.mock("../utils/functions");

describe("Funcion: devolverElDObleDelMasAlto(Array) <= filtrarNumeroMasAlto", () => {
  test("Test1: Devuelve el doble del numero más alto del array", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(74);
    let response = devolverElDobleDelMasAlto([14, 25, 53, 74, 49]);
    expect(response).toBe(148);
  });

  test("Test2: No puede devolver otro dato que no sea un numero", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(74);
    let response = devolverElDobleDelMasAlto([14, 25, 53, 74, 49]);
    expect(typeof response).toBe("number");
  });

  test("Test3: No puede recibir otro dato que no sea un Array", () => {
    filtrarNumeroMasAlto.mockReturnValueOnce(5);
    let response = devolverElDobleDelMasAlto("TEXTO_STRING");
    expect(response).toBe(
      "ERROR: el parametro de devolverElDobleDelMasAlto tiene que ser un Array"
    );
  });
});

describe("Funcion: sumarleAlNumeroMasAlto(numero1, numero2, numero3", () => {
  test("Test1: Devuelve la suma del mayor de los dos primeros numeros mas el tercer numero", () => {
    cualEsMayor.mockReturnValueOnce(89);
    //suma.mockReturnValueOnce(133);
    let response = sumarleAlNumeroMasAlto(23, 89, 44);
    expect(response).toBe(133);
  });

  test("Test2: Todos los parámetros deben ser número, si no, devolver un mensaje de error", () => {
    cualEsMayor.mockReturnValueOnce(89);
    // suma.mockReturnValueOnce(133);
    let response = sumarleAlNumeroMasAlto(22, "89", 44);
    expect(response).toBe("Los parametros deben ser numeros");
  });
});
