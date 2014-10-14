package br.com.service;

import javax.ejb.Stateless;
import javax.inject.Named;

import br.com.dao.Dao;
import br.com.pojo.Album;

@Stateless
@Named
public class AlbumServiceImpl extends GenericService<Album, Dao<Album>>
		implements AlbumService {
	@Override
	public boolean consiste() {

		return false;
	}

	public AlbumServiceImpl() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void teste() {
		// TODO Auto-generated method stub
		
	}
	
	
	

}
