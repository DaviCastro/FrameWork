package br.com.pojo;

import java.io.Serializable;
import java.lang.reflect.Field;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import br.com.annotation.AAutoComplete;
import br.com.annotation.AHbnDao;
import br.com.annotation.AService;
import br.com.dao.Identifiable;
import br.com.interfaceDao.AlbumDao;
import br.com.service.AlbumService;

import com.fasterxml.jackson.annotation.JsonRootName;

@Entity
@Table(name = "Album")
@AService(service=AlbumService.class)
@AHbnDao(hbnDao=AlbumDao.class)
@JsonRootName("album")
public class Album implements Serializable, Identifiable {

	public Album(Long id, String nome, String descricao) {
		super();
		this.id = id;
		this.name = nome;
		this.description = descricao;
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
	private String name;

	@Column(name = "descricao")
	private String description;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
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
