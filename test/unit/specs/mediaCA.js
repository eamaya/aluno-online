function mediaCA(media) {
    if (media >= 9.0 && media <= 10) {
        return 'SS - Superior';
    } else if (media >= 7.0 && media < 9.0) {
        return 'MS - Médio Superior';
    } else if (media >= 5.0 && media < 7.0) {
        return 'MM - Médio';
    } else if (media >= 3.0 && media < 5.0) {
        return 'MI - Médio Inferior';
    } else if (media >= 0.1 && media < 3.0) {
        return 'II - Inferior';
    } else if (media === 0.0) {
        return 'SR - Sem rendimento';
    } else {
        return 'Valor de média inválido';
    }
}

module.exports = { mediaCA };
