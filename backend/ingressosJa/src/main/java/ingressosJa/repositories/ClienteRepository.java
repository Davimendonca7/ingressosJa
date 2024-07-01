package ingressosJa.repositories;

import ingressosJa.models.Cliente;
import ingressosJa.models.Ingresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    Optional<Cliente> findByNome(String nome);
    Optional<Cliente> findByUsername(String nome);
    Optional<Cliente> findByEmail(String email);
    @Query("SELECT i FROM Ingresso i WHERE i.cliente = :id")
    List<Ingresso> buscarIngressos(@Param("id") Integer id);
}
