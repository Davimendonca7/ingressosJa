package ingressosJa.controllers;

import ingressosJa.Services.ClienteService;
import ingressosJa.models.Ingresso;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/{clienteId}/ingressos")
    public List<Ingresso> buscarIngressos(@PathVariable Integer clienteId){
        return clienteService.buscarIngressos(clienteId);
    }
}
