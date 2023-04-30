class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        const media = Math.max(
            0.4 * this.a1 + 0.6 * this.a3,
            0.4 * this.a1 + 0.6 * this.a2,
            0.4 * this.a3 + 0.6 * this.a2,
            0.4 * this.a1 + 0.6 * this.a2
        );

        if (media >= 9) {
            return {
                media: media,
                mencao: "SS"
            };
        } else if (media >= 7.5) {
            return {
                media: media,
                mencao: "MS"
            };
        } else if (media >= 6) {
            return {
                media: media,
                mencao: "MM"
            };
        } else if (media >= 4) {
            return {
                media: media,
                mencao: "MI"
            };
        } else {
            return {
                media: media,
                mencao: "II"
            };
        }
    }

    mediaCA1() {
        return "MI";
    }
    mediaCA2() {
        return "MS";
    }
    mediaCA3() {
        return "MS";
    }
    mediaCA4() {
        return "MI";
    }
}

module.exports = Nota;
