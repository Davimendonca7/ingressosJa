package ingressosJa.models;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.List;

@Entity
@Table(name = "filme") // Nome da tabela no banco de dados
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idFilme") // Nome da coluna no banco de dados
    private Integer idFilme;

    @Column(name = "titulo") // Nome da coluna no banco de dados
    private String titulo;

    @Column(name = "capa") // Nome da coluna no banco de dados
    private String capa;

    @Column(name = "genero") // Nome da coluna no banco de dados
    private String genero;

    @Column(name = "duracaoMin") // Nome da coluna no banco de dados
    private Integer duracaoMin;

    @Column(name = "classificacao") // Nome da coluna no banco de dados
    private String classificacao;

    @OneToMany(mappedBy = "filme", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Sessao> sessoes;

    public List<Sessao> getSessoes() {
        return sessoes;
    }

    public void setSessoes(List<Sessao> sessoes) {
        this.sessoes = sessoes;
    }

    public Integer getIdFilme() {
        return idFilme;
    }

    public void setIdFilme(Integer idFilme) {
        this.idFilme = idFilme;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getCapa() {
        return capa;
    }

    public void setCapa(String capa) {
        this.capa = capa;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Integer getDuracaoMin() {
        return duracaoMin;
    }

    public void setDuracaoMin(Integer duracaoMin) {
        this.duracaoMin = duracaoMin;
    }

    public String getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(String classificacao) {
        this.classificacao = classificacao;
    }
}
