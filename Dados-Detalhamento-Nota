package VestibulandosEVisitantes.Domain.Provas.Nota;

import VestibulandosEVisitantes.Domain.Provas.Prova.Prova;

public record DadosDetalhamentoNota(Long id, String nota) {

    public DadosDetalhamentoNota(Prova prova){
        this(prova.getId(), prova.getNota());
    }
}
