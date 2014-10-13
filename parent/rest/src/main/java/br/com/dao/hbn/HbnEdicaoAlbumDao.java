package br.com.dao.hbn;

import javax.ejb.Stateless;

import br.com.dao.HbnDao;
import br.com.exception.DbLibException;
import br.com.interfaceDao.EdicaoAlbumDao;
import br.com.pojo.EdicaoAlbum;

@Stateless
public class HbnEdicaoAlbumDao extends HbnDao<EdicaoAlbum> implements
		EdicaoAlbumDao {

	public HbnEdicaoAlbumDao() {
		super();
		// TODO Auto-generated constructor stub
	}

}
