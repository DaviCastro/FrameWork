package br.com.pojo;

import java.io.Serializable;
import java.lang.reflect.Field;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import br.com.annotation.AAutoComplete;
import br.com.annotation.AHbnDao;
import br.com.annotation.AService;
import br.com.dao.Identifiable;
import br.com.interfaceDao.AlbumDao;
import br.com.service.AlbumService;

@Entity
@Table(name = "Album")
@AService(service=AlbumService.class)
@AHbnDao(hbnDao=AlbumDao.class)
@JsonRootName("album")
public class Album implements Serializable, Identifiable {

	public Album(Long id, String nome, String descricao) {
		super();
		this.id = id;
		this.nome = nome;
		this.descricao = descricao;
	}

	public Album() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * 
	 */
	private static final long serialVersionUID = 5107294344596956705L;
	@Id
	@GeneratedValue
	@Column(name = "id")
	private Long id;
	@Column(name = "nome")
	@AAutoComplete
	private String nome;

	@Column(name = "descricao")
	private String descricao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((descricao == null) ? 0 : descricao.hashCode());
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
		Album other = (Album) obj;
		if (descricao == null) {
			if (other.descricao != null)
				return false;
		} else if (!descricao.equals(other.descricao))
			return false;
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
	
	
	
	@SuppressWarnings({ "rawtypes", "unchecked"})
	public static <T> T clone(T object, boolean copiarId) {
		T clone = null;

		try {
			clone =  (T) object.getClass().newInstance();
		} catch (InstantiationException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}

		for (Class obj = object.getClass(); !obj.equals(Object.class); obj = obj
				.getSuperclass()) {
			for (Field field : obj.getDeclaredFields()) {
				field.setAccessible(true);

				if (!(copiarId==false && field.getAnnotation(Id.class)!=null)) {
					try {
						field.set(clone, field.get(object));
					} catch (Throwable t) {
					}
				}

			}
		}
		return clone;

	}
	

}
