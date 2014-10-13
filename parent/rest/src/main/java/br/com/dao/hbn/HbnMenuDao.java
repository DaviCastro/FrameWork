package br.com.dao.hbn;

import javax.ejb.Stateless;

import br.com.dao.HbnDao;
import br.com.exception.DbLibException;
import br.com.interfaceDao.MenuDao;
import br.com.pojo.Menu;

@Stateless
public class HbnMenuDao extends HbnDao<Menu> implements MenuDao {

	public HbnMenuDao() {
		super();
		// TODO Auto-generated constructor stub
	}

}
