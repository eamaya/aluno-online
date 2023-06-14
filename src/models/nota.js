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
        return "SS";
        9,0 – 10  | SS – Superior
        7,0 – 8,9 | MS – Médio Superior
        5,0 – 6,9 | MM – Médio
        3,0 – 4,9 | MI – Médio Inferior
        0,1 – 2,9 | II – Inferior
        0,0       | SR – Sem rendimento
    }
}

module.exports = Nota;