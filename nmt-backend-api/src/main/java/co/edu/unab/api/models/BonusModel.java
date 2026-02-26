package co.edu.unab.api.models;

public class BonusModel {
    private String concepto; //bonificacion por concepto de...tiempo, ventas, eficiencia laboral, etc
    private int valor;
    
    public BonusModel() {
    }

    public BonusModel(String concepto, int valor) {
        this.concepto = concepto;
        this.valor = valor;
    }

    public String getConcepto() {
        return concepto;
    }

    public void setConcepto(String concepto) {
        this.concepto = concepto;
    }

    public int getValor() {
        return valor;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    
}
