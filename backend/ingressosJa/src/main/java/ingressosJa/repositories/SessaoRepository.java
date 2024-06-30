package ingressosJa.repositories;

import ingressosJa.models.Sessao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SessaoRepository extends JpaRepository<Sessao, Integer> {
    @Query("SELECT s FROM Sessao s WHERE s.filme.idFilme = :idFilme AND s.sala.cinema.idCinema = :idCinema")
    List<Sessao> findSessoesByFilmeIdAndCinemaId(@Param("idFilme") Integer idFilme, @Param("idCinema") Integer idCinema);

}
