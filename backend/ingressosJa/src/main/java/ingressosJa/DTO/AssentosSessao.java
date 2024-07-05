package ingressosJa.DTO;

import ingressosJa.models.Assento;

import java.util.List;

public class AssentosSessao {
        private Integer id_Assento;
        private String numero_;
        private String tipo_;
        private Integer idSala_;
//        private Boolean ocupado;

        public AssentosSessao(Integer id_Assento, String numero_, String tipo_, Integer idSala_) {
                this.id_Assento = id_Assento;
                this.numero_ = numero_;
                this.tipo_ = tipo_;
                this.idSala_ = idSala_;
        }


//        public Boolean getOcupado() {
//                return ocupado;
//        }
//
//        public void setOcupado(Boolean ocupado) {
//                this.ocupado = ocupado;
//        }


        public Integer getId_Assento() {
                return id_Assento;
        }

        public void setId_Assento(Integer id_Assento) {
                this.id_Assento = id_Assento;
        }

        public String getNumero_() {
                return numero_;
        }

        public void setNumero_(String numero_) {
                this.numero_ = numero_;
        }

        public String getTipo_() {
                return tipo_;
        }

        public void setTipo_(String tipo_) {
                this.tipo_ = tipo_;
        }

        public Integer getIdSala_() {
                return idSala_;
        }

        public void setIdSala_(Integer idSala_) {
                this.idSala_ = idSala_;
        }
}
