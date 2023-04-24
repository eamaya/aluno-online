function nota(disciplina, a1, a2, a3) {
    //Multiplicação de acordo com o cálculo do Iesb
        function mediaFinal() {
            const media = Math.max(
                0.4 * a1 + 0.6 * a2,
                0.4 * a1 + 0.6 * a3,
                0.4 * a3 + 0.6 * a2
            );
            return parseFloat(media.toFixed(2));
        }
    
    //Criando uma função para o cálculo da nota
    
        function mediaCA() {
            const media = mediaFinal();
            if (media >= 5) { //baseado na média do Iesb
                return "Aprovado";
            }  else {
                return "Reprovado";
            }
        }
    
        return { disciplina, a1, a2, a3, mediaFinal, mediaCA }; //Retornando as funções
    }
    module.exports = nota;