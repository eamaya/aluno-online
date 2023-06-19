function nota(disciplina, a1, a2, a3) {

    function mediaFinal() {
        const media = Math.max(
            0.4 * a1 + 0.6 * a2,
            0.4 * a1 + 0.6 * a3,
            0.4 * a3 + 0.6 * a2
        );
        return parseFloat(media.toFixed(2));
    }


    function mediaCA() {
        const media = mediaFinal();
        if (media >= 9.0) {
            return 'SS'; // Superior
        } else if (media >= 7.0) {
            return 'MS'; // Médio Superior
        } else if (media >= 5.0) {
            return 'MM'; // Médio
        } else if (media >= 3.0) {
            return 'MI'; // Médio Inferior
        } else if (media >= 0.1) {
            return 'II'; // Inferior
        } else {
            return 'SR'; // Sem rendimento
        }
    }
    

    return { disciplina, a1, a2, a3, mediaFinal, mediaCA };
}
module.exports = nota;