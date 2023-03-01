package VestibulandosEVisitantes.Controller;

import VestibulandosEVisitantes.Domain.Provas.Nota.DadosAtualizacaoNota;
import VestibulandosEVisitantes.Domain.Provas.Nota.DadosDetalhamentoNota;
import VestibulandosEVisitantes.Domain.Provas.Prova.ProvaRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("notas")
public class NotaController {

    @Autowired
    private ProvaRepository repository;

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity atualizarNota(@PathVariable Long id, @RequestBody @Valid DadosAtualizacaoNota dados){
        var prova = repository.getReferenceById(id);
        prova.atualizarInformacoesNota(dados);

        return ResponseEntity.ok(new DadosDetalhamentoNota(prova));
    }
}
