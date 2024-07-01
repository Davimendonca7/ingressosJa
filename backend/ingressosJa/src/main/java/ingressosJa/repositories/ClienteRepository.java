package ingressosJa.repositories;

import ingressosJa.models.Cliente;
import ingressosJa.models.Ingresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    @Query("SELECT i FROM Ingresso i WHERE i.cliente = :id")
    List<Ingresso> buscarIngressos(@Param("id") Integer id);
}
