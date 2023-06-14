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
           

           var media = (a1 + a2 + a3) / 3;

            if (media >= 9.0 && media <= 10.0) {
              return "SS - Superior";
            } else if (media >= 7.0 && media < 9.0) {
              return "MS - Médio Superior";
            } else if (media >= 5.0 && media < 7.0) {
              return "MM - Médio";
            } else if (media >= 3.0 && media < 5.0) {
              return "MI - Médio Inferior";
            } else if (media >= 0.1 && media < 3.0) {
              return "II - Inferior";
            } else if (media === 0.0) {
              return "SR - Sem rendimento";
            } else {
              return "Nota inválida";
            }
            console.log(media);
          }
        }

module.exports = Nota;

/*3) Criar testes unitários utilizando Jest e implementar a função mediaCA() que deve retornar o conceito final com base na escala abaixo: [5,0 pontos]
9,0 – 10  | SS – Superior
7,0 – 8,9 | MS – Médio Superior
5,0 – 6,9 | MM – Médio
3,0 – 4,9 | MI – Médio Inferior
0,1 – 2,9 | II – Inferior
0,0       | SR – Sem rendimento
*/