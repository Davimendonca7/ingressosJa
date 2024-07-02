package ingressosJa.Services;

import ingressosJa.models.Sessao;
import ingressosJa.repositories.SessaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SessaoService {
    @Autowired
    private SessaoRepository sessaoRepository;

    public List<Sessao> findSessaoByFilme(Integer idCinema, Integer idFilme){
        return sessaoRepository.findSessoesByFilmeIdAndCinemaId(idCinema, idFilme);
    }

    public List<Object[]> getSessoesGroupedByDate() {
        return sessaoRepository.findGroupedByDate();
    }

    public List<Sessao> filtroSessao(String data, String tipoSessao){
        if(tipoSessao.equals("Todos")){
         return sessaoRepository.findSessoesByDate(data);
        }else{
            return sessaoRepository.findSessoesByDateAndTipoSessao(data, tipoSessao);
        }
    }
}
