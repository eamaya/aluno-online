class Nota {
    constructor(disciplina, a1, a2, a3) {
      this.disciplina = disciplina;
      this.a1 = a1;
      this.a2 = a2;
      this.a3 = a3;
    }
  
    mediaFinal() {
      const notas = [this.a1, this.a2, this.a3];
      const menorNota = Math.min(...notas);
      const indiceMenorNota = notas.indexOf(menorNota);
      notas[indiceMenorNota] = this.a3;
      const media = 0.4 * notas[0] + 0.6 * notas[1];
      return media.toFixed(2);
    }
  
    mediaCA() {
      const media = this.mediaFinal();
      if (media >= 9.0) {
        return "SS"; // superior
      } else if (media >= 7.0 && media <= 8.99) {
        return "MS"; // médio superior
      } else if (media >= 5.0 && media <= 6.99) {
        return "MM"; // médio
      } else if (media >= 3.0 && media <= 4.99) {
        return "MI"; // médio inferior
      } else if (media >= 0.1 && media <= 2.99) {
        return "II"; // inferior
      } else {
        return "SR"; // sem rendimento
      }
    }
  }
  
  module.exports = Nota;