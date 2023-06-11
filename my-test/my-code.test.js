// Função mediaCA()
function mediaCA(nota) {
    if (nota >= 9.0 && nota <= 10) {
      return 'SS - Superior';
    } else if (nota >= 7.0 && nota < 9.0) {
      return 'MS - Médio Superior';
    } else if (nota >= 5.0 && nota < 7.0) {
      return 'MM - Médio';
    } else if (nota >= 3.0 && nota < 5.0) {
      return 'MI - Médio Inferior';
    } else if (nota >= 0.1 && nota < 3.0) {
      return 'II - Inferior';
    } else if (nota === 0.0) {
      return 'SR - Sem rendimento';
    } else {
      return 'Nota inválida';
    }
  }
  

// Testes utilizando Jest
describe('mediaCA()', () => {
    it('deve retornar "SS - Superior" para nota entre 9.0 e 10', () => {
      expect(mediaCA(9.5)).toBe('SS - Superior');
      expect(mediaCA(10)).toBe('SS - Superior');
    });
  
    it('deve retornar "MS - Médio Superior" para nota entre 7.0 e 8.9', () => {
      expect(mediaCA(7.5)).toBe('MS - Médio Superior');
      expect(mediaCA(8.9)).toBe('MS - Médio Superior');
    });
  
    it('deve retornar "MM - Médio" para nota entre 5.0 e 6.9', () => {
      expect(mediaCA(5.5)).toBe('MM - Médio');
      expect(mediaCA(6.9)).toBe('MM - Médio');
    });
  
    it('deve retornar "MI - Médio Inferior" para nota entre 3.0 e 4.9', () => {
      expect(mediaCA(3.5)).toBe('MI - Médio Inferior');
      expect(mediaCA(4.9)).toBe('MI - Médio Inferior');
    });
  
    it('deve retornar "II - Inferior" para nota entre 0.1 e 2.9', () => {
      expect(mediaCA(1)).toBe('II - Inferior');
      expect(mediaCA(2.9)).toBe('II - Inferior');
    });
  
    it('deve retornar "SR - Sem rendimento" para nota 0.0', () => {
      expect(mediaCA(0)).toBe('SR - Sem rendimento');
    });
  
    it('deve retornar "Nota inválida" para nota inválida', () => {
      expect(mediaCA(-1)).toBe('Nota inválida');
      expect(mediaCA(11)).toBe('Nota inválida');
    });
  });