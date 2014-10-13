package br.com.dao.hbn;

import javax.ejb.Stateless;

import br.com.dao.HbnDao;
import br.com.exception.DbLibException;
import br.com.interfaceDao.ExemploDao;
import br.com.pojo.Exemplo;

/**
 * Classe de implementa�ao do DAO<POJO do hibernate que deve implementar a sua
 * interface que pode possuir metodos adicionais ou herdados de dao<T> e a
 * implementa�ao deses metodos deve ficar aqui.
 * 
 * Deve ser tipado com a o pojo em questao para que o generics funcione.
 * 
 * @author dcastro
 * 
 */
@Stateless
public class HbnExemploDao extends HbnDao<Exemplo> implements ExemploDao {

	public HbnExemploDao() {
		super();
		// TODO Auto-generated constructor stub
	}

}
