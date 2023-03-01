ackage VestibulandosEVisitantes.Domain.Provas.Prova;

import VestibulandosEVisitantes.Domain.Especialidade.Especialidade;

public record ListarProva(Long id, String nome, String descricao, Especialidade especialidade, String localidade, String predio, String sala, String dia, String hora, String nota) {

    public ListarProva(Prova prova){
        this(prova.getId(), prova.getNome(), prova.getDescricao(), prova.getEspecialidade(), prova.getLocalidade(), prova.getPredio(), prova.getSala(), prova.getDia(), prova.getHora(), prova.getNota());
    }
}
