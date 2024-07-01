package ingressosJa.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
//import java.util.Date;

@Entity
@Table(name = "ingresso")
public class Ingresso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idIngresso")
    private Integer idIngresso;

    @Column(name = "dataHora")
    private String dataHora;

//    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "fkCliente")
//    @JsonIgnore
    private Integer cliente;

//    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "fkSessao")
//    @JsonIgnore
    private Integer sessao;

//    @ManyToOne(fetch = FetchType.LAZY)
////    @JsonIgnore
    @Column(name = "fkAssento")
    private Integer assento;

//    @ManyToOne(fetch = FetchType.LAZY)
    @Column(name = "fkPreco")
//    @JsonIgnore
    private Integer preco;

    public Ingresso() {
    }

//    public int getIdIngresso() {
//        return idIngresso;
//    }
//
//    public void setIdIngresso(int idIngresso) {
//        this.idIngresso = idIngresso;
//    }

    public String getDataHora() {
        return dataHora;
    }

    public void setDataHora(String dataHora) {
        this.dataHora = dataHora;
    }

//    public Cliente getCliente() {
//        return cliente;
//    }

//    public void setCliente(Cliente cliente) {
//        this.cliente = cliente;
//    }
//
//    public Sessao getSessao() {
//        return sessao;
//    }
//
//    public void setSessao(Sessao sessao) {
//        this.sessao = sessao;
//    }

//    public Integer getIdIngresso() {
//        return idIngresso;
//    }
//
//    public void setIdIngresso(Integer idIngresso) {
//        this.idIngresso = idIngresso;
//    }

    public Integer getAssento() {
        return assento;
    }

    public void setAssento(Integer assento) {
        this.assento = assento;
    }

//    public Preco getPreco() {
//        return preco;
//    }
//
//    public void setPreco(Preco preco) {
//        this.preco = preco;
//    }

    @Override
    public String toString() {
        return "Ingresso{" +
                "idIngresso=" + idIngresso +
                ", dataHora='" + dataHora + '\'' +
                ", cliente=" + cliente +
                ", sessao=" + sessao +
                ", assento=" + assento +
                ", preco=" + preco +
                '}';
    }

    public int getCliente() {
        return cliente;
    }

    public void setCliente(int cliente) {
        this.cliente = cliente;
    }

    public int getSessao() {
        return sessao;
    }

    public void setSessao(int sessao) {
        this.sessao = sessao;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }
}
