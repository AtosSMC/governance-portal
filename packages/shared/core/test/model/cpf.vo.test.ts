import Cpf from "../../src/model/cpf.vo";

test("Deve validar um CPF", () => {
  const cpf = new Cpf("12345678909");
  expect(cpf.formatted).toBe("123.456.789-09");
});

test("Deve lançar erro ao tentar criar um CPF inválido", () => {
  expect(() => new Cpf("12345678900")).toThrow("cpf.invalid");
});

test("Deve desformatar um CPF", () => {
  const cpf = new Cpf("123.456.789-09");
  expect(cpf.unformatted).toBe("12345678909");
});

test("Deve validar um CPF", () => {
  expect(Cpf.isValid(null as any)).toBe(false);
  expect(Cpf.isValid("")).toBe(false);
  expect(Cpf.isValid("123")).toBe(false);
  expect(Cpf.isValid("12345678909")).toBe(true);
});
