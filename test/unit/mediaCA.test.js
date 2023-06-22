const { mediaCA } = require('./mediaCA');

test('Deve retornar o conceito "SS" para média entre 9.0 e 10', () => {
  const media = 9.5;
  const conceito = mediaCA(media);
  expect(conceito).toBe('SS');
});

test('Deve retornar o conceito "MS" para média entre 7.0 e 8.9', () => {
  const media = 7.5;
  const conceito = mediaCA(media);
  expect(conceito).toBe('MS');
});

test('Deve retornar o conceito "MM" para média entre 5.0 e 6.9', () => {
  const media = 5.5;
  const conceito = mediaCA(media);
  expect(conceito).toBe('MM');
});

test('Deve retornar o conceito "MI" para média entre 3.0 e 4.9', () => {
  const media = 3.5;
  const conceito = mediaCA(media);
  expect(conceito).toBe('MI');
});

test('Deve retornar o conceito "II" para média entre 0.1 e 2.9', () => {
  const media = 1.5;
  const conceito = mediaCA(media);
  expect(conceito).toBe('II');
});

test('Deve retornar o conceito "SR" para média 0.0', () => {
  const media = 0.0;
  const conceito = mediaCA(media);
  expect(conceito).toBe('SR');
});
