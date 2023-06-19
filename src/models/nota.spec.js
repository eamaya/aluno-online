class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        if(this.mediaFinal.value === 10 || this.mediaFinal.value >= 9){
            return "SS - Superior "
        } else if(this.mediaFinal.value <=8.9 || this.mediaFinal.value >= 7){
            return "MS - Médio Superior "
        } else if(this.mediaFinal.value <= 6.9 || this.mediaFinal.value >= 5 ){
            return "MM - Médio "
        } else if(this.mediaFinal.value <= 4.9 || this.mediaFinal.value >= 3){
            return "MI - Médio Inperior "
        } else if(this.mediaFinal.value >=2.9 || this.mediaFinal.value >= 1){
            return "II - Inferior "
        } else if(this.mediaFinal.value === 0.0){
            return "SR - Sem rendimento "
        } 
    }
}