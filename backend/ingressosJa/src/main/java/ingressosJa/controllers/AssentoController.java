package ingressosJa.controllers;

import ingressosJa.Services.AssentoService;
import ingressosJa.models.Assento;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/assento")
public class AssentoController {
    @Autowired
    private AssentoService assentoService;

    @GetMapping("/sala/{idSala}/sessao/{idSessao}")
    public List<Assento> getAssentosBySalaIdAndSessaoId(@PathVariable Integer idSala, @PathVariable Integer idSessao) {
        return assentoService.listarAssentos(idSala, idSessao);
    }


}
