package ingressosJa.models;

import javax.persistence.*;


@Entity
@Table(name = "preco") // Nome da tabela no banco de dados
public class Preco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") // Nome da coluna no banco de dados
    private int id;

    @Column(name = "dia") // Nome da coluna no banco de dados
    private String dia;

    @Column(name = "preco") // Nome da coluna no banco de dados
    private Double preco;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDia() {
        return dia;
    }

    public void setDia(String dia) {
        this.dia = dia;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }
}
