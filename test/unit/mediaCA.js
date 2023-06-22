function mediaCA(media) {
    if (media >= 9.0 && media <= 10) {
        return 'SS';
    } else if (media >= 7.0 && media < 9.0) {
        return 'MS';
    } else if (media >= 5.0 && media < 7.0) {
        return 'MM';
    } else if (media >= 3.0 && media < 5.0) {
        return 'MI';
    } else if (media >= 0.1 && media < 3.0) {
        return 'II';
    } else if (media === 0.0) {
        return 'SR';
    } else {
        return 'Valor de média inválido';
    }
}

module.exports = { mediaCA };
