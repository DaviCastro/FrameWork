package br.com.dao.hbn;

import javax.ejb.Stateless;

import br.com.dao.HbnDao;
import br.com.exception.DbLibException;
import br.com.interfaceDao.UsuarioDao;
import br.com.pojo.Usuario;

@Stateless
public class HbnUsuarioDao extends HbnDao<Usuario> implements UsuarioDao {

	public HbnUsuarioDao() {
		super();
		// TODO Auto-generated constructor stub
	}

}
