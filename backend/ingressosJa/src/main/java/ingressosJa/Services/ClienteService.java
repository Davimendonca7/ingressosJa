package ingressosJa.Services;

import ingressosJa.models.AutenticacaoResposta;
import ingressosJa.models.Cliente;
import ingressosJa.models.Ingresso;
import ingressosJa.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente cadastrarCliente(Cliente cliente){
        return clienteRepository.save(cliente);

    }
    public AutenticacaoResposta autenticarCliente(Cliente cliente){
        Optional<Cliente> clienteOptional = clienteRepository.findByNome(cliente.getNome());

        if(clienteOptional.isPresent()){
            Cliente clienteEncontrado = clienteOptional.get();

                if(clienteEncontrado.getEmail().equals(cliente.getEmail())){
                    if(clienteEncontrado.getSenha().equals(cliente.getSenha())){
                        return new AutenticacaoResposta(cliente, "Autentificado com sucesso");
                    }else{
                        return new AutenticacaoResposta(null, "Senha incorreta");
                    }
                }else{
                    return new AutenticacaoResposta(null,"Email incorreto");
                }
        }else{
            return new AutenticacaoResposta(null,"Username incorreto");
        }
    }
    public List<Ingresso> buscarIngressos(Integer id){
        return clienteRepository.buscarIngressos(id);
    }

}
