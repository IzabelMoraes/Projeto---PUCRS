package VestibulandosEVisitantes.Controller;

import VestibulandosEVisitantes.Domain.Usuario.DadosAutentic;
import VestibulandosEVisitantes.Domain.Usuario.DadosCadastroUsuario;
import VestibulandosEVisitantes.Domain.Usuario.UsuarioRepository;
import VestibulandosEVisitantes.Domain.Usuario.usuario;
import VestibulandosEVisitantes.Infra.Security.DadosTokenJWT;
import VestibulandosEVisitantes.Infra.Security.TokenService;
import VestibulandosEVisitantes.Infra.Security.ValidaCPF;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SegurancaController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    private TokenService tokenService;


    @PostMapping
    @RequestMapping("cadastros")
    public ResponseEntity cadastrar(@RequestBody DadosCadastroUsuario dados) {
        usuario c = new usuario(dados);
        usuario u = repository.findByEmail(dados.email());
        if(u == null) {
            c.setCPF(c.getCPF());
            // usando os metodos isCPF() e imprimeCPF() da classe "ValidaCPF"
            if(ValidaCPF.isCPF(c.getCPF()) == true){
            c.setSenha(passwordEncoder.encode(c.getSenha()));

            repository.save(c);

            var authenticationToken = new UsernamePasswordAuthenticationToken(dados.email(), dados.senha());

            var authentication = manager.authenticate(authenticationToken);

            var tokenJWT = tokenService.gerarToken((usuario) authentication.getPrincipal());





                return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
            }else{return new ResponseEntity("CPF inválido", HttpStatus.BAD_REQUEST);}

        }else{return new ResponseEntity("Email já registrado", HttpStatus.ALREADY_REPORTED);}
    }

    @PostMapping("login")
    public ResponseEntity efetuarLogin(@RequestBody @Valid DadosAutentic dados) {
        usuario u = repository.findByEmail(dados.email());


        if (u == null) {
            return new ResponseEntity("Usuario não encontrado", HttpStatus.NOT_FOUND);
        }

        if (passwordEncoder.matches(dados.senha(), u.getPassword())) {

            var authenticationToken = new UsernamePasswordAuthenticationToken(dados.email(), dados.senha());

            var authentication = manager.authenticate(authenticationToken);

            var tokenJWT = tokenService.gerarToken((usuario) authentication.getPrincipal());


            return new ResponseEntity(new DadosTokenJWT(tokenJWT), HttpStatus.OK);

        } else {
            return new ResponseEntity("Senha incorreta!", HttpStatus.BAD_REQUEST);
        }
    }
}
