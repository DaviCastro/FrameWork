package br.com.service;

import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.inject.Inject;

import br.com.annotation.ADaoQualifier;
import br.com.dao.Dao;
import br.com.dao.Identifiable;
import br.com.exception.DbLibException;
import br.com.util.OrderUtil;

/**
 * Classe abstrata que possui a implementaçao de crud para service Generico
 * 
 * Nesta camada deverá ser feito todas as validaçoes de regra de negocio do
 * objeto pojo em questao Esta camada solicitara a camada de persistencia para
 * que de fato os dados sejam consistidos
 * 
 * @param <T>
 * @param <DAO>
 */
public abstract class GenericService<T extends Identifiable, DAO extends Dao<T>>
		implements Service<T> {

	@Inject
	@ADaoQualifier
	DAO dao;

	public GenericService() {
		super();
	}
	/**
	 * Metodo responsavel por criar um objeto do tipo <T>
	 * 
	 * @return
	 */
	protected T createData() {
		try {
			return getObjectClass().newInstance();
		} catch (InstantiationException e) {
			return null;
		} catch (IllegalAccessException e) {
			return null;

		}
	}

	/**
	 * Metodo responsavel por recuperar a classe do tipo <T>
	 * 
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public Class<T> getObjectClass() {
		return (Class<T>) ((ParameterizedType) getClass()
				.getGenericSuperclass()).getActualTypeArguments()[0];
	}

	/**
	 * Metodo que deverá ser implementado pela classe filha Service para
	 * validaçoes de regra de negocio.
	 * 
	 * @return
	 */
	public abstract boolean consiste();

	/**
	 * Metodo que chama o dao em questao para save.
	 */
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public boolean save(T entity) throws DbLibException {

		consiste();
		if (entity.getId() == null)
			dao.save(entity);
		else
			dao.merge(entity);

		return true;
	}

	/**
	 * Metodo que chama o dao em questao para delete
	 */
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public boolean delete(T entity) throws DbLibException {

		dao.remove(entity);
		return true;
	}

	/**
	 * Metodo que chama o dao em questao para Search
	 */
	public List<T> search(T entity) throws DbLibException {
		return dao.findByExample(entity);
	}

	public List<T> search(T entity, int startingAt, int maxPerPage)
			throws DbLibException {
		return dao.findByExample(entity, startingAt, maxPerPage);
	}

	public List<T> findAll() throws DbLibException {
		return dao.findAll();
	}

	public T searchOne(T entity) throws DbLibException {
		return dao.findOneByExample(entity);
	}

	public List<T> search(T entity, int startingAt, int maxPerPage,
			List<OrderUtil> order) throws DbLibException {
		return dao.findByExample(entity, startingAt, maxPerPage, order);
	}

	public int rowCount(T entity) throws DbLibException {
		return dao.rowCount(entity);
	}

	public void beforeInsert(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void afterInsert(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void beforeDelete(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void afterDelete(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void beforeSearch(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void afterSearch(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void beforeUpdate(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

	public void afterUpdate(T entity) throws DbLibException {
		// TODO Auto-generated method stub

	}

}
