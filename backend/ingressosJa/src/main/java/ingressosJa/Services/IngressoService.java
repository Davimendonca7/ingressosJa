package ingressosJa.Services;

import ingressosJa.models.Assento;
import ingressosJa.models.Cliente;
import ingressosJa.models.Ingresso;
import ingressosJa.models.Sessao;
import ingressosJa.repositories.AssentoRepository;
import ingressosJa.repositories.ClienteRepository;
import ingressosJa.repositories.IngressoRepository;
import ingressosJa.repositories.SessaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class IngressoService {

    @Autowired
    private IngressoRepository ingressoRepository;
    @Autowired
    private ClienteRepository clienteRepository;

    public Ingresso venderIngresso(Ingresso ingresso) {
        if (ingresso.getSessao() != 0 && ingresso.getAssento() != null) {
            return ingressoRepository.save(ingresso);
        } else {
            throw new IllegalArgumentException("Sessão ou Assento não especificados no ingresso.");
        }
    }
}

