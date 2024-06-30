package ingressosJa.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "cliente") // Nome da tabela no banco de dados
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idCliente") // Nome da coluna no banco de dados
    private Integer idCliente;

    @Column(name = "nome") // Nome da coluna no banco de dados
    private String nome;

    @Column(name = "email") // Nome da coluna no banco de dados
    private String email;

    @Column(name = "senha") // Nome da coluna no banco de dados
    private String senha;

    @Column(name = "telefone") // Nome da coluna no banco de dados
    private String telefone;

    @Column(name = "cpf") // Nome da coluna no banco de dados
    private String cpf;

    @OneToMany(mappedBy = "cliente", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Ingresso> ingressos;

    public Integer getId() {
        return idCliente;
    }

    public void setId(Integer id) {
        this.idCliente = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
