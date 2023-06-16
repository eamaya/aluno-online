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
    if (mediaFinal >= 9 && mediaFinal <= 10) {
      return "SS";
    } else if (mediaFinal >= 7 && mediaFinal <= 8.99) {
      return "MS";
    } else if (mediaFinal >= 5 && mediaFinal <= 6.99) {
      return "MM";
    } else if (mediaFinal >= 3 && mediaFinal <= 4.99) {
      return "MI";
    } else if (mediaFinal >= 0.1 && mediaFinal <= 2.99) {
      return "II";
    } else if (mediaFinal === 0) {
      return "SR";
    }
  }
}

module.exports = Nota;
