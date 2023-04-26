
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
        return "SS"; 
      } else if (media >= 7.0 && media <= 8.99) {
        return "MS"; 
      } else if (media >= 5.0 && media <= 6.99) {
        return "MM"; 
      } else if (media >= 3.0 && media <= 4.99) {
        return "MI"; 
      } else if (media >= 0.1 && media <= 2.99) {
        return "II"; 
      } else {
        return "SR"; 
      }
    }
  }
  
  module.exports = Nota;