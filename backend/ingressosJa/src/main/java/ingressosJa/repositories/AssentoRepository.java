package ingressosJa.repositories;

import ingressosJa.models.Assento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AssentoRepository extends JpaRepository<Assento, Integer> {

    @Query("SELECT a FROM Assento a JOIN a.sala s JOIN s.sessoes se WHERE se.idSessao = :idSessao")
    List<Assento> findAssentosBySessaoId(@Param("idSessao") Integer idSessao);
}
