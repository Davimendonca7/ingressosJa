package ingressosJa.DTO;

import ingressosJa.models.Ingresso;

public class IngressoResposta {
    private Ingresso ingresso;
    private String mensagem;

    public IngressoResposta(Ingresso ingresso, String mensagem) {
        this.ingresso = ingresso;
        this.mensagem = mensagem;
    }

    public Ingresso getIngresso() {
        return ingresso;
    }

    public void setIngresso(Ingresso ingresso) {
        this.ingresso = ingresso;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }
}
