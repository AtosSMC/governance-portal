import Entity, { EntityProps } from "../../src/model/entity";
import Id from "../../src/model/id.vo";

interface EntityTesteProps extends EntityProps {
  nome?: string;
  idade?: number;
}

class EntityTeste extends Entity<EntityTeste, EntityTesteProps> {
  constructor(props: EntityTesteProps) {
    super(props);
  }
}

test("Deve calcular igualdade para true quando as entidades possuem o mesmo id", () => {
  const id = Id.createUUID();
  const entidade1 = new EntityTeste({ id });
  const entidade2 = new EntityTeste({ id });
  expect(entidade1.equals(entidade2)).toBeTruthy();
});

test("Deve calcular igualdade para false quando as entidades possuem ids diferentes", () => {
  const id1 = Id.createUUID();
  const id2 = Id.createUUID();
  const entidade1 = new EntityTeste({ id: id1 });
  const entidade2 = new EntityTeste({ id: id2 });
  expect(entidade1.equals(entidade2)).toBe(false);
  expect(entidade1.notEquals(entidade2)).toBe(true);
});

test("Deve clonar uma entidade e alterar apenas a idade", () => {
  const idade = 30;
  const entidade = new EntityTeste({
    id: Id.createUUID(),
    nome: "Fulaninho",
    idade: 20,
  });
  const clone = entidade.clone({ idade });

  expect(clone.id.value).toBe(entidade.id.value);
  expect(clone.props.nome).toBe(entidade.props.nome);
  expect(clone.props.idade).toBe(idade);
});

test("Deve clonar uma entidade e alterar apenas o nome", () => {
  const nome = "Joaozinho";
  const entidade = new EntityTeste({
    id: Id.createUUID(),
    nome: "Fulaninho",
    idade: 20,
  });
  const clone = entidade.clone({ nome });

  expect(clone.id.value).toBe(entidade.id.value);
  expect(clone.props.nome).toBe(nome);
  expect(clone.props.idade).toBe(entidade.props.idade);
});

test("Deve clonar uma entidade e alterar apenas o id", () => {
  const id = Id.createUUID();
  const entidade = new EntityTeste({
    id: Id.createUUID(),
    nome: "Fulaninho",
    idade: 20,
  });
  const clone = entidade.clone({ id });

  expect(entidade.notEquals(clone)).toBe(true);
  expect(clone.id.value).toBe(id);
  expect(clone.props.nome).toBe(entidade.props.nome);
  expect(clone.props.idade).toBe(entidade.props.idade);
});

test("Deve criar uma entidade e crecar createdAt tendo value", () => {
  const entidade = new EntityTeste({
    createdAt: new Date(),
  });

  expect(entidade.createdAt).toBeInstanceOf(Date);
  expect(entidade.createdAt).toBe(entidade.props.createdAt);
});

test("Deve criar uma entidade e crecar createdAt sem data", () => {
  const entidade = new EntityTeste({});

  expect(entidade.createdAt).toBe(null);
});

test("Deve criar uma entidade e crecar updatedAt tendo value", () => {
  const entidade = new EntityTeste({
    updatedAt: new Date(),
  });

  expect(entidade.updatedAt).toBeInstanceOf(Date);
  expect(entidade.updatedAt).toBe(entidade.props.updatedAt);
});

test("Deve criar uma entidade e crecar updatedAt sem value", () => {
  const entidade = new EntityTeste({});

  expect(entidade.updatedAt).toBeInstanceOf(Date);
});

test("Deve criar uma entidade e crecar updatedAt sendo undefined", () => {
  const entidade = new EntityTeste({ updatedAt: undefined });

  expect(entidade.updatedAt).toBeInstanceOf(Date);
});

test("Deve criar uma entidade e crecar deletedAt tendo value", () => {
  const entidade = new EntityTeste({
    deletedAt: new Date(),
  });

  expect(entidade.deletedAt).toBeInstanceOf(Date);
  expect(entidade.deletedAt).toBe(entidade.props.deletedAt);
});

test("Deve criar uma entidade e crecar deletedAt sem data", () => {
  const entidade = new EntityTeste({});

  expect(entidade.deletedAt).toBe(null);
});

test("Deve criar uma entidade e clonar os Metadata com value string", () => {
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta("modulo", "teste");
  expect(meta.attribute).toBe("modulo");
  expect(meta.value).toBe("teste");
});

test("Deve criar uma entidade sem adicionar Metadata e checar Metadata", () => {
  const entidade = new EntityTeste({});

  expect(entidade.meta).toHaveProperty("id");
  expect(Object.keys(entidade.meta)).toHaveLength(1);
});

test("Deve criar uma entidade e clonar os Metadata com value string", () => {
  const nomeAtributo = "nome";
  const valueAtributo = "Joaozinho";
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta(nomeAtributo, valueAtributo);
  expect(meta.attribute).toBe(nomeAtributo);
  expect(meta.value).toBe(valueAtributo);
});

test("Deve criar uma entidade e clonar os Metadata com value numerico", () => {
  const nomeAtributo = "nome";
  const valueAtributo = 4;
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta(nomeAtributo, valueAtributo);
  expect(meta.attribute).toBe(nomeAtributo);
  expect(meta.value).toBe(valueAtributo);
});

test("Deve criar uma entidade e clonar os Metadata com value null", () => {
  const nomeAtributo = "nome";
  const valueAtributo = null;
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta(nomeAtributo, valueAtributo);
  expect(meta.attribute).toBe(nomeAtributo);
  expect(meta.value).toBe(valueAtributo);
});

test("Deve criar uma entidade e clonar os Metadata com value undefined", () => {
  const nomeAtributo = "nome";
  const valueAtributo = undefined;
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta(nomeAtributo, valueAtributo);
  expect(meta.attribute).toBe(nomeAtributo);
  expect(meta.value).toBe(valueAtributo);
});

test("Deve criar uma entidade e clonar os Metadata com value em objeto", () => {
  const nomeAtributo = "nome";
  const valueAtributo = { nome: "Joaozinho" };
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta(nomeAtributo, valueAtributo);
  expect(meta.attribute).toBe(nomeAtributo);
  expect(meta.value).toEqual(valueAtributo);
});

test("Deve criar uma entidade e clonar os Metadata com value em array", () => {
  const nomeAtributo = "nome";
  const valueAtributo = ["Joaozinho"];
  const entidade = new EntityTeste({});

  const meta = entidade.cloneMeta(nomeAtributo, valueAtributo);
  expect(meta.attribute).toBe(nomeAtributo);
  expect(meta.value).toEqual(valueAtributo);
});
