function soma(a, b){
	return a+b
}
module.exports = soma



const soma = require('./soma')

function media(a, b){
    s = soma(a, b)
    m = s/2
    return m
}
exports.media = media




const calculo = require('./media')

test('Testando a media aritmética', () => {    
      expect(calculo.media(7, 4)).toBe(5)
})


/*3) Criar testes unitários utilizando Jest e implementar a função mediaCA() que deve retornar o conceito final com base na escala abaixo: [5,0 pontos]
9,0 – 10  | SS – Superior
7,0 – 8,9 | MS – Médio Superior
5,0 – 6,9 | MM – Médio
3,0 – 4,9 | MI – Médio Inferior
0,1 – 2,9 | II – Inferior
0,0       | SR – Sem rendimento
*/