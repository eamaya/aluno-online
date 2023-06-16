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

  mediaCA(media = this.mediaFinal()) {
    switch (media) {
      case media >= 9.0:
        return "SS - Superior";
      case media >= 7.0 && media <= 8.99:
        return "MS - Médio Superior";
      case media >= 5.0 && media <= 6.99:
        return "MM - Médio";
      case media >= 3.0 && media <= 4.99:
        return "MI - Médio Inferior";
      case media >= 1.0 && media <= 2.99:
        return "II - Inferior";
      case media >= 0 && media <= 2.99:
        return "SR - Sem Rendimento";
    }
  }
}

module.exports = Nota;
