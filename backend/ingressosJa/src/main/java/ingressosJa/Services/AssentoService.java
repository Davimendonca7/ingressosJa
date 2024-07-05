package ingressosJa.Services;

import ingressosJa.DTO.AssentosSessao;
import ingressosJa.models.Assento;
import ingressosJa.models.Cinema;
import ingressosJa.models.Ingresso;
import ingressosJa.repositories.AssentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AssentoService {

    @Autowired
    private AssentoRepository assentoRepository;

    public List<AssentosSessao> listarAssentos(Integer idSessao, Integer idSala) {
        List<AssentosSessao> assentos = assentoRepository.findAssentosSala(idSala);

        List<AssentosSessao> assentosAtualizados = new ArrayList<>();

        List<Ingresso> ingressos = assentoRepository.findIngressos(idSessao);
        for(AssentosSessao assentosSessao : assentos){
            System.out.println("teste " + assentosSessao);
        }
//        for(AssentosSessao assentosSessao : assentos){
//            for(Ingresso ingresso : ingressos){
//                if(assentosSessao.getIdAssento().equals(ingresso.getAssento())){
//                    assentosSessao.setOcupado(true);
//
//                    assentosAtualizados.add(assentosSessao);
//                }
//            }
//        }

//        return assentosAtualizados;
        return null;
    }
}
