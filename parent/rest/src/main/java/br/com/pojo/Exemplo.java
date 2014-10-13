package br.com.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import br.com.annotation.AAutoComplete;
import br.com.annotation.AHbnDao;
import br.com.annotation.AService;
import br.com.dao.Identifiable;
import br.com.dao.hbn.HbnExemploDao;
import br.com.service.ExemploServiceImpl;

@Entity
@Table(name = "exemplo") 
@AService(service = ExemploServiceImpl.class)
@AHbnDao(hbnDao=HbnExemploDao.class)
/**
 * Toda classe pojo mapiada no hibernate dever� implementar 
 * Identifiable com a ideia de identificar a chave primaria.
 *
 *Toda classe pojo que desejar ter autoComplete na Camada devera anotar o campo que tera a consulta
 * com a anotacao AutoComplete.
 */
public class Exemplo implements Serializable, Identifiable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue()
	@Column(name = "id")
	private Integer id;

	@AAutoComplete
	@Column(name = "nome")
	private String nome;

	@Column(name = "idade")
	private Integer idade;

	public Exemplo() {
	}

	public Exemplo(Integer id, String nome) {
		this.id = id;
		this.nome = nome;
	}

	public Exemplo(String nome) {
		this.nome = nome;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((nome == null) ? 0 : nome.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Exemplo other = (Exemplo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (nome == null) {
			if (other.nome != null)
				return false;
		} else if (!nome.equals(other.nome))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Exemplo [nome=" + nome + "]";
	}

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

}
