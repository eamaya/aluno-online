const Nota = require("./models/nota");
const resultado = new Nota();

describe("TESTE", () => {
  test("Teste Nota Superior", () => {
    expect(resultado.mediaCA(9.0)).toBe("SS - Superior");
  });
  test("Teste Nota Médio Superior", () => {
    expect(resultado.mediaCA(7.0)).toBe("MS - Médio Superior");
  });
  test("Teste Nota Médio", () => {
    expect(resultado.mediaCA(5.0)).toBe("MM - Médio");
  });
  test("Teste Nota Médio Inferior", () => {
    expect(resultado.mediaCA(3.0)).toBe("MI - Médio Inferior");
  });
  test("Teste Nota Inferior", () => {
    expect(resultado.mediaCA(0.1)).toBe("II - Inferior");
  });
  test("Teste Nota Sem rendimento", () => {
    expect(resultado.mediaCA(0)).toBe("SR - Sem Rendimento");
  });
});
