class Nota {
    constructor(disciplina, a1, a2, a3) {
      this.disciplina = disciplina;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
    }
  
    mediaFinal() {
      return Math.max(
        0.4 * this.a1 + 0.6 * this.a2,
        0.4 * this.a1 + 0.6 * this.a3,
        0.4 * this.a3 + 0.6 * this.a2
      );
    }
  
    mediaCA() {
      const mediaFinal = this.mediaFinal();
  
      switch (true) {
        case mediaFinal >= 9.0:
          return 'SS - Superior';
        case mediaFinal >= 7.0:
          return 'MS - Médio Superior';
        case mediaFinal >= 5.0:
          return 'MM - Médio';
        case mediaFinal >= 3.0:
          return 'MI - Médio Inferior';
        case mediaFinal >= 0.1:
          return 'II - Inferior';
        default:
          return 'SR - Sem rendimento';
      }
    }
  }
  
  module.exports = Nota;
  