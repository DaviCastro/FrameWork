package br.com.dao.hbn;

import javax.ejb.Stateless;
import javax.inject.Named;

import br.com.dao.HbnDao;
import br.com.interfaceDao.AlbumDao;
import br.com.pojo.Album;

@Stateless
@Named
public class HbnAlbumDao extends HbnDao<Album> implements AlbumDao {

	public HbnAlbumDao() {
		super();
		// TODO Auto-generated constructor stub
	}

}
