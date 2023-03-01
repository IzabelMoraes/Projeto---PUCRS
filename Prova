package VestibulandosEVisitantes.Domain.Provas.Prova;

import VestibulandosEVisitantes.Domain.Especialidade.Especialidade;
import VestibulandosEVisitantes.Domain.Provas.Nota.DadosAtualizacaoNota;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Table(name="provas")
@Entity(name="Prova")
@Getter
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Prova {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;

    @Enumerated(EnumType.STRING)
    private Especialidade especialidade;

    private String localidade;

    private String predio;

    private String sala;

    private String dia;

    private String hora;

    private String nota;

    private Boolean ativo;

    public Prova(){}

    public Prova(CriarProva dados) {
        this.ativo = true;
        this.nome = dados.nome();
        this.descricao = dados.descricao();
        this.especialidade = dados.especialidade();
        this.localidade = dados.localidade();
        this.predio = dados.predio();
        this.sala = dados.sala();
        this.dia = dados.dia();
        this.hora = dados.hora();
        this.nota = dados.nota();
    }

    public void atualizarInformacoesNota(DadosAtualizacaoNota dados){
        if(dados.nota() != null){
            this.nota = dados.nota();
        }
    }

    public void atualizarInformacoes(DadosAtualizacaoProva dados){
        if(dados.nome() != null){
            this.nome = dados.nome();
        }
        if(dados.descricao() != null){
            this.descricao = dados.descricao();
        }
        if(dados.localidade() != null){
            this.localidade = dados.localidade();
        }
        if(dados.predio() != null){
            this.predio = dados.predio();
        }
        if(dados.sala() != null){
            this.sala = dados.sala();
        }
        if(dados.dia() != null){
            this.dia = dados.dia();
        }
        if(dados.hora() != null){
            this.hora = dados.hora();
        }
    }



    public void excluir() {
        this.ativo = false;
    }
}
