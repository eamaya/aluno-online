const Nota = require('./Nota');

test('calcula conceito final corretamente', () => {
  const nota = new Nota();
  
  expect(nota.mediaCA(9.5)).toBe('SS - Superior');
  expect(nota.mediaCA(7.8)).toBe('MS - Médio Superior');
  expect(nota.mediaCA(5.5)).toBe('MM - Médio');
  expect(nota.mediaCA(3.2)).toBe('MI - Médio Inferior');
  expect(nota.mediaCA(1.7)).toBe('II - Inferior');
  expect(nota.mediaCA(0.0)).toBe('SR - Sem rendimento');
});

class Nota {
  mediaCA(nota) {
    if (nota >= 9.0 && nota <= 10) {
      return 'SS - Superior';
    } else if (nota >= 7.0 && nota <= 8.9) {
      return 'MS - Médio Superior';
    } else if (nota >= 5.0 && nota <= 6.9) {
      return 'MM - Médio';
    } else if (nota >= 3.0 && nota <= 4.9) {
      return 'MI - Médio Inferior';
    } else if (nota >= 0.1 && nota <= 2.9) {
      return 'II - Inferior';
    } else if (nota === 0.0) {
      return 'SR - Sem rendimento';
    } else {
      return 'Nota inválida';
    }
  }
}

module.exports = Nota;
