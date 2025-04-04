import Email from "../../src/model/email.vo";

const errPadrao = "email.invalid";

test("Deve criar um email válido", () => {
  const email = new Email("fulano@zmail.com");
  expect(email.value).toBe("fulano@zmail.com");
});

test("Deve retornar o nome do usuário", () => {
  const email = new Email("fulano@zmail.com");
  expect(email.username).toBe("fulano");
});

test("Deve retornar o domínio", () => {
  const email = new Email("fulano@zmail.com");
  expect(email.domain).toBe("zmail.com");
});

test("Deve validar email", () => {
  expect(Email.isValid("user@email.com")).toBeTruthy();
  expect(Email.isValid("user@email")).toBeFalsy();
});

test("Deve lançar erro ao criar um email inválido", () => {
  expect(() => new Email(undefined as any)).toThrow(errPadrao);
  expect(() => new Email("")).toThrow(errPadrao);
  expect(() => new Email("fulano")).toThrow(errPadrao);
  expect(() => new Email("fulano@zmail")).toThrow(errPadrao);
});
