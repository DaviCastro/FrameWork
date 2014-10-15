package br.com.service;

import java.util.List;

import br.com.exception.DbLibException;
import br.com.util.OrderUtil;

/**
 * Interface para operações de CRUD.
 * 
 * Para utilizar voce deve definir uma interface service do pojo em questao que
 * extendera essa
 * 
 * @param <T>
 */
public interface Service<T> {

	public boolean save(T entity) throws DbLibException;

	public boolean delete(T entity) throws DbLibException;

	public List<T> find(T entity) throws DbLibException;

	public T findOne(T entity) throws DbLibException;

	public T findById(Long id) throws DbLibException;

	public List<T> find(T entity, int startingAt, int maxPerPage)
			throws DbLibException;

	public List<T> find(T entity, int startingAt, int maxPerPage,
			List<OrderUtil> order) throws DbLibException;

	public List<T> findAll() throws DbLibException;

	public int rowCount(T entity) throws DbLibException;

}
