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
        if (media >= 9) {
            return "ss";
        } else if (media >= 7.0) {
            return "ms";
        } else if (media >= 5) {
            return "mm";
        } else {
            return "Reprovado";
        }
    }

    return { disciplina, a1, a2, a3, mediaFinal, mediaCA };
}

module.exports = nota;