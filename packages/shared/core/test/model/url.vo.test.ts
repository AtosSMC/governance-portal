import Url from "../../src/model/url.vo";

const errPadrao = "A URL informada é inválida.";

test("Deve retornar o dominio completo da url", () => {
  const url = new Url("https://www.google.com/search?q=typescript");
  expect(url.domain).toBe("www.google.com");
});

test("Deve retornar o protocolo da url", () => {
  const url = new Url("https://www.google.com/search?q=typescript");
  expect(url.protocol).toBe("https:");
});

test("Deve retornar o caminho da url", () => {
  const url = new Url("https://www.google.com/search?q=typescript");
  expect(url.pathname).toBe("/search");
});

test("Deve retornar os parametros da url", () => {
  const url = new Url("https://www.google.com/search?q=typescript&hl=pt-BR");
  expect(url.parameters).toEqual({ q: "typescript", hl: "pt-BR" });
  expect(url.parameters.q).toBe("typescript");
  expect(url.parameters.hl).toBe("pt-BR");
});

test("Deve lançar erro com url inválida", () => {
  expect(() => new Url()).toThrow(errPadrao);
  expect(() => new Url("")).toThrow(errPadrao);
  expect(() => new Url("www.google.com")).toThrow(errPadrao);
  expect(() => new Url("https//www.google.com")).toThrow(errPadrao);
});

test("Deve validar url", () => {
  expect(
    Url.isValid("https://www.google.com/search?q=typescript")
  ).toBeTruthy();
  expect(Url.isValid("www.google.com")).toBeFalsy();
});
