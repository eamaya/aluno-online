// Função mediaCA()
function mediaCA(nota) {
    if (nota >= 9.0 && nota <= 10) {
      return 'SS - Superior';
    } else if (nota >= 7.0 && nota < 9.0) {
      return 'MS - Médio Superior';
    } else if (nota >= 5.0 && nota < 7.0) {
      return 'MM - Médio';
    } else if (nota >= 3.0 && nota < 5.0) {
      return 'MI - Médio Inferior';
    } else if (nota >= 0.1 && nota < 3.0) {
      return 'II - Inferior';
    } else if (nota === 0.0) {
      return 'SR - Sem rendimento';
    } else {
      return 'Nota inválida';
    }
  }
  
