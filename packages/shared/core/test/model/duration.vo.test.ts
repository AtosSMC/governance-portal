import Duration from "../../src/model/duration.vo";

test("Deve criar uma duração a partir de segundos", () => {
  const duracao = Duration.inSeconds(123);
  expect(duracao.inSeconds).toBe(123);
});

test("Deve criar uma duração a partir de dias, horas, minutos e segundos", () => {
  const duracao = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  expect(duracao.inSeconds).toBe(93784);
});

test("Deve criar duração de um dia", () => {
  const duracao = Duration.from({ d: 1 });
  expect(duracao.inDays).toBe(1);
  expect(duracao.inHours).toBe(24);
  expect(duracao.inMinutes).toBe(1440);
  expect(duracao.inSeconds).toBe(86400);
});

test("Deve criar duração de 30 segundos", () => {
  const duracao = Duration.from({ s: 30 });
  expect(duracao.inDays).toBe(0);
  expect(duracao.inHours).toBe(0);
  expect(duracao.inMinutes).toBe(0);
  expect(duracao.inSeconds).toBe(30);
  expect(duracao.toHMS).toBe("00h 00m 30s");
});

test("Deve criar duração zerada", () => {
  const duracao = Duration.zero();
  expect(duracao.inSeconds).toBe(0);
});

test("Deve converter duração para dias, horas, minutos e segundos", () => {
  const duracao = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  expect(duracao.inDays).toBe(1);
  expect(duracao.inHours).toBe(26);
  expect(duracao.inMinutes).toBe(1563);
});

test("Deve formatar duração para HH:mm:ss", () => {
  const duracao = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  expect(duracao.toHMS).toBe("26h 03m 04s");
});

test("Deve formatar duração para HH:mm", () => {
  const duracao = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  expect(duracao.toHM).toBe("26h 03m");
});

test("Deve formatar duração para HH:mm", () => {
  const duracao = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  expect(duracao.toMS).toBe("1563m 04s");
});

test("Deve somar duas durações", () => {
  const duracao1 = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  const duracao2 = Duration.from({ d: 0, h: 1, m: 2, s: 3 });
  const duracao3 = duracao1.add(duracao2);
  expect(duracao3.inSeconds).toBe(97507);
});

test("Deve lançar erro ao tentar criar uma duração negativa", () => {
  expect(() => Duration.inSeconds(-10)).toThrow("duration.negative");
});

test("Deve obter horas e minutos de uma duração", () => {
  const duracao = Duration.from({ d: 1, h: 2, m: 3, s: 4 });
  expect(duracao.hoursAndMinutes).toEqual({ hours: "26", minutes: "03" });
});
