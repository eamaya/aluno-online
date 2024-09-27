const { mediaCA } = require('./mediaCA');

test('Testa o cálculo do conceito superior', () => {
  expect(mediaCA(9.5)).toBe('SS - Superior');
  expect(mediaCA(10)).toBe('SS - Superior');
});

test('Testa o cálculo do conceito médio superior', () => {
  expect(mediaCA(7.5)).toBe('MS - Médio Superior');
  expect(mediaCA(8.9)).toBe('MS - Médio Superior');
});

test('Testa o cálculo do conceito médio', () => {
  expect(mediaCA(5.5)).toBe('MM - Médio');
  expect(mediaCA(6.9)).toBe('MM - Médio');
});

test('Testa o cálculo do conceito médio inferior', () => {
  expect(mediaCA(3.5)).toBe('MI - Médio Inferior');
  expect(mediaCA(4.9)).toBe('MI - Médio Inferior');
});

test('Testa o cálculo do conceito inferior', () => {
  expect(mediaCA(1.5)).toBe('II - Inferior');
  expect(mediaCA(2.9)).toBe('II - Inferior');
});

test('Testa o cálculo do conceito sem rendimento', () => {
  expect(mediaCA(0)).toBe('SR - Sem rendimento');
});
