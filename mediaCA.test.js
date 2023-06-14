const mediaCA = require('./mediaCA');

test('retorna conceito SS - Superior', () => {
  expect(mediaCA(10)).toBe('SS - Superior');
});

test('retorna conceito MS - Médio Superior', () => {
  expect(mediaCA(8.0)).toBe('MS - Médio Superior');
});

test('retorna conceito MM - Médio', () => {
  expect(mediaCA(6.7)).toBe('MM - Médio');
});

test('retorna conceito MI - Médio Inferior', () => {
  expect(mediaCA(4.7)).toBe('MI - Médio Inferior');
});

test('retorna conceito II - Inferior', () => {
  expect(mediaCA(2.4)).toBe('II - Inferior');
});

test('retorna conceito SR - Sem rendimento', () => {
  expect(mediaCA(0.0)).toBe('SR - Sem rendimento');
});

 
  