package home;

/**
 * Created by amanda on 27/04/17.
 */
public class Tabela {
    private final long id;
    private String nome;
    private Integer qtdColunas;
    private Integer qtdLinhas;

    public Tabela(long id, String nome, Integer qtdColunas, Integer qtdLinhas) {
        this.id = id;
        this.nome = nome;
        this.qtdColunas = qtdColunas;
        this.qtdLinhas = qtdLinhas;
    }

    public Tabela(long id, String nome) {
        this.id = id;
        this.nome = nome;
    }

    public long getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public Integer getQtdColunas() {
        return qtdColunas;
    }
    public Integer getQtdLinhas() {
        return qtdLinhas;
    }
}
