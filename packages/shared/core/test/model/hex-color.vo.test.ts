import { HexColor } from '../../src'

const erro = 'hexcolor.invalid'

test('Deve criar um cor em hexadecimal', () => {
    const cor = new HexColor('#ff0000')
    expect(cor.value).toBe('#ff0000')
})

test('Deve validar cor em hexadecimal', () => {
    expect(HexColor.isValid('#ff0000')).toBe(true)
    expect(HexColor.isValid('#f00')).toBe(true)
    expect(HexColor.isValid('#FF0000')).toBe(true)
    expect(HexColor.isValid('#F00')).toBe(true)

    expect(HexColor.isValid(null as any)).toBe(false)
    expect(HexColor.isValid('     ')).toBe(false)
    expect(HexColor.isValid('JJJ')).toBe(false)
    expect(HexColor.isValid('111')).toBe(false)
    expect(HexColor.isValid('#ff000')).toBe(false)
})

test('Deve lançar erro ao tentar criar cor inválida', () => {
    expect(() => new HexColor(null as any)).toThrow(erro)
    expect(() => new HexColor('   ')).toThrow(erro)
    expect(() => new HexColor('JJJ')).toThrow(erro)
    expect(() => new HexColor('111')).toThrow(erro)
    expect(() => new HexColor('#ff000')).toThrow(erro)
})
