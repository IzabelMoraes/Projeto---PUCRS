ackage VestibulandosEVisitantes.Domain.Provas.Grade;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;

@Table(name="grade")
@Entity(name="Grade")
@Getter
@AllArgsConstructor
@EqualsAndHashCode(of="id")
public class Grade {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String materia;
    private String semestre;
    private String aula1;
    private String aula2;
    private String aula3;
    private String aula4;
    private String aula5;
    private String aula6;
    private String aula7;

    public Grade(CriarGrade dados) {
        this.materia = dados.materia();
        this.semestre = dados.semestre();
        this.aula1 = dados.aula1();
        this.aula2 = dados.aula2();
        this.aula3 = dados.aula3();
        this.aula4 = dados.aula4();
        this.aula5 = dados.aula5();
        this.aula6 = dados.aula6();
        this.aula7 = dados.aula7();
    }
}
