import SimpleText from "../../src/model/simple-text.vo";

test("Deve retornar o nome simples", () => {
  const nome = new SimpleText("Arquitetura Limpa", 3, 30);
  expect(nome.value).toBe("Arquitetura Limpa");
});

test("Deve lançar erro com nome vazio", () => {
  expect(() => new SimpleText(undefined as any, 3, 50)).toThrow();
  expect(() => new SimpleText("", 3, 50)).toThrow();
});

test("Deve lançar erro com nome muito pequeno", () => {
  expect(() => new SimpleText("Arq", 4, 30)).toThrow("");
});

test("Deve lançar erro com nome muito grande", () => {
  expect(() => new SimpleText("Arquitetura Limpa", 3, 10)).toThrow("");
});
