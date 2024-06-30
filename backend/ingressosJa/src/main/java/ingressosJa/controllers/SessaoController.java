package ingressosJa.controllers;

import ingressosJa.Services.SessaoService;
import ingressosJa.models.Sessao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sessao")
public class SessaoController {
    @Autowired
    private SessaoService sessaoService;

    @GetMapping("/{idCinema}/{idFilme}")
    public List<Sessao> findSessoes(@PathVariable Integer idCinema, @PathVariable Integer idFilme){
      return sessaoService.findSessaoByFilme(idCinema, idFilme);
    }
}
