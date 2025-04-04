import StrongPassword from "../../src/model/strong-password.vo";

const erro = "strong-password.too-weak";

test("Deve lançar erro com senha vazia", () => {
  expect(() => new StrongPassword()).toThrow(erro);
  expect(() => new StrongPassword("")).toThrow(erro);
});

test("Deve lançar erro com senha apenas com números", () => {
  expect(() => new StrongPassword("1234567890")).toThrow(erro);
});

test("Deve lançar erro com senha apenas com letras", () => {
  expect(() => new StrongPassword("AbCdEfGhIj")).toThrow(erro);
});

test("Deve lançar erro com senha apenas com caracteres especiais", () => {
  expect(() => new StrongPassword("!@#$%¨&*()_+")).toThrow(erro);
});

test("Deve lançar erro com senha com menos de 8 caracteres", () => {
  expect(() => new StrongPassword("%S3nh4%")).toThrow(erro);
});

test("Deve criar senha forte", () => {
  const senha = "S3nh4F0rt3%";
  expect(new StrongPassword(senha).value).toBe(senha);
});
