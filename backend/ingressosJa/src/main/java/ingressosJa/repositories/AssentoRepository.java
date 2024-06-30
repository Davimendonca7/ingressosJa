package ingressosJa.repositories;

import ingressosJa.models.Assento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssentoRepository extends JpaRepository<Assento, Integer> {

    @Query("SELECT a FROM Assento a WHERE a.sala.idSala = :idSala AND a.sala.idSala IN (SELECT s.sala.idSala FROM Sessao s WHERE s.idSessao = :idSessao)")
    List<Assento> findAssentosBySalaIdAndSessaoId(@Param("idSala") Integer idSala, @Param("idSessao") Integer idSessao);}
