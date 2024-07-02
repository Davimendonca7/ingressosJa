package ingressosJa.Services;

import ingressosJa.models.Assento;
import ingressosJa.models.Cinema;
import ingressosJa.repositories.AssentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssentoService {

    @Autowired
    private AssentoRepository assentoRepository;

    public List<Assento> listarAssentos(Integer idSessao) {
        return assentoRepository.findAssentosBySessaoId(idSessao);
    }
}
