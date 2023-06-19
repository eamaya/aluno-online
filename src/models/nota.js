const PESO_A1 = 0.4; const PESO_A2 = 0.6;

function nota(disciplina, a1, a2, a3) {

const mediaFinal = () => {
    const media = Math.max(
        PESO_A1 * a1 + PESO_A2 * a2,
        PESO_A1 * a1 + PESO_A2 * a3,
        PESO_A1 * a3 + PESO_A2 * a2
    );
    return parseFloat(media.toFixed(2));
}

const mediaCA = () => {
    const media = mediaFinal();
    switch (true) {
        case media >= 9:
            return "SS";
        case media >= 7:
            return "MS";
        case media >= 5:
            return "MM";
        case media >= 3:
            return "II";
        case media >= 0:
            return "SR";
        default:
            return "REPROVADO";
    }
}

return {disciplina, a1, a2, a3, mediaFinal, mediaCA};
}

module.exports = nota;

