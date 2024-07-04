package ingressosJa.Services;

import ingressosJa.DTO.FiltroSesssao;
import ingressosJa.models.Sessao;
import ingressosJa.repositories.SessaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@Service
public class SessaoService {
    @Autowired
    private SessaoRepository sessaoRepository;

    public List<Sessao> findSessaoByFilme(Integer idCinema, Integer idFilme){
        return sessaoRepository.findSessoesByFilmeIdAndCinemaId(idCinema, idFilme);
    }

    public List<Object[]> getSessoesGroupedByDate(Integer idCinema, Integer idFilme) {
        return sessaoRepository.findGroupedByDate(idCinema, idFilme);
    }

    public List<Sessao> filtroSessao(FiltroSesssao filtroSesssao){

        if(filtroSesssao.getTipoSessao().equals("Todos")){
         return sessaoRepository.findSessoesByDate(filtroSesssao.getData(), filtroSesssao.getIdCinema(), filtroSesssao.getIdFilme());
        }else{
            return sessaoRepository.findSessoesByDateAndTipoSessao(filtroSesssao.getData(), filtroSesssao.getTipoSessao(),
                    filtroSesssao.getIdCinema(), filtroSesssao.getIdFilme());
        }
    }
}
