package ingressosJa.controllers;

import ingressosJa.Services.IngressoService;
import ingressosJa.models.Ingresso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/ingresso")
public class IngressoController {

    @Autowired
    private IngressoService ingressoService;

    @PostMapping
    public Ingresso VenderIngresso(@RequestBody Ingresso ingresso){
//        Ingresso ingresso = new Ingresso();
//        ingresso.setDataHora(request.getDataHora());
//        ingresso.setCliente(request.getCliente());
//        ingresso.setSessao(request.getSessao());
//        ingresso.setAssento(request.getAssento());
//        ingresso.setPreco(request.getPreco());

        System.out.println("Ingresso ==> " + ingresso);
        return ingressoService.venderIngresso(ingresso);
    }

}


