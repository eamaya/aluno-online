const mediaCA = require('./mediaCA');

test('retorna o conceito "SS" para média 10', () => {
  expect(mediaCA(10)).toBe('SS');
});

test('retorna o conceito "MS" para média entre 7 e 8.9', () => {
  expect(mediaCA(7.5)).toBe('MS');
  expect(mediaCA(8.9)).toBe('MS');
});

test('retorna o conceito "MM" para média entre 5 e 6.9', () => {
  expect(mediaCA(5)).toBe('MM');
  expect(mediaCA(6.9)).toBe('MM');
});

test('retorna o conceito "MI" para média entre 3 e 4.9', () => {
  expect(mediaCA(3)).toBe('MI');
  expect(mediaCA(4.9)).toBe('MI');
});

test('retorna o conceito "II" para média entre 0.1 e 2.9', () => {
  expect(mediaCA(0.1)).toBe('II');
  expect(mediaCA(2.9)).toBe('II');
});

test('retorna o conceito "SR" para média 0', () => {
  expect(mediaCA(0)).toBe('SR');
});
