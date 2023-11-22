const calculo = require('./calculo')
describe('media', ()=>{
    test('1 + 2 = 3', ()=>{
        expect(calculo.somar(1,2)).toBe(3)
    })
        test('1 + 2 = 3', ()=>{
            expect(calculo.somar(1,2)).toBe(3)
        })
    test('3 * 3 = 6 ', ()=>{
        expect(calculo.multiplicar(3,3)).toEqual(0)
    })
})