package ingressosJa.repositories;

import ingressosJa.models.Ingresso;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngressoRepository extends JpaRepository<Ingresso, Integer> {

    static void VenderIngresso(Ingresso ingresso){

    }
}
