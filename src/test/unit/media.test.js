const Nota = require('../../models/nota')
const nota = new Nota();

describe('TESTE MEDIA CA', () => {

    test('Teste Superior', () => {
        expect(nota.mediaCA(9)).toBe('SS - Superior')
    })

    test('Teste Superior', () => {
        expect(nota.mediaCA(10)).toBe('SS - Superior')
    })

    test('Teste Médio Superior', () => {
        expect(nota.mediaCA(7)).toBe('MS - Médio Superior')
    })

    test('Teste Médio Superior', () => {
        expect(nota.mediaCA(8.9)).toBe('MS - Médio Superior')
    })

    test('Teste Médio', () => {
        expect(nota.mediaCA(5)).toBe('MM - Médio')
    })

    test('Teste Médio', () => {
        expect(nota.mediaCA(6.7)).toBe('MM - Médio')
    })
    
    test('Teste Médio Inferior', () => {
        expect(nota.mediaCA(4)).toBe('MI - Médio Inferior')
    })

    test('Teste Médio Inferior', () => {
        expect(nota.mediaCA(4.6)).toBe('MI - Médio Inferior')
    })

    test('Inferior', () => {
        expect(nota.mediaCA(0.5)).toBe('II - Inferior')
    })

})