package ingressosJa.Services;

import ingressosJa.models.Ingresso;
import ingressosJa.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public List<Ingresso> buscarIngressos(Integer id){
        return clienteRepository.buscarIngressos(id);
    }

}
