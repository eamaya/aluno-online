const nota = require('../../src/models/nota');

test('calcula conceito final corretamente', () => {
    let notaObj = nota('disciplina_teste', 9.5, 9.5, 9.5);
    expect(notaObj.mediaCA()).toBe('SS');
    notaObj = nota('disciplina_teste', 8.0, 8.0, 8.0);
    expect(notaObj.mediaCA()).toBe('MS');
    notaObj = nota('disciplina_teste', 6.0, 6.0, 6.0);
    expect(notaObj.mediaCA()).toBe('MM');
    notaObj = nota('disciplina_teste', 4.0, 4.0, 4.0);
    expect(notaObj.mediaCA()).toBe('MI');
    notaObj = nota('disciplina_teste', 2.0, 2.0, 2.0);
    expect(notaObj.mediaCA()).toBe('II');
    notaObj = nota('disciplina_teste', 0.0, 0.0, 0.0);
    expect(notaObj.mediaCA()).toBe('SR');
});
