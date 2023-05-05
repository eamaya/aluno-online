router.get('', function (req, res, next) {
    const notas = [];
    notasDB.data.forEach(function(item, index) {
        const nota = new Nota(item.disciplina, item.a1, item.a2, item.a3);
        const media = (nota.a1 + nota.a2 + nota.a3) / 3;
        if (media >= 0 && media <= 2) {
            nota.mencao = 'II';
        } else if (media > 2 && media <= 4) {
            nota.mencao = 'MI';
        } else if (media > 4 && media <= 6) {
            nota.mencao = 'MM';
        } else if (media > 6 && media <= 8) {
            nota.mencao = 'MS';
        } else if (media > 8 && media <= 10) {
            nota.mencao = 'SS';
        }
        notas.push(nota);
    });
    res.render('notas/lista', { notas: notas });
});