package VestibulandosEVisitantes.Controller;

import VestibulandosEVisitantes.Controller.Grade.CriarGrade;
import VestibulandosEVisitantes.Controller.Grade.Grade;
import VestibulandosEVisitantes.Controller.Grade.GradeRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("grade")
public class GradeController {



        @Autowired
        private GradeRepository repository;

        @PostMapping
        @Transactional
        public void criar(@RequestBody @Valid CriarGrade dados){repository.save(new Grade(dados));}

    }
