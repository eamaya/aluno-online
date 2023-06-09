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
            if(mediaFinal >= 9 && mediaFinal <= 10)
            return "SS";
            else
                if (mediaFinal >= 7  && mediaFinal < 9)
                    return "MS";
            else 
                if (mediaFinal >=5   && mediaFinal < 7 )
                    return "MM";
            else 
                if (mediaFinal >=3   && mediaFinal < 5 )
                    return "MI";
          
           else 
                if (mediaFinal >=0   && mediaFinal < 3 )
                    return "II";
            else 
                return "SR"
        }
    }


module.exports = Nota;