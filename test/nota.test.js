const Nota = require('./nota'); // Importe a classe Nota do arquivo correspondente

describe('Nota', () => {
  describe('mediaCA', () => {
    test('Deve retornar SS - Superior para média entre 9.0 e 10', () => {
      const nota = new Nota();
      nota.adicionarNota(9.5); // Adicione uma nota que resulta na média desejada

      expect(nota.mediaCA()).toBe('SS - Superior');
    });

    // Repita o teste para cada intervalo da escala
    test('Deve retornar MS - Médio Superior para média entre 7.0 e 8.9', () => {
      // ...
    });

    test('Deve retornar MM - Médio para média entre 5.0 e 6.9', () => {
      // ...
    });

    test('Deve retornar MI - Médio Inferior para média entre 3.0 e 4.9', () => {
      // ...
    });

    test('Deve retornar II - Inferior para média entre 0.1 e 2.9', () => {
      // ...
    });

    test('Deve retornar SR - Sem rendimento para média 0.0', () => {
      // ...
    });
  });
});
