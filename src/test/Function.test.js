import {
  suma,
  filtrarNumeroMasAlto,
  primeraLetraMayuscula,
  cualEsMayor,
} from "../utils/functions";

describe("Funcion: suma", () => {
  test("Test1: Debe devolver la suma de 2 valores pasados por parametro", () => {
    let response = suma(3, 4);
    expect(response).toBe(7);
  });

  test("Test2: Debe devolver ERROR_PARAMETRO_NO_NUMERICO si un dato no es un numero", () => {
    let response = suma("3", 4);
    expect(response).toBe("ERROR_PARAMETRO_NO_NUMERICO");
  });
});

describe("Funcion: filtrarNumeroMasAlto(arrayNumeros)", () => {
  test("Test1: Debe devolver el numero mas alto de array", () => {
    let response = filtrarNumeroMasAlto([14, 25, 53, 74, 49]);
    expect(response).toBe(74);
  });

  test("Test2: El array debe tener solo numeros", () => {
    let response = filtrarNumeroMasAlto([14, 25, 53, "texto", 49]);
    expect(response).toBe(
      "Se detectaron strings en el array, solo debe haber numeros"
    );
  });
});

describe("Funcion: primerLetraMayuscula(string)", () => {
  test("Test1: Solo puede recibir string", () => {
    let response = primeraLetraMayuscula(1);
    expect(response).toBe("Datos no validos");
  });

  test("Test2: Algun dato no es un string", () => {
    let response = primeraLetraMayuscula([1, 2, 3]);
    expect(response).toBe("Datos no validos");
  });

  test("Test3: Cada palabra empieza con mayuscula", () => {
    let response = primeraLetraMayuscula("Soy Lucas Cano");
    expect(response).toBe("Todas las palabras empiezan con mayusculas");
  });
});

describe("Funcion: cualEsMayor(numero1,numero2", () => {
  test("Test1: Solo puede recibir numeros", () => {
    let response = cualEsMayor("1", "2");
    expect(response).toBe("Solo puede recibir numeros");
  });

  test("Test2: Solo puede recibir numeros", () => {
    let response = cualEsMayor("1", 2);
    expect(response).toBe("Solo puede recibir numeros");
  });

  test("Test3: Devuelve el numero mas alto entre 1 y 2", () => {
    let response = cualEsMayor(1, 2);
    expect(response).toBe(2);
  });
});
