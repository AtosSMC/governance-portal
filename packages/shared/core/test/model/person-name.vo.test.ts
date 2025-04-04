import { PersonName } from '../../src/model'

test('Deve lançar erro ao tentar criar nome vazio', () => {
    expect(() => new PersonName()).toThrow('')
    expect(() => new PersonName('')).toThrow('')
})

test('Deve lançar vários erros ao tentar criar nome vazio', () => {
    expect(() => new PersonName()).toThrow('')
})

test('Deve lançar erro ao tentar criar nome menor que 3 caracteres', () => {
    expect(() => new PersonName('L Z')).toThrow('')
})

test('Deve lançar erro ao tentar criar nome maior que 120 caracteres', () => {
    const nomeGigante =
        'Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga de Bragança e Habsburgo'
    expect(() => new PersonName(nomeGigante)).toThrow('')
})

test('Deve lançar erro ao tentar criar nome sem sobrenome', () => {
    expect(() => new PersonName('Guilherme')).toThrow('')
})

test('Deve lançar erro ao tentar criar nome com caracteres especiais', () => {
    expect(() => new PersonName('João @OOOJoao')).toThrow('')
})

test('Deve criar nome e dois sobrenomes', () => {
    const nome = new PersonName('João Silva Pereira')
    expect(nome.value).toBe('João Silva Pereira')
    expect(nome.firstName).toBe('João')
    expect(nome.lastNames).toEqual(['Silva', 'Pereira'])
    expect(nome.lastName).toBe('Pereira')
})

test('Deve criar nome com apostrofo', () => {
    const nomeComApostrofo = "João D'Ávila"
    const nome = new PersonName(nomeComApostrofo)
    expect(nome.value).toBe(nomeComApostrofo)
})

test('Deve retornar as iniciais do nome', () => {
    const nome = new PersonName('João Silva Pereira')
    expect(nome.initials).toBe('JP')
})
