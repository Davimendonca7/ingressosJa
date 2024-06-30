package ingressosJa.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
//import java.util.Date;

@Entity
@Table(name = "ingresso") // Nome da tabela no banco de dados
public class Ingresso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idIngresso") // Nome da coluna no banco de dados
    private Integer idIngresso;

    @Column(name = "dataHora") // Nome da coluna no banco de dados
    private String dataHora;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fkCliente") // Nome da coluna no banco de dados
    @JsonIgnore
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fkSessao") // Nome da coluna no banco de dados
    @JsonIgnore
    private Sessao sessao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fkAssento") // Nome da coluna no banco de dados
    @JsonIgnore
    private Assento assento;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fkPreco") // Nome da coluna no banco de dados
    @JsonIgnore
    private Preco preco;

    public int getIdIngresso() {
        return idIngresso;
    }

    public void setIdIngresso(int idIngresso) {
        this.idIngresso = idIngresso;
    }

    public String getDataHora() {
        return dataHora;
    }

    public void setDataHora(String dataHora) {
        this.dataHora = dataHora;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Sessao getSessao() {
        return sessao;
    }

    public void setSessao(Sessao sessao) {
        this.sessao = sessao;
    }

    public Assento getAssento() {
        return assento;
    }

    public void setAssento(Assento assento) {
        this.assento = assento;
    }

    public Preco getPreco() {
        return preco;
    }

    public void setPreco(Preco preco) {
        this.preco = preco;
    }
}
